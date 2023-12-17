class Queue{
    constructor() {
        this.items={}
        this.rear=0;
        this.front=0;        
    }

    enqueue(elem){
       this.items[this.rear]=elem;
       this.rear++;
    }

    dequeue(){
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    print(){
        const values=Object.values(this.items)
        console.log(values.join());
    }

    size(){  
        return this.rear-this.front
    }
}

const obj=new Queue()

obj.enqueue(2)
obj.enqueue(5)
obj.enqueue(10)
console.log(obj.size());
obj.dequeue()
console.log(obj);
obj.print()

console.log(obj.size());