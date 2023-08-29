#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	char nome[15], genero;
	int i, total, idade, dias, status;
	
	printf("Informe a quantidade de doadores: ");
	scanf("%d", &total);
	
	for(i = 0; i < total; i++){
		printf("Digite seu nome: ");
		scanf("%s", &nome);
		printf("Digite sua idade: ");
		scanf("%d", &idade);
		printf("Informe seu gênero F.feminino ou M.masculino: ");
		scanf("%s", &genero);
		printf("Informe o tempo em que está sem doar sangue: ");
		scanf("%d", &dias);
		
		if(genero == 'F'){
			if(dias >= 90)
			printf("Apto");
			scanf("%d", &status);
			else printf("Inapto");
			scanf("%d", &status);
		}else if(genero == 'M'){
			if(dias >= 60)
			printf("Apto");
			scanf("%d", &status);
			else printf("Inapto");
			scanf("%d", &status);
		}
}
		printf("Nome: %s\n Idade: %d\n Genero: %s Status: %d", nome, idade, genero, status);
	
	}
	
	return 0;
}
