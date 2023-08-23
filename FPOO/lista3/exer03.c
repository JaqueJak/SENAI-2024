#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
    int numero, i;

    printf("Digite um valor inteiro positivo: ");
    scanf("%d", &numero);

    if (numero < 0) {
        printf("O número digitado não é positivo!\n");
        return 1;
    }

    printf("Valores entre 0 e %d:\n", numero);
    for (i = 0; i <= numero; i++) {
        printf("%d\n", i);
    }

    return 0;
}

