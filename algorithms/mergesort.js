// function mergeSort(arr) {
//     if(arr.length <2 )return arr
//     const mid=Math.floor(arr.length/2)
//     const leftArr=arr.slice(0,mid)
//     const rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
    
// }

// function merge(leftArr,rightArr){
//     const sorted=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sorted.push(leftArr.shift())
//         }else{
//             sorted.push(rightArr.shift())
//         }
//     }
//     return [...sorted,...leftArr,...rightArr]
// }

const arr=[8,20,-2,3,4,8,1]
// console.log(mergeSort(arr));


function mergeSort(array){
    if(array.length <2) return array
    let mid=Math.floor(array.length/2)
    const leftArr=array.slice(0,mid)
    const rightArr=array.slice(mid)

    return merge
    
    (mergeSort(leftArr),mergeSort(rightArr))

}

function merge(leftArr,rightArr){
  const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr,...leftArr,...rightArr]
}

console.log(mergeSort(arr));