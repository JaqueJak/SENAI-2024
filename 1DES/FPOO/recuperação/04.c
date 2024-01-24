#include <stdio.h>
#include <locale.h>

int inicio(){
	int x1=10, y1=10, x2=(20+10)* -1, y2 = 110 - 10 / y1;
	
	if(x1 < x2)
	printf("x1 a esqued");
	else if(x1 == x2)
	printf("pontp horizon");
	else 
	printf("x1 a direirt");
	
	if(y1 < y2)
	printf("y1 acima");
	else if(y1 == y2)
	printf("mesmo vertic");
	else
	printf("y1 Abaix");
}
int main(){
	setlocale(LC_ALL,"");
	inicio();
	return 0;
}
