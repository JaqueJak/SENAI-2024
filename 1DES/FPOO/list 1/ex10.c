#include <stdio.h>

int main() {
    char cidade;
    printf("Digite o nome da cidade: ");
    fgets(cidade, sizeof(cidade), stdin);

    int eleitores;
    printf("Digite o numero total de eleitores: ");
    scanf("%d", &eleitores);

    int total;
    printf("Digite o numero total de votos apurados: ");
    scanf("%d", &total);

    float totalApurado = total * 100 / eleitores;

    printf("Da cidade de %sUm total de %.2f porcento de todos os eleitores participaram dos votos.", cidade, totalApurado);

    return 0;
}
