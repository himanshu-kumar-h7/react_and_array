import {Node, traverse, head} from './FirstNode.js'

function insertAtBeginning(data, head){
 let newNode = new Node(data)
 newNode.next = head
 head = newNode
 return head
}

let head2 = insertAtBeginning(5, head)
traverse(head2)