import {Node, traverse, head} from './FirstNode.js'

function end(head, data){
    let Node1 = new Node(data)

    if(head == null){
        head = Node1
        return head
    }

    let current = head
    while(current.next != null){
        current = current.next
    }
   current.next = Node1
   return head 
}

let p1 = end(head, 40);
traverse(p1);