/// linkedList

function midpoint(list) {
  let slow = list.getFirst(); //list.head
  let fast = list.getFirst(); //list.head

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
