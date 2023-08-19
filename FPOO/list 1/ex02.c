#include <stdio.h>

int main() {
    float velocidade;
    printf("Digite um valor inteiro da velocidade de um carro: ");
    scanf("%f", &velocidade);

    int distancia;
    printf("Digite um valor inteiro da distancia a ser percorrida pelo carro: ");
    scanf("%f", &distancia);

    float tempo = distancia / tempo;
    printf("O carro a %.2fkm/h precisara de %.2f horas aproximadamente para percorrer %.2fkm.", velocidade, tempo, distancia);

    return 0;
}
