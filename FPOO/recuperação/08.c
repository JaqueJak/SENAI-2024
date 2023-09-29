#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	char nome[5][15];
	int maiorIdade = -1, idade[5], i, nomeMaisVelho[50];
	
	for(i = 0; i < 5; i++){
		printf("Digite um nome: ");
		i + 1;
		scanf("%s", &nome[i]);
		
		printf("Digite a idade de %s: ", nome[i]);
		scanf("%d", &idade[i]);
		
		if(idade[i] > maiorIdade){
			maiorIdade = idade[i];
		}
	}
	for(i = 0; i < 5; i++){
		if(idade[i] == maiorIdade){
			strcpy(nomeMaisVelho, nome[i]);
			break;
		}
	}
	printf("A pessoa mais velha é %s com %d anos.\n", nomeMaisVelho, maiorIdade);
	
	return 0;
}
