#include <stdio.h>
int main(){
    int numeros[10];
    int i, maior;

    printf("Digite 10 numeros inteiros:\n");
    for (i = 0; i < 10; i++) {
        scanf("%d", &numeros[i]);
    }

    maior = numeros[0];
    for (i = 1; i < 10; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    printf("O maior numero digitado foi: %d\n", maior);

    return 0;
}

