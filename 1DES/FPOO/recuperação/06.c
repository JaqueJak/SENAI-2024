#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int distan;
	float veloci, tempo;
	
	printf("Digite um valor inteiro da distância a ser percorrida de uma cidade a outra: ");
	scanf("%d", &distan);
	
	printf("Digite um valor inteiro da velocidade do carro: ");
	scanf("%f", &veloci);
	
	tempo = distan / veloci;
	
	printf("O carro a %.2fKm/h precisara de %.2f horas aproximadamente para percorrer %dKm.", veloci, tempo, distan);
	
	return 0;
}
