#include <stdio.h>

// Fungsi untuk mengurutkan array (pakai bubble sort biar simpel)
void sort(int nums[],int size){
    for(int i =0; i< size - 1;i++){
        for(int j = 0; j< size - i - 1;j++){
            if(nums[j]>nums[j+1]){
                int temp = nums[j];
                nums[j] =nums[j+1];
                nums[j+1]=temp;
            }
        }
    }



}

// Fungsi remove duplicates
int removeDuplicates(int nums[], int size) {
    if (size == 0) return 0;

    sort(nums, size); // Urutkan dulu

    int indexUnik = 1;
    for (int i = 1; i < size; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[indexUnik++] = nums[i];
        }
    }

    return indexUnik; // Panjang array unik
}

int main() {
    int nums[] = {1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 1, 1, 5, 1, 3};
    int size = sizeof(nums) / sizeof(nums[0]);

    int newLength = removeDuplicates(nums, size);

    printf("Unique Length: %d\n", newLength);
    printf("Unique Slice: ");
    for (int i = 0; i < newLength; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");

    return 0;
}
