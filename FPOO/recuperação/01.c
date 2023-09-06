#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int a, b, soma;
	
	printf("Digite dois números inteiros: ");
	scanf("%d %d", &a, &b);
	
	soma = a + b;
	
	printf("A soma dos dois é: %d", soma);
	
	return 0;
}
