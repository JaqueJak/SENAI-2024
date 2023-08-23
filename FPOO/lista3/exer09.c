#include <stdio.h>
#include <locale.h>
int main(){
	setlocale(LC_ALL,"");
	int num, i;
	unsigned long long vezes = 1;
	
	printf("Digite um número inteiro positivo: ");
	scanf("%d\n", &num);
	
	if(num < 0){
		printf("Conta não programada para números negativos!\n");
	}else {
		for (i = 0; i <= num; i++){
			vezes *= i;
		}
		printf("A soma é %d é %llu\n", num, vezes);
	}
	
	return 0;
}
