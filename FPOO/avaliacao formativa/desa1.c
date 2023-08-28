#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	char nome[15], genero;
	int i, total, idade, dias;
	
	printf("Digite a quantidade de doadores: ");
	scanf("%d", &total);
	
	for(i = 0; i < total; i++){
		printf("Digite seu nome: ");
		scanf("%s", &nome);
		printf("Digite sua idade: ");
		scanf("%d", &idade);
		printf("Informe seu sexo F ou M: ");
		scanf("%s", &genero);
		printf("Informe sua última doação em dias: ");
		scanf("%d", &dias);

	if(genero == 'F'){
		if(dias < 90) printf("Inapto");
		else printf("Apto");
	}else if(genero == 'M'){
		if(dias < 60) printf("Inapto");
		else printf("Apto");
	}
	printf("\nNome:%s\n Idade:%d\n Gênero:%s.\n", nome, idade, genero);
}
	
	return 0;
}
