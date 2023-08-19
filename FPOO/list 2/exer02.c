#include <stdio.h>

int main(void){
	int salario, salario2, salario3, filhos;
	
	printf("Insira seu salario: R$");
	scanf("%d", &salario);
	
	
	if(salario < 2000){
		printf("A quantidade de filhos que voce tem: ");
		scanf("%d", &filhos);
		
		salario2 = filhos * 45;
		salario = salario + salario2;
		
		
		printf("Seu novo salario e de R$%d", salario);
		return 0;
	}else {
		printf("Seu salario nao foi alterado.");
		return 0;
	}
	
	return 0;
}
