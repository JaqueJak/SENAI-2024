#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
    int i, soma = 0;

    for (i = 0; i <= 100; i++) {
        soma += i;
    }
    printf("A soma dos valores inteiros entre 0 e 100 é: %d\n", soma);

    return 0;
}

