#include <stdio.h>

int main() {
	int totalpontos, numvitorias, numperdas,time;

    printf("Digite o nome do time de futebol: ");
    scanf("%d", &time);

    printf("Digite a quantidade de vitorias que esse time teve: ");
    scanf("%d", &numvitorias);

    printf("Digite a quantidade de empates que esse time teve: ");
    scanf("%d", &numperdas);

    totalpontos = numvitorias * 3 + numperdas;

    printf("O time %d Esta com %d vitorias e %d empates resultando em %d pontos.", time, numvitorias, numperdas, totalpontos);

    return 0;
}
