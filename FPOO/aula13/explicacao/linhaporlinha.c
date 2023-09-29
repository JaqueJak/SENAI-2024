#include <stdio.h>
#include <conio.h>

void main()
{
  FILE *arquivo;
  char Linha[100];
  char *result;
  int i;
 
  arquivo = fopen("arquivo.txt", "rt");
  if (arquivo == NULL)  
  {
     printf("Problemas na abertura do arquivo\n");
     return;
  }
  i = 1;
  while (!feof(arquivo))
  {
      result = fgets(Linha, 100, arquivo); 
      if (result) 
	  printf("Linha %d : %s",i,Linha);
      i++;
  }
  fclose(arquivo);
}
