#include <stdio.h>

//fun��o que retorna a soma de dois parametros inteiros
int soma(int a, int b){
	return a + b;
}

//fun��o que retorna a m�dia de dois
int media(int a, int b){
	return (a + b) / 2;
}

//exemplo de um procediento que escreve umafrase 100 vezes
int procedimentoBart(){
	int i;
	for(i = 0; i < 100; i++)
		printf("n�o vou atormentar a lisa hoje\n");
}

//procedimento que escreve uma frase qualquer N vezes
int frases(char frase[], int n){
	int i;
	for(i = 0; i < n; i++)
		printf("%s\n", frase);
}

int main (){
	frases("Palmeiras n�o tem mundial", 5000);
	return 0;
}
