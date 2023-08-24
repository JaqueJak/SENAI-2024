#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	char nome[12];
	float venda[5];
	float comissao = 0.05, comissao2 = 0.06, totalv = 0, totalc = 0;
	int i;
	
	printf("digite o nome do vendedor: ");
	scanf("%s", &nome);
	
	for(i = 0; i < 4; i++);{
	printf("digite o montante da venda %d: ", i+1);
	scanf("%f", &venda[i]);
	totalv += venda[i];
	totalc += venda[i] * comissao;
	}
	printf("total de vendas\n");
	
	
	
	return 0;
}
