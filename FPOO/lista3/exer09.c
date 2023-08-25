#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
    int i, numero;

    printf("Digite um número entre 0 e 10: ");
    scanf("%d", &numero);

    if (numero < 0 || numero > 10) {
        printf("Número fora do intervalo permitido.\n");
    } else {
        printf("Tabuada do %d:\n", numero);
        for (i = 1; i <= 10; i++) {
            printf("%d x %d = %d\n", numero, i, numero * i);
        }
    }
    return 0;
}

