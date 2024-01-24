#include <stdio.h>
int main() {
    int carga = 18;
    int produto = 250; 
    int producao;
    printf("Digite a quantas fazendas de laranjas: ");
    scanf("%d", &producao);

    int caminhao;
    printf("Digite quantos caminhoes para o transporte: ");
    scanf("%d", &caminhao);

    int transporte = (producao * produto) / (produto * caminhao);

    printf("Sera necessario %d viagens de %d caminhoes para transportar todas as laranjas.", transporte, producao);

    return 0;
}
