#include <stdio.h>
#include <locale.h>
//Crie um programa que calcule a média de 3 notas do aluno e informe sua situação: (nota maior ou igual a 6 : aprovado),
 //(nota inferior a 6 e maior ou igual a 4 : recuperação), (nota menor que 4 : reprovado)
int main(){
	char nome[15];
	float media, nota, resil;
	setlocale(LC_ALL,"");
	do{
	printf("Digite seu nome: ");
	scanf("%s", &nome);
	printf("Digite sua primeira nota: ");
	scanf("%f", &nota);	
	printf("Digite sua segunda nota: ");
	scanf("%f", &nota);
	printf("Digite sua terceira nota: ");
	scanf("%f", &nota);
	}
	
	return 0;
}
