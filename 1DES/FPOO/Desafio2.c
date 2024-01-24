#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	char Nome[30];
	float Peso, Altura, imc, sair;
	
	do{
	printf("Digite seu nome completo: ");
	scanf("%s", &Nome);
	printf("Digite seu peso: ");
	scanf("%f", &Peso);
	printf("Digite sua altura: ");
	scanf("%f", &Altura);
	
	imc = Peso / (Altura * Altura);
	printf("O IMC deste cliente e: %.2f e esta ", imc);

	if(imc <= 18,5 ){
	printf("abaixo do peso");
	}
	if(imc >= 18.6, && imc <= 24.9){
	printf("peso normal");
	}
	if(imc >= 25,0 && imc <= 29,9 ){
	printf("sobrepeso");
	}
	if(imc >= 30){
	printf("obesidade");
	}
	printf("\n Digite 1 para continuar ou digite 0 para sair: ");
	scanf("%d", &sair);
}while(sair);
	return 0;
}
