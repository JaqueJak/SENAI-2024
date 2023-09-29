#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	char nome[15];
	int i, nota1, nota2, media, status;
	
	for(i = 0; i < 5; i++){
	printf("Digite o nome do aluno: ");
	scanf("%s", &nome);
	
	printf("Digite as duas notas do %s de 0 a 10: ", nome);
	scanf("%d %d", &nota1, &nota2);
	
	media = (nota1 + nota2) / 2;
	
	if(media >= 5)
		printf("Nome:\t%s\nMédia:\t%d\nStatus\tAprovado!\n", nome, media);
	else
		printf("Nome:\t%s\nMédia:\t%d\nStatus:\tReprovado!\n", nome, media);
	}
	
	return 0;
}
