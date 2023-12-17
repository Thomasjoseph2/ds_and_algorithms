function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!==i){
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }
    return arr
}

const array = [-6, 20, 8, 2, 4];
console.log(selectionSort(array));