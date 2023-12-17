const obj={
    name:"thomas",
    age:25,
    place:"ktym",
    dob:'09/08/1000'
}

for(let key in obj){
    console.log(obj[key]);
}
console.log(Object.keys(obj));
const set=new Set([8,5,0,5,3,2,88,0])
set.add(100)
console.log(set);


const map=new Map([['a',1],['b',2]])
for(const [key,value] of map){
    console.log(`${key}:${value}`);
}