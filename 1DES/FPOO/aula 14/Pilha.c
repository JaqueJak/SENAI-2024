#include <stdio.h>
#define SIZE 6

int pilha[SIZE];
int i;
int ponteiro = 0;
void mostrarPilha(){
	printf("Pilha:\n");
	for(i =  0; i < ponteiro; i++)
		printf("%d\n", pilha[i]);
}

int push(int dado){
	pilha[ponteiro] = dado;
	ponteiro++;
	if(ponteiro < SIZE){
		return 1;
	}
	else return 0;
}

int pop(){
	if(ponteiro >= 0){
		ponteiro--;
		return 1;
	}else
		return 0;
}

int main(){
	push(25);
	push(32);
	push(10);
	pop();
	push(4);
	push(148);
	mostrarPilha();
}
