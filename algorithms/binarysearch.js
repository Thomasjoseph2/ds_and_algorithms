function binarySearch(array,num){
    let left=0;
    let right=array.length-1

    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(array[mid]===num){
            return mid
        }else if(array[mid]<num){
            left=mid+1
        }else{
            right=mid-1
        }
    }

    return -1
}

console.log(binarySearch([-5,1,2,3,4,5,6,7,8,9],-5));



function recursiveBinary(array,num){

    return search(array,num,0,array.length-1)

}

function search(array,num,left,right){

    if(left>right){
        return -1
    }

    let middle=Math.floor((left+right)/2)

    if(array[middle]===num){
        return middle
    }else if(array[middle]<num){
       return search(array,num,middle+1,right)
    }else{
      return search(array,num,left,middle-1)
    }  

}

console.log(recursiveBinary([-5,1,2,3,4,5,6,7,8,9],-5));
