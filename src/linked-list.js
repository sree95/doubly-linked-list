const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;   
    }

    append(data) {
        
        var myNode = new Node(data,null,null); 

        if(this.length === 0){
            this._head = myNode;                        
            this._tail = myNode;
        }else{
            // this._tail.next = myNode;
            // this.prev = this._tail;
            // this._tail = myNode;

            this._tail = this._tail.next = {
            value: data,
            next: this,
            prev: this.prev
    }


        this.length++;
        return this;
    }
}

    head() {
        if (this.length > 0) {
            return this._head;
        }
    }

    tail() {
        if (this.length > 0) {
            return this._tail;
        }
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
