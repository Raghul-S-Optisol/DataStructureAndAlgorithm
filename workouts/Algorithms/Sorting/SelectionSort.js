arr1 = [9,14,3,2,43,11,58,22];  
selectionSort(arr1);
function selectionSort(arr){  
    for ( i = 0; i < arr.length - 1; i++)  
    {  
        index = i;  
        for (j = i + 1; j < arr.length; j++){  
            if (arr[j] < arr[index]){  
                index = j;//searching for lowest index  
            }  
        }  
        smallerNumber = arr[index];   
        arr[index] = arr[i];  
        arr[i] = smallerNumber;  
    }  
}  
console.log(arr1)