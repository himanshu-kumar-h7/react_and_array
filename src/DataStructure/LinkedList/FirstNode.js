class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

const First = new Node(5)
const Second = new Node(6)
const Third = new Node(7)

First.next = Second
Second.next = Third

let head = First

//traverse though LinkedList

function traverse(head){
    let current = head
    while(current != null){
        console.log(current.data)
        current = current.next
    }

}

// traverse(head)

export {Node, traverse, head}