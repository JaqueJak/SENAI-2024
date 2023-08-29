#include <stdio.h>
#include <locale.h>
#include <string.h>
int main(){
	setlocale(LC_ALL,"");
	char cidade[20], nome[15];
	int total, votos, i;
	
	printf("Digite o nome da cidade: ");
	scanf("%s", &cidade);
	
	printf("Informe a quantidade de candidatos: ");
	scanf("%d", &total);
	
	for(i = 0; i < total; i++){
		printf("Digite o nome do candidato: ");
		scanf("%s", &nome, &votos);
		printf("Digite o número de votos: ");
		scanf("%d", &votos);
	}
	
	
return 0;
}
