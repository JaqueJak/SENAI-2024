#include <stdio.h>
int main(){
	int velocidade;
	int distancia;
	int hora;  
    printf("digite a velocidade do carro em km/h",velocidade);
    scanf("%d ,&velocidade");
    printf("digite a distancia em km",distancia);
    scanf("%d ,&distancia");
    hora = velocidade / distancia;
    prinf("sera %d h para percorrer o caminho",hora);
	return 0;
}
