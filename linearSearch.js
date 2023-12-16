function linearSearch(num,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            return i;
        }
    }
    return -1
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(7,array));
