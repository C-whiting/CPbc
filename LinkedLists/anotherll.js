class Node {
    constructor(value, next = null) {
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
    //add to the list
    prepend(value) {
      this.size++;
      
      //create a new node
      const node = new Node(value, this.head)
      this.head = node;
  
      if(!this.tail) this.tail = node;
      return this;
  
    }
  
    append(value) {
      const node = new Node(value, null)
      if(this.size === 0){
        this.head = node;
        this.tail = node;
      }
      this.tail.next = node;
      this.tail = node;
  
      this.size++;
      return this;
  
    }
  
    removeNode(list, value) {
      // let node = list,
      //     last;
  
      // if (node && node.value === value) {
      //     return node.next;
      // }
  
      // while (node && node.value !== value) {
      //     last = node,
      //     node = node.next;
      // }
      // if (last && node.value === value) {
      //     last.next = node.next;
      // }
      // return list;
  }
  
  search( head , x)
  {
      var current = head; // Initialize current
      while (current != null) {
          if (current.data == x)
              return true; // data found
          current = current.next;
      }
      return false; // data not found
  }
  
  
    print() {
      console.log("HEAD:", this.head);
      console.log("TAIL:", this.tail);
      console.log("SIZE:", this.size);
      console.log(JSON.stringify(this, null, 2));
    }
  
  
  }
  
  
  const list = new LinkedList();
  list.prepend(5).prepend(4).prepend(2)
  list.append(1).append(2).append("c")
  console.log(list)
  console.log(list.search());
  
  //list.print();
  