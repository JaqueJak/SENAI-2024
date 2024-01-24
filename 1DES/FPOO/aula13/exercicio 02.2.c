#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *entrada, *saida;
	char str[80];
	int n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;
	float media;
	
	entrada = fopen ("dados.txt", "r");
	if(entrada == NULL)
		printf("Error 404\n");
	else{
		saida = fopen("resultado2.txt", "w");
		while((fgets(str, 80, entrada)) != NULL){
			media = strtok(str, " ");
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
			media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;
			fprintf(saida, "A média de %d %d %d %d %d %d %d %d %d %d é %1.f", n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, media);
		}
		fclose(saida);
	}
	fclose(entrada);
	return 0;
}
