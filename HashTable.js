function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put
}
function put(data) {
  var pos = this.simpleHash(data);
  this.table[pos] = data;ßß
}

function simpleHash(data) {
  var total = 0;
  for (var i = 0; i < data.length; i++) {
    console.log(data.charCodeAt(i));
    // 必需。表示字符串中某个位置的数字，即字符在字符串中的下标。
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

function showDistro() {
  var n = 0;
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(this.table[i], '/n')
    }
  }
}