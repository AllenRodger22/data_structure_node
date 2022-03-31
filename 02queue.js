import LinkedList from "./01linked_list";

export default class Queue {
    constructor(){
        this.linkedList = new LinkedList();
    }

    isEmpty(){
        return !this.linkedList.head;
    }

    enqueue(value){
        this.linkedList.append(value);
    }

    dequeue(){
        return this.linkedList.popHead();
    }

}