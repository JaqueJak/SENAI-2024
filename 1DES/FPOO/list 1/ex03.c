#include <stdio.h>

int main() {
    char nome[30];
    printf("Digite seu nome completo a seguir: ");
    fgets(nome, sizeof(nome), stdin);

    float salario;
    printf("Digite a seguir o valor inteiro do seu salario: R$");
    scanf("%f", &salario);

    float percentual;
    printf("Digite a seguir o valor inteiro do percentual de reajuste do seu salario: ");
    scanf("%f", &percentual);

    float novosalario = (salario * percentual / 100) + salario;

    printf("Ola, %sCom o reajuste do seu salario de %.2f%, ele passou a ser de R$%.2f.", nome, salario, novosalario);

    return 0;
}
