class Stack{

    constructor() {
        this.items=[]
    }

    push(element){
        this.items.push(element)
        return element
    }

   pop(){
    return this.items.pop()
   }

   print(){
    console.log(this.items.join());
   }

}

const obj1=new Stack()

obj1.push(30000)
obj1.push(40000)
obj1.push(50000)
obj1.push(60000)
obj1.push(70000)


obj1.print()

