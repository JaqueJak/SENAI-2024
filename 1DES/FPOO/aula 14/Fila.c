#include <stdio.h>
#include <stdlib.h>
struct lista{
	int dado;
	struct lista *prox;
};
struct lista *inicio = NULL;
struct lista *fim = NULL;
struct lista *aux = NULL;
void mostarLista(){
	aux = inicio;
	printf("Lista\n");
	while(aux != NULL){
		printf("%d\n", aux->dado);
		aux = aux->prox;
	}
}

int push(int dado){
	aux = (struct lista*) malloc(sizeof(struct lista));
	if(aux == NULL) return 0;
	aux->dado = dado;
	aux->prox = NULL;
	if(inicio == NULL){
		inicio = aux;
		fim = aux;
	}else{
		fim->prox = aux;
		fim = aux;
	}
	return 1;
}

int pop(){
	if(inicio != NULL){
		aux = inicio->prox;
		free(aux);
		return 0;
	}else
		return 1;
}

int slice(int index){
	int i;
	aux = inicio;
	if(index == 0){
	free(aux);
	return 1;
	}else{
	for(i = 0; i < index-1; i++){
		aux = aux->prox;
	}
		struct lista *aux2 = aux->prox;
		aux->prox = aux2->prox;
		free(aux2);
		return 1;
	}
	return 0;
}

int main (){
	push(25);
    mostrarLista();
    push(18);
    mostrarLista();
    push(10);
    mostrarLista();
    pop();
    mostrarLista();
    pop();
    mostrarLista();
    push(45);
    push(18);
    push(25);
    mostrarLista();
    slice(2);
    mostrarLista();
}
