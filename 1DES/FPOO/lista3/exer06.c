#include <stdio.h>
int main(){
    int i, numero;

    printf("Digite um numero inteiro positivo: ");
    scanf("%d", &numero);

    if (numero < 0) {
        printf("Numero negativo inserido. Por favor, insira um valor positivo.\n");
    } else {
        printf("Valores impares entre 0 e %d:\n", numero);
        for (i = 1; i <= numero; i += 2) {
            printf("%d\n", i);
        }
    }
    return 0;
}

