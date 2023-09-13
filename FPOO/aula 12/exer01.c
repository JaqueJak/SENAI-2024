#include <stdio.h>
#include <locale.h>

int mediaN(float notas[], int n){
	float total = 0;
	int i;
	for(i = 0; i < n; i++)
		total += notas[i];
	
	return total / n;
}

int main (){
	setlocale(LC_ALL,"");
	
	float notas[]= {10, 10, 10, 10, 10, 10, 5, 5, 5, 5, 5, 5};
	int bytes = sizeof(notas);
	int elementos = bytes / sizeof(notas[0]);
	
	printf("tamanho do vetor em bytes = %d\n", bytes);
	printf("Quantidadede de elementos do vetor = %d\n", elementos);
	printf("%.1f", mediaN(notas, elementos));
	
	return 0;
}
