#include <stdio.h>

int main(){

	FILE *entrada, *saida;
	char str[80];
	int n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, soma;
	
	entrada = fopen ("dados2.txt", "r");
	if(entrada == NULL)
		printf("Error 404\n");
	else{
		while((fgets(str, 80, entrada)) != NULL){
			soma = strtok(str, " ");
			
			n0 = atoi(strtok(NULL," "));
			n1 = n0 - 1;
			n2 = n1 + 1;
			n3 = n2 + 1;
			n4 = n3 + 1;
			n5 = n4 + 1;
			n6 = n5 + 1;
			n7 = n6 + 1;
			n8 = n7 + 1;
			n9 = n8 + 1;
			n10 = n9 + 1;
		}
		soma = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10);
		printf("%d %d %d %d %d %d %d %d %d %d = %d", n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, soma);
	}
	fclose(entrada);
	return 0;
}
