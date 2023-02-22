// Problem #1:  
 
// Please construct the two classes with the appropriate properties for the Node and DLL, then for the DLL, 
// please write the methods for:  
 
// - Shift() 
// - Unshift() 
// - Push() 
// - Pop() 
// - Get() 
// - Set() 
// - Insert() 
// - Remove() 
 
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let removedTail = this.tail;
        
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedTail.prev;
            this.tail.next = null;
            removedTail.prev = null;
        }
        this.length--;
        return removedTail;
    }
    shift() {
        if(!this.head) return undefined;
        let removedHead = this.head;
        
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedHead.next;
            this.head.prev = null;
            removedHead.next = null;
        }
        this.length--;
        return removedHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        // let currHead = this.head;
        // console.log('currHead: ', currHead);

        if(!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // this.head = newNode;
            // this.head.next = currHead;
            // currHead.prev = this.head;
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let currNode = this.head;
        if(index <= this.length /2) {
            // console.log('counter: ', counter);
            while(counter !== index) {
                // console.log('counter: ', counter);
                currNode = currNode.next;
                counter++;
            }
        } else {
             counter = this.length -1;
             currNode = this.tail;
            while(counter !== index) {
                // console.log('counter: ', counter);
                currNode = currNode.prev;
                counter--;
            }
        }
        // console.log('currNode: ', currNode);
        return currNode;
    }
    set(index, val){
        if (index < 0 || index > this.length) return false;
        let foundNode = this.get(index);

        if(foundNode !== null) {
            foundNode.val = val;
            // console.log('foundNode: ', foundNode);
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let afterNode = prevNode.next;

        prevNode.next = newNode;
        console.log('prevNode.next: ', prevNode.next);

        newNode.prev = prevNode;
        newNode.next = afterNode;
        console.log('newNode.next: ', newNode.next);

        afterNode.prev = newNode;
        console.log('foundNode.prev: ', afterNode.prev);

        this.length++;
        return true;
    }
    print() {                                       //created this to see the list easier. It turns the list into an array.
        let current = this.head;
        let array = [];

        while(current){
            array.push(current.val);
            current = current.next;
        }
        console.log('Array: ', array);
        return array;
    }
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length -1) return !!this.pop();

        let removedNode = this.get(index);

        removedNode.prev.next = removedNode.next;               //removedNode.prev.next gets the previous node, which is 5, and connects it to, using the .next, 15. 
        removedNode.next.prev = removedNode.prev;               //while removedNode.next.prev gets the node above the selected node so instead of 10 it is grabbing 15 and connecting back to 5.

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        console.log('removedNode: ', removedNode);
        return removedNode;
    }
    removeOccurences(val){
        if(!this.length) return undefined;
        
        let currentNode = this.head;
        let removeVal = currentNode;
        // let counter = this.length - 1;
            if(val) {
                removeVal = removeVal.next;
                console.log('removeVal: ', removeVal);

                removeVal.prev.next = removeVal.next;
                console.log('removeVal.prev.next: ', removeVal.prev.next);
                removeVal.next.prev = removeVal.prev;
                console.log('removeVal.next.prev: ', removeVal.next.prev);

                // removeVal.next = null;
                // console.log('removeVal.next: ', removeVal.next);
                // removeVal.prev = null;
                // console.log('removeVal.prev: ', removeVal.prev);

                removeVal = removeVal.next;
                console.log('removeVal: ', removeVal);
                // counter--;
            }
        this.length--;
        return removeVal;
    }
}

let list = new DoublyLinkedList();
list.push(2);
list.push(2);
list.push(10);
list.push(8);
list.push(4);
list.push(2);
list.push(5);
list.push(2);
// list.pop();
// list.pop();
// list.pop();
// list.shift();
// list.unshift(20);
// list.get(12);
// list.set(0, 1500);
// list.get(7);
// list.insert(1, 'hi mom');
// list.remove(1);
// list.print();
list.removeOccurences(2);
list.print();

// console.log('This is list: ', list);

// Problem 2: Given a doubly linked list and a value x. Create a method called removeOccurences(this, x) that 
// removes all occurrences of x from the doubly linked list. The removeOccurences method accepts a DLL as the 
// first argument and x as the value to remove.

