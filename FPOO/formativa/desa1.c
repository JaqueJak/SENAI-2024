#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	char nome[15], genero[15];
	int i, total, idade[15], dias[15];
	
	printf("Informe a quantidade de doadores: ");
	scanf("%d", &total);
	
	for(i = 1; i <= total; i++){
		printf("Digite seu nome: ");
		scanf("%s", &nome[i]);
		nome[i] + i;
		
		printf("Digite sua idade: ");
		scanf("%d", &idade[i]);
		idade[i] + i;
		
		printf("Informe seu gênero F.feminino ou M.masculino: ");
		scanf("%s", &genero[i]);
		genero[i] + i;
		
		printf("Informe o tempo em que está sem doar sangue: ");
		scanf("%d", &dias[i]);
		dias[i] + i;
		
		}if(genero[i] == "F"){
			if(dias[i] > 90)
			printf("\nApto");
			else{
				printf("\nInapto");
			} 
		}
		
		if(genero[i], "M"){
			if(dias[i] > 60)
			printf("\nApto");
			else{
				printf("\nInapto");
			} 
	}
	
	return 0;
}
