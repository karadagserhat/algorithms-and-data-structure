/// Linked List

function fromLast(list, n) {
  let slow = list.getFirst(); //list.head
  let fast = list.getFirst(); //list.head
//   let fast = list.getAt(n);  // ilk while'a gerek kalmaz.

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
