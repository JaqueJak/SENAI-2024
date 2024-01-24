#include <stdio.h>
int main() {
    int porcento = 5; // 5% de reajuste

    char produto;
    printf("Digite o nome do produto a receber um reajuste de preco: ");
	scanf("%c", &produto);
    int preco;
    printf("Digite o valor do produto: R$");
    scanf("%d", &preco);

    float novoValor = (preco * porcento / 100) + preco;

    printf("O produto %s Agora custa R$%.2f com o reajuste de valor.", produto, novoValor);

    return 0;
}
