// function insertionSort(arr){

//     for(let i=1;i<arr.length;i++){
     
//         let temp=arr[i];
//         let j=i-1

//         while(j>=0 && arr[j]>temp){
//             arr[j+1]=arr[j]
//             j--;
//         }

//         arr[j+1]=temp;

      
//     }
//     return arr
// }

// const array = [-6, 20, 8, 2, 4];
// console.log(insertionSort(array));


function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1;
        while(j>=0 && arr[j]>temp ){
            arr[j+1]=arr[j];
            j--;
        }

        arr[j+1]=temp;

    }

    return arr;
}

const array = [-6, 20, 8, 2, 4];
console.log(insertionSort(array));