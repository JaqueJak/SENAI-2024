#include <stdio.h>
int main(){
	int a;
	do{
		printf("digite um numero: ");
		scanf("%d",&a);
		printf("o quadrado eh: %d\n ", a * a);
	}while(a != 4);
	return 0;
}
