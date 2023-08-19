#include <stdio.h>

int main() {
    int x, z, y;
    printf("Digite o um valor inteiro: ");
    scanf("%d", &x);

    printf("Digite mais um valor inteiro: ");
    scanf("%d", &z);

    printf("Digite outro valor inteiro: ");
    scanf("%d", &y);

    float a = (x + z) / y;

    printf("A soma de %d e %d divida por %d e igual a %.f", x, z, y, a);

    return 0;
}
