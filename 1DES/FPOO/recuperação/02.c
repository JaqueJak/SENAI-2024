#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	int a, b, c, media;
	
	printf("Digite tr�s n�meros inteiros: ");
	scanf("%d %d %d", &a, &b, &c);
	
	media = (a + b + c) / 3;
	
	printf("A m�dia dos tr�s n�meros �: %d", media);
	
	return 0;
}
