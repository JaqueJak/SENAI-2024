#include <stdio.h>

int main(){

	FILE *entrada, *saida;
	char str[80];
	int n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, soma;
	
	entrada = fopen ("dados.txt", "r");
	if(entrada == NULL)
		printf("Error 404\n");
	else{
		while((fgets(str, 80, entrada)) != NULL){
			soma = strtok(str, " ");
			n1 = atoi(strtok(NULL," "));
			n2 = atoi(strtok(NULL," "));
			n3 = atoi(strtok(NULL," "));
			n4 = atoi(strtok(NULL," "));
			n5 = atoi(strtok(NULL," "));
			n6 = atoi(strtok(NULL," "));
			n7 = atoi(strtok(NULL," "));
			n8 = atoi(strtok(NULL," "));
			n9 = atoi(strtok(NULL," "));
			n10 = atoi(strtok(NULL," "));
		}
		soma = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10);
		printf("%d %d %d %d %d %d %d %d %d %d = %d", n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, soma);
	}
	fclose(entrada);
	return 0;
}
