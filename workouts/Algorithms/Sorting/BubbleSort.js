arr= [5,1,0,4,2,8,16];
bubbleSort(arr);
function bubbleSort(arr)
{
    n=arr.length;
    for(i=0;i<n-1;i++)
        for(j=i-1;j<n-1;j++)
            if(arr[j]> arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j + 1];
                arr[j+1]=temp;
            }
}
console.log(arr)