#include <stdio.h>
int main(){
	int x;
	int y;
	int z;
	int a;
	printf("digite uma varialvel x:",x);
	scantf("%d, &x");
	printf("digite uma variavel y:",y);
	scanf("%d, &y");
	printf("digite uma variavel z:",z);
	scanf("%d, &z");
	a = (x + y) / z;
	printf("(x + y) / z",a);
	return 0;
}
