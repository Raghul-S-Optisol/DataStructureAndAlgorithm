arr=[1,2,3,4,5,6]
value=5
len=arr.length
for(i=0;i<len;i++){
    if(arr[i]==value){
        console.log("%d present at index",value,i+1)
        break;
    }
}
if(i+1==len){
     console.log("value not available")
}