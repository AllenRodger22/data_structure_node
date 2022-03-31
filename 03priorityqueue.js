import Queue from "./02queue";

class PriorityQueue extends Queue {
    constructor(){
        super();
        this.prioriries = new Map();
        this.compare = new Comparator(this.comparePrority.bind(this));
    }

    add(item, priority = 0){
        this.priorities.set(item, priority);
        super.add(item);
        return this;
    }

    remove(item, customFindingComparator){
        super.remove(item, customFindingComparator);
        this.priorities.delete(item);
        return this;
    }
    changePriority(item, newPriority){
        this.remove(item, new Comparator(this.compareValue));
        this.add(item, newPriority);
        return this;
    }
}