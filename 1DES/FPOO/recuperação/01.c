#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int a, b, soma;
	
	printf("Digite dois n�meros inteiros: ");
	scanf("%d %d", &a, &b);
	
	soma = a + b;
	
	printf("A soma dos dois �: %d", soma);
	
	return 0;
}
