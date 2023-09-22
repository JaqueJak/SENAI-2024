#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	FILE *arquivo, *arquivo2;
	char str[80];
	char *nome;
	int n1, n2, n3;
	float media;
	
	arquivo = fopen ("arquivo.txt", "r");
	if(arquivo== NULL)
		printf("Erro, não foi possivel abrir o arquivo\n");
	else{
		arquivo2 = fopen("resultado2.txt", "w");
		
		while((fgets(str, 80, arquivo)) != NULL){
			nome = strtok(str, " ");
			n1 = atoi(strtok(NULL, " "));
			n2 = atoi(strtok(NULL, " "));
			n3 = atoi(strtok(NULL, " "));
			media = (n1 + n2 + n3) / 3.0;
			printf("%s %d %d %d %.1f\n", nome, n1, n2, n3, media);
			if(media >= 5)
				fprintf(arquivo2, "%s %s\n", nome, "Aprovado");
			else
				fprintf(arquivo2, "%s %s\n", nome, "Reprovado");
		}
		fclose(arquivo2);	
	}
	
	fclose(arquivo);
	return 0;
}
