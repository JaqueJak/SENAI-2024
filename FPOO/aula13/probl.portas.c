#include <stdio.h>
#include <locale.h>

int total, i, j;
	
void mostrarportas(int *portas){
	for(i = 0; i < total; i++){
		if(portas[i]){
			printf("porta %d aberta\n", i + 1);
		}else{
			printf("porta %d fechada\n", i + 1);
		}
	}
}

int main(){
	setlocale(LC_ALL, " ");
	
	printf("Digite quantas portas e descendentes: ");
	scanf("%d", &total);
	
	int portas[total];
	for(i = 0; i < total; i++){
		portas[i] = 0;
	}
	
	for(i = 2; i <= total; i++){
		for(j = i; j < total; j+= i){
			if(portas[j - 1]){
				portas[j - 1] = 0;
			}else{
				portas[j - 1] = 1;
			}
		}
	}
	
	mostrarportas(portas);
	return 0;
}

