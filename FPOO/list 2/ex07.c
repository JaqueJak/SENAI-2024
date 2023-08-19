#include <stdio.h>

int main() {
    int numeros[5];
    
    printf("Digite 5 numeros inteiros:\n");
    
    for (int i = 0; i < 5; i++) {
        scanf("%d", &numeros[i]);
    }
    
    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4 - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                // Troca os números
                int temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }
    
    printf("Numeros em ordem crescente:\n");
    for (int i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
    }
    
    return 0;
}

