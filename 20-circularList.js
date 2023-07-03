/// LinkedList
// circular'da tail null'a işaret etmez.

function circular(list) {
  let slow = list.getFirst(); //list.head
  let fast = list.getFirst(); //list.head

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}
