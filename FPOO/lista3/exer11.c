#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
    int i, a, numeros[5];

    printf("Digite 5 números inteiros:\n");
    for (i = 0; i < 5; i++) {
        scanf("%d", &numeros[i]);
    }

    for (i = 0; i < 4; i++) {
        for (a = 0; a < 4 - i; a++) {
            if (numeros[a] > numeros[a + 1]) {
                int temp = numeros[a];
                numeros[a] = numeros[a + 1];
                numeros[a + 1] = temp;
            }
        }
    }
    printf("Números em ordem crescente:\n");
    for (i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\n");

    return 0;
}

