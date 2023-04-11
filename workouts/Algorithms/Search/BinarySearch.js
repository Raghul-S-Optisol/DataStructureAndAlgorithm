arr=[1,2,3,4,5,6];
arr.sort(function(a,b){return a-b});
console.log(arr)
val=5
last=arr.length-1;  
binarySearch(arr,0,last,val); 
function binarySearch(arr, first,last,val){
     mid = Math.floor((first + last)/2);   
       if ( arr[mid] == val ){  
         console.log("Element is found at index: ", mid+1);  
           
       }
       else if ( arr[mid] < val ){  
        first =mid+1;   
        binarySearch(arr,first,last,val);  
      }
      else if(arr[mid] > val ){  
          last = mid - 1;  
          binarySearch(arr,first,last,val);
       }  
    else{  
      console.log("Element is not found!");  
    }  
}