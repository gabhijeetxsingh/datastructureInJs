require("../line");

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        // Traverse to the last node and change its next
        let node = new Node(data);   // data : G   { data: 'G', next : 'null'}

        if(this.head == null) {
            this.head = node;
            this.size++;
            return;
        }

        let current = this.head;

        while(current.next != null) {
            current = current.next;
        }

        current.next = node;

        this.size++;
    }

    insertAt (data, position) {
        // head -> A -> B -> D -> F -> null
        // After
        // head -> A -> B -> C -> D -> F -> null

      let node = new Node(data);

      let previous, current;

      let counter = 0;

      current = this.head;

      while(counter < position) {
          previous = this.head;
          counter++; 
          this.head = current.next; 
      }

      previous.next = node;
      node.next = this.head;

      this.size++;
    }

    removeFirst() {
        this.head = this.head.next;
        this.size--;    
    }

    clearList () {
        this.head = null;
        this.size = null;
    }


}


const ll = new LinkedList();

ll.insertFirst('A');
ll.insertFirst('B');  // head -> B -> A

ll.insertLast('G');   // head -> B -> A -> G -> null
//ll.insertAt('E', 2);
ll.insertFirst('D');
ll.removeFirst();

console.log(__line, ll.head, ll.size);