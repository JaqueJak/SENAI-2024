class ingrediente {
    constructor(descricao) {
        this.descricao = descricao;
    }
}

class comida {
    constructor(nome, tipo, peso) {
        this.nome = nome != undefined ? nome : "comida generica";
        this.tipo = tipo != undefined ? tipo : "tipo generica";
        this.peso = peso != undefined ? peso : 0;
    }
}

class salgada {
    constructor(nome, peso) {
        this.nome = nome != undefined ? nome : "comida generica";
        this.tipo = "salgada";
        this.peso = peso != undefined ? peso : 0;
    }
}

class doce {
    constructor(nome, peso) {
        this.nome = nome != undefined ? nome : "comida generica";
        this.tipo = "doce";
        this.peso = peso != undefined ? peso : 0;
    }
}

class comidaBuilder {
    constructor(nome, tipo, peso) {
        constructor(nome, tipo, peso){
            if (nome != undefined && tipo != undefined && peso != undefined) {
                if (tipo == "salgada")
                    this.comida = new salgada(nome, peso);
                else if (tipo == "doce")
                    this.comida = new doce(nome, peso);
                else
                    this.comida = new comida(nome, tipo, peso);
            } else if (nome != undefined && tipo != undefined) {
                if (tipo == "salgada")
                    this.comida = new salgada(nome);
                else if (tipo == "doce")
                    this.comida = new doce(nome);
                else
                    this.comida = new comida(nome, tipo);
            } else if (nome != undefined) {
                this.comida = new comida(nome);
            } else {
                this.comida = new comida();
            }
        }
    }
    addIngrediente(ingrediente){
        if (this.comida.ingrediente == undefined){
            this.comida.ingrediente = [];
        }
        this.comida.ingrediente.push(ingrediente);
        return this;
    }
    
    build(){
        return this.comida;
    }
}

const comidas =[
    new comidaBuilder(),
    new comidaBuilder("arroz", "salgada", 100),
    new comidaBuilder("feijao"),
    new comidaBuilder("brigadeiro", "doce"),
    new comidaBuilder("bolo", "doce", 200),
    new comidaBuilder("macarrao", "salgada", 150),
    new comidaBuilder("pao", "salgada", 50),
    new comidaBuilder("pizza", "salgada", 200),
    new comidaBuilder("salada", "salgada", 100),
    new comidaBuilder("suco", "doce", 100),
    new comidaBuilder("tapioca", "salgada", 100),
    new comidaBuilder("torta", "doce", 200),
    new comidaBuilder("yakisoba", "salgada", 200),
    new comidaBuilder()
]

comidas[1].addIngredientes(new ingredientes("sal"));
comidas[1].addIngredientes(new ingredientes("alho"));
comidas[3].addIngredientes(new ingredientes("leite condensado"));
comidas[3].addIngredientes(new ingredientes("chocolate em pó"));

console.log(comida);
console.log(comidas);
console.log(JSON.stringify(comidas, null, 2));