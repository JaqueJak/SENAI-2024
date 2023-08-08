#include <stdio.h>
main(){
	/*programa que avalia médias de 0 a 100 (Aprovado se maior ou igual a 50)*/
	int media;
	//Declaraçaão de variaveis
	printf("digite a média sinal do aulo de 0 a 100: ");
	scanf("%d", &media);
	//Processamento e saida com condicional
	if(media >= 50)
		printf("Aprovado");
	else
		printf("Reprovado");	
		//FIM
	return 0;
}
