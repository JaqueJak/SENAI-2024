#include <stdio.h>>
int main(){
	int a, resto;//declaração de variaveis
	
	//entrada
	printf("digite um numero inteiro: ");
	scanf("%d", &a);
	
	//processamento
	resto = a % 2;
	
	//saida
	if(resto){
		printf("Impar");
	
	}else{
		printf("Par");
	}
	
	return 0;
}
