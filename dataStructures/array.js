const array=[1,4,5,2,9,0,4,3,6]

const newarr=array.slice(0,4)
// console.log(newarr,'new');
// console.log(array.slice(),"new2");
// console.log(array);
array.map((elm)=>{
// console.log(elm);
})
// console.log('----------------');
array.forEach(element => {
    // console.log(element);
});

const filt=array.filter((elem)=>{
   return elem /2 ===2
})
// console.log('------------------------');

let res=filt.reduce((acc,curr)=>{
   return acc=acc+curr
},0)

// console.log(res);

const arr = [1, 2, 3, 4, 5];
const result=arr.splice(1,2)
console.log(result);
console.log(arr);
const arr2=arr.reverse()
console.log(arr2
    );