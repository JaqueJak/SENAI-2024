#include <stdio.h>
main(){
	/*programa que avalia m�dias de 0 a 100 (Aprovado se maior ou igual a 50)*/
	int media;
	//Declara�a�o de variaveis
	printf("digite a m�dia sinal do aulo de 0 a 100: ");
	scanf("%d", &media);
	//Processamento e saida com condicional
	if(media >= 50)
		printf("Aprovado");
	else
		printf("Reprovado");	
		//FIM
	return 0;
}
