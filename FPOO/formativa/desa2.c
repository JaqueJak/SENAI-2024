#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	char cidade[20], nome[20];
	int i, candidatos, branco, nulo;
	float porcent[20], votos[20], total;
	
	printf("Digite o nome da cidade: ");
	scanf("%s", &cidade);
	
	printf("Informe a quantidade de candidatos: ", cidade);
	scanf("%d", &candidatos);
	
	for(i = 1; i <= candidatos; i++){
		printf("\nDigite o nome do candidato: ", i);
		scanf("%s", &nome[i]);
		nome[i] + i;
		
		printf("Digite o número de votos: ", i);
		scanf("%d", &votos[i]);
		votos[i] + i;
	}
	
	printf("\nQuantos votos em branco: ");
	scanf("%d", &branco);
	
	printf("\nQuantos votos nulos: ");
	scanf("%d", &nulo);
	
	for(i = 1; i <= candidatos; i++){
		total = total + votos[i];
		votos[i] + i;
	}
	
	for(i = 1; i <= candidatos; i++){
		porcent[i] = (votos[i] / total) * 100;
		porcent[i] + i;
	}
	printf("\nTotal de votos %d\nVotos nulos %d\n", total, nulo);
	printf("Candidato\t\tporcent\n");
	}
	
return 0;
}
