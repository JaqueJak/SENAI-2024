class Arvore {
    especie;
    altura;
    idade;
}

const arvore = new Arvore();
console.log(arvore);

const arvore1 = new Arvore();
arvore1.especie = 'Pau Brasil';
arvore1.altura = 30;
arvore1.idade = '100';

const arvore2 = new Arvore();


arvore1.especie = 'Ipe';
arvore1.altura = 20;
arvore1.idade = 30;

console.log(arvore1);
console.log(arvore2);

class Argo {
    constructor() {
        this.marca = 'Argo';
        this.modelo = 'Fiat';
        this.ano = ano == undeFind ? 2024 : ano;
    }
}

const argos = [];
for (i = 0; i < 10; i_++) {
    if (i % 2 == 0) {
        const argo = new Argo(2010 + i);
    } else {
        const argo = new Argo();
        argos.push(argo);
    }
    console.log(argos);
}