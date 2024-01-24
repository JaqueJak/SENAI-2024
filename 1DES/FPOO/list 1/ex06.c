#include <stdio.h>

int main() {
    int velocidade = 900; // 900 km/h
    float distancia;
    printf("Digite a distancia a ser percorrida pelo aviao: ");
    scanf("%f", &distancia);

    float tempo = distancia / velocidade;

    printf("O aviao ira percorrer uma distancia de %.2fkm em aproximadamente %.2f hora(s).", distancia, tempo);

    return 0;
}
