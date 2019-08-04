// 获取数量 
/* 因为数组 key 为字符串时 长度失效 */
function count() {
  var n = 0;
  for (var key in Object.keys(this.datastore)) {
    n++;
  }
  return n;
}

// 清空
function clear() {
  for (var key in Object.keys(this.datastore)) {
    delete this.datastore[key];
  }
}

// 添加
function add(key, value) {
  this.datastore[key] = value;
}

// 寻找
function find(key) {
  return this.datastore[key]

}

// 移除
function remove(key) {
  delete this.datastore[key]
}

// 展示全部
function showAll() {
  Object.keys(this.datastore).forEach((key) => {
    console.log(key, this.datastore[key]);
  })
}

// 字典构造
function Dictionary() {
  this.datastore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

var pBook = new Dictionary();
pBook.add('Mike', '18');
pBook.add('Kevin', '20');
pBook.add('Sani', '17');
pBook.showAll();
var count = pBook.count();