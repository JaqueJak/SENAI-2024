#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"";)
    int num1, num2, i;

    printf("Digite o primeiro valor inteiro: ");
    scanf("%d", &num1);

    printf("Digite o segundo valor inteiro (diferente do primeiro): ");
    scanf("%d", &num2);

    if (num1 == num2) {
        printf("Os valores devem ser diferentes!\n");
        return 1;
    }

    int smaller = (num1 < num2) ? num1 : num2;
    int larger = (num1 > num2) ? num1 : num2;

    printf("Valores entre %d e %d:\n", smaller, larger);
    for (i = smaller + 1; i < larger; i++) {
        printf("%d ", i);
    }
    printf("\n");

    return 0;
}

