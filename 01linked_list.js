
export default class LinkedList{
    constructor(head,tail){
        this.head = head;
        this.tail = tail;
    }
    //  get head
    getHead(){
        return this.head;
    }
    //  set a new node as a head
    prepend(value){
        const newNode = new LinkedList(value,this.head);
        this.head = newNode;
    }
    //  append on tail
    append(value){
        const newNode = new LinkedList(value,null);
        this.tail = newNode;
    }
    insert(value,index){
        if(index === 0){
            this.prepend(value);
            return;
        }
        let current = this.head;
        let previous = null;
        let i = 0;
        while(current){
            if(i === index){
                previous.next = new LinkedList(value,current);
                return;
            }
            i++;
            previous = current;
            current = current.next;
        }
        this.append(value);
    }
    //  pop tail
    popTail(){
        if(!this.tail){
            return null;
        }
        const currentTail = this.tail;
        this.tail = this.tail.next;
        return currentTail.value;
    }
    //  pop head
    popHead(){
        if(!this.head){
            return null;
        }
        const currentHead = this.head;
        this.head = this.head.next;
        return currentHead.value;
    }
}

let list = new LinkedList(0,null);

for(let i = 1; i < 10; i++){
    list.append(i);
}

console.log(list.viewList());




