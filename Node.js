
// 链表查找
function find() {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

// 插入 节点
function insert() {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

// 显示链表元素
function display() {
  var currNode = this.head;
  while (!currNode.next == null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

// Node 类
function Node(element) {
  this.element.element;
  this.next = null;
}
// LinkedLise 类
function List() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
}