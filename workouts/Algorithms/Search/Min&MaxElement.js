arr=[1,2,3,4,5,6,100,11];
min=arr[0];
for(i=0;i<arr.length;i++){
    if(min>=arr[i]){
        min=arr[i]
    }
}
console.log("mininum value in array is",min)

max=arr[0];
for(i=0;i<arr.length;i++){
    if(max<=arr[i]){
        max=arr[i]
    }
}
console.log("maximum value in array is",max)

