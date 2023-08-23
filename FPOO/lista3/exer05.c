#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int numero, i;
	
	printf("Digite um numero inteiro positivo: ");
	scanf("%d", &numero);
	
	if (numero < 0 ){
		printf("Este numero não é positivo!\n");
		return 0;
	}
	printf("Valores entre 0 e %d:\n ", numero);
	for (i = 0; i <= numero; i += 2){
		printf("%d\n", i);
	}
	
	return 0;
}
