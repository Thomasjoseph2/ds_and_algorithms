const e = require("express")

class Queue{
    constructor() {
        this.queue=[]
    }
    enqueue(element){
       return this.queue.push(element);
    }
    deQueue(){
        return this.queue.shift();
    }
    isEmpty(){
      return this.queue.length===0;
    }
    peek(){
        if(!this.isEmpty) return null
        else return this.queue[0]
    }

    print(){
        console.log(this.queue.join());
    }
    size(){
        return this.queue.length
    }
}

const obj=new Queue()
obj.enqueue(10)
obj.enqueue(20)
obj.enqueue(30)
obj.enqueue(40)
obj.deQueue()
console.log(obj.size());
obj.print()
