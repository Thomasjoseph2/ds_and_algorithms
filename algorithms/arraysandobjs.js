const obj={
    name:"thomas",
    age:12,
    }

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for(let key in obj){
    console.log(key);
}

for (let key in obj ){
    console.log(obj[key]);
}