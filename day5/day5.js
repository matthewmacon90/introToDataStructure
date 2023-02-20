// Problem #1:  
 
// Please construct the two classes with the appropriate properties for the Node and SLL, then for the SLL, 
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
    } 
} 
 
class SinglyLinkedList{ 
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;                    //This code sets the head and tail to the newNode if there is NO current head & tail.
            this.tail = this.head;
            // console.log('this.tail: ', this.tail);
        } else {
            this.tail.next = newNode;               //This creates the bridge between the head, newNode and the tail. Need more info here...I thought this.tail.next would be null b/c it comes after tail.
            this.tail = newNode;                    //This sets the tail to the newNode.
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.length) return undefined;
        
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        //if there are no nodes return undefined
        //create a temp var to hold old head.
        //decrement because list getting smaller. 
        //return head that was removed.
        if(!this.length) return undefined;

        let oldHead = this.head;
        // console.log('oldHead: ', oldHead);
        // let newHead = oldHead.next
        // console.log('newHead: ', newHead);
        
        this.head = oldHead.next;                           //Taking this.head and assigning it to oldHead.next to become there.
        // console.log('oldHead.next: ', oldHead.next);
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return this;
    }
    unshift(val) {
        let newNode = new Node(val);
        // let shiftHead = this.head;
        // console.log('shiftHead.next: ', shiftHead);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            // this.head = newNode;                 //My first way works as well.
            // this.head.next = shiftHead;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let foundNode = this.head;

        while (counter !== index) {
            foundNode = foundNode.next;
            // console.log('Loop foundNode: ', foundNode);
            counter++;
            // console.log('counter: ', counter);
        }
        // foundNode = foundNode.next;
        // console.log('foundNode: ', foundNode);
        return foundNode;
    }
    set(index, val) {
        //No need to create a newNode variable because you are just changing a value and not creating a new one.
        if (index < 0 || index > this.length) return null;
        let findNode = this.get(index);
        if(findNode) {
            findNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        // console.log('prevNode: ', prevNode);
        let temp = prevNode.next;

        prevNode.next = newNode;
        newNode.next = temp;

        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.pop();
        if(index === 0) return !!this.shift();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;

        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
} 

let list = new SinglyLinkedList();
list.push('hello');
list.push('there');
list.push('!');
// list.push('Now pushing numbers');
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
// list.unshift(5);
// list.unshift(10);
// list.get(2);
// list.set(1, 100);
// list.insert(1, 200);
list.remove(1);
console.log('This is List: ', list);

 
// Problem #2:  
// Given a linked list, create a method called mostFrequent(this) that returns the node that occurs 
// the most in the list. 
     
// For example, given the following linked list:  
 
// 1 -> 1 -> 2 -> 2 -> 2 -> 3 -> null 
 
// This function should return the node of 2.  
// The function should take in a argument of a linked list and  
// return a value of the node that occurs the most often.  
 
// ** this – referrers to the linked list passed into the method 
 
// mostFrequent(this) { 
 
// } 
// BONUS PROBLEM: Please solve this pattern using time complexity of O(n) and using the appropriate pattern 
 
// You are given an integer array height of length n. There are n vertical lines drawn such 
// that the two endpoints of the ith line are (i, 0) and (i, height[i]). 
 
// Find two lines that together with the x-axis form a container, such that the container 
// contains the most water. 
 
// Return the maximum amount of water a container can store. 
 
// Notice that you may not slant the container. 
 
// Example 1: (SEE PICTURE BELOW!) 
 
// Input: height = [1,8,6,2,5,4,8,3,7] 
// Output: 49 
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In 
// this case, the max area of water (blue section) the container can contain is 49. 
 
// Example 2: 
 
// Input: height = [1,1] 
// Output: 1 
 
/** 
 * @param {number[]} height 
 * @return {number} 
 */ 
var maxArea = function(height) { 
     
}; 