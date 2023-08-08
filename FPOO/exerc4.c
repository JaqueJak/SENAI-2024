#include <stdio.h>
int main(){
	float a, b, c;
	
		printf("digite o tamanho de um lado: ", a);
	scanf("%f", &a);
		printf("digite o tamanho de um lado: ", b);
	scanf("%f", &b);
		printf("digite o tamanho de um lado: ", b);
	scanf("%f", &b);
	
	if( a != b != c )
		printf("escaleno");
			
		else{
		 ( a == b == c );
		printf("equilatero");
			
		else 
		printf("isosceles");
	}
	
	return 0;
}
