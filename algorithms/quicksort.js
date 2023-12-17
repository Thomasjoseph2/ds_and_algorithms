function quickSort(arr){

    if(arr.length <2 ) return arr
    const left=[]
    const right=[]
    const pivot=arr[Math.floor(arr.length/2)]

    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot) left.push(arr[i])
        else if(arr[i]>pivot)right.push(arr[i])
    }
   return [...quickSort(left),pivot,...quickSort(right)]
}



const array = [-6, 20, 1, 2, 30];

console.log(quickSort(array));