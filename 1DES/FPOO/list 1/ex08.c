#include <stdio.h>
int main() {
    float pi = 3.14;

    float raio;
    printf("Digite o raio do cilindro em centimetros: ");
    scanf("%f", &raio);

    float altura;
    printf("Digite a altura do mesmo cilindro em centimetros: ");
    scanf("%f", &altura);

    float area = 2 * pi * raio * (raio + altura);
    float volume = pi * (raio * raio) * altura;

    printf("A area do cilindro informado e de %.2f cm2.\n", area);
    printf("O volume do cilindro e aproximadamente %.2f cm3.", volume);

    return 0;
}
