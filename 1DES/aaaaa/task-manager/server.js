const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Chave secreta para o JWT
const JWT_SECRET = 'seu_jwt_secreto';

// Função para gerar um JWT
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

// Rota de cadastro de usuário
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Verificar se o usuário já existe
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return res.status(400).json({ error: 'Usuário já existe' });
  }

  // Hash da senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Criar o novo usuário
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Gerar o token
  const token = generateToken(user.id);

  res.status(201).json({ message: 'Usuário criado com sucesso', token });
});

// Rota de login de usuário
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Verificar se o usuário existe
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return res.status(400).json({ error: 'Credenciais inválidas' });
  }

  // Comparar a senha
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Credenciais inválidas' });
  }

  // Gerar o token
  const token = generateToken(user.id);

  res.json({ message: 'Login bem-sucedido', token });
});

// Middleware para verificar o JWT
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(403).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.userId = user.userId;
    next();
  });
};

// Rota para obter todas as tarefas de todos os usuários
app.get('/tasks', authenticateToken, async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        user: true,  // Inclui o nome do usuário que criou a tarefa
      },
    });
    res.json(tasks);  // Retorna todas as tarefas
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter as tarefas' });
  }
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', authenticateToken, async (req, res) => {
  const { description, sector_name, priority } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        user_id: req.userId,  // Usamos o user_id do token JWT
        description,
        sector_name,
        priority,
        status: 'A fazer',  // O status inicial da tarefa
      },
    });

    res.json(task);  // Retorna a tarefa criada
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

// Rota para atualizar o status de uma tarefa (autenticada)
app.put('/tasks/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (task.user_id !== req.userId) {
      return res.status(403).json({ error: 'Tarefa não pertence a este usuário' });
    }

    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    res.json(updatedTask);  // Retorna a tarefa atualizada
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o status da tarefa' });
  }
});

// Rota para excluir uma tarefa
app.delete('/tasks/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;

  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (task.user_id !== req.userId) {
      return res.status(403).json({ error: 'Tarefa não pertence a este usuário' });
    }

    await prisma.task.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: 'Tarefa excluída com sucesso' });  // Confirma a exclusão da tarefa
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir tarefa' });
  }
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
