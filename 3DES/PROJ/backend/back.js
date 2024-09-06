import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => setData(response.data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div>
      <h1>Dados do Backend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
