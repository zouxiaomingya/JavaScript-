function fakeNew() {

  var obj = {};
  // 获取第一个参数，并且会删除第一个参数
  var Constructor = [].shift.call(arguments);

  // obj 继承构造函数上的方法
  obj.__proto__ = Constructor.prototype;

  // Constructor 方法中的 this 指向 obj, 执行 Constructor 方法，相当于给 obj 继承了Constructor 中的属性，方法。 （可以理解就是通过 apply 实现继承）
  var result = Constructor.apply(obj, arguments);

  if (typeof result === 'object') {
    // result || obj 防止返回的是 null（因为 typeof null == 'object'）;
    return result || obj;
  } else {
    return obj;
  }
};
