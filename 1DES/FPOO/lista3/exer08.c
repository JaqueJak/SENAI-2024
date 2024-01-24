#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
    int num, i;
    unsigned long long fatorial = 1;

    printf("Digite um n�mero inteiro positivo: ");
    scanf("%d", &num);

    if (num < 0) {
        printf("Fatorial n�o est� definido para n�meros negativos!\n");
    } else {
        for (i = 1; i <= num; ++i) {
            fatorial *= i;
        }
        printf("O fatorial de %d � %llu\n", num, fatorial);
    }

    return 0;
}

