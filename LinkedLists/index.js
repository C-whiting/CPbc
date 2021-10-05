class Node {
    constructor (value, next) {
      this.value = value;
      this.next = next;
    }
  
  }
  
  class LinkedList {
    constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
    }
    prepend(value){
      this.size++;
      const node = new Node(value, this.head)
      this.head = node;
  
      if(!this.tail) this.tail = node;
      return this;
  
    }
    append(value){
      const node = new Node(value, null)
      
      if(this.size === 0)//if(!this.head)
      {
        this.head = node;
        this.tail = node;
      }
      this.tail.next = node;
      this.tail = node;
      
      this.size++;
  
      return this;
    }
    reverse(head) {
      let node = head,
          previous,
          tmp;
    
      while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;
    
        // reverse pointer
        node.next = previous;
    
        // step forward in the list
        previous = node;
        node = tmp;
      }
    
      return previous;
    }
  
  }
  
   const list = new LinkedList();
   list.prepend(1).prepend(2).prepend(4)
  // list.append(1).append(2).append("c")
  // console.log(JSON.stringify(list, null, 2))
  // console.log(list)
  list.reverse();
  console.log(list)