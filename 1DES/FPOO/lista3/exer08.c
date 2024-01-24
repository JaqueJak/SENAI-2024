#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
    int num, i;
    unsigned long long fatorial = 1;

    printf("Digite um número inteiro positivo: ");
    scanf("%d", &num);

    if (num < 0) {
        printf("Fatorial não está definido para números negativos!\n");
    } else {
        for (i = 1; i <= num; ++i) {
            fatorial *= i;
        }
        printf("O fatorial de %d é %llu\n", num, fatorial);
    }

    return 0;
}

