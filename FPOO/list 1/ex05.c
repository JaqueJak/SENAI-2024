#include <stdio.h>

int main() {
    int n;
    printf("Digite um numero positivo diferente de zero: ");
    scanf("%d", &n);

    int resultado1 = n - 1;
    int resultado2 = n + 1;

    printf("%d - 1 = %d\n%d + 1 = %d", n, resultado1, n, resultado2);

    return 0;
}
