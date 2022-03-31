// Binary tree,  depth = 2

function setup(){
    var tree = new Tree();
    var a = new Node(5);
    var b = new Node(7);
    var c = new Node(1);
    var d = new Node(2);
    var e = new Node(2);
    var f = new Node(4);
    var n = new Node(12); 

    n.addNode(a);
    n.addNode(b);
    a.addNode(c);
    a.addNode(d);
    b.addNode(e);
    b.addNode(f);

    tree.setRoot(n);
    tree.viewTree();
}

class Tree{
    constructor(){
    this.root = null;
    }
    setRoot(node){
    if(this.root === null){
        this.root = node;
    } else {
        console.log("Root already set");
    }
}
    viewTree(){
        if(this.root === null){
            console.log("Tree is empty");
        } else {
            console.log(this.root);
    }
    
    }
}



class Node{
    constructor(val){
    this.left = null;
    this.right = null;
    this.value = val;
}
    addNode(node){
    if (node.value < this.value){
        if(this.left == null){
        this.left = node;
    }else if(this.right == null){
        this.right = node;
    } else {
        console.log("Node already exists")
    }
}
}
}

//run setup
setup();