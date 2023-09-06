#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int a, b, c, media;
	
	printf("Digite três números inteiros: ");
	scanf("%d %d %d", &a, &b, &c);
	
	media = (a + b + c) / 3;
	
	printf("A média dos três números é: %d", media);
	
	return 0;
}
