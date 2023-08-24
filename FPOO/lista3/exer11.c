#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	
int main(){
	int num1, num2, num3, num4, num5;
	
    printf("Digite o primeiro numero inteiro: ");
    scanf("%d", &num1);
         
    printf("Digite o segundo numero inteiro: ");
    scanf("%d",&num2);
         
	printf("Digite o terceiro numero inteiro: ");
    scanf ("%d", &num3);
    
    printf("Digite o terceiro numero inteiro: ");
    scanf ("%d", &num4);
    
    printf("Digite o terceiro numero inteiro: ");
    scanf ("%d", &num5);
         
	if ((num1 < num2 < num3 < num4 < num5) && (!(num1 > num2 > num3 > num4 > num5) && (num1 < num2 > num3 < num4 > num5)))
	
		printf("segue lista de numeros em órdem crescente: %d %d %d %d %d\n", num1, num2, num3, num4, num5); 
}

	return 0;
}
