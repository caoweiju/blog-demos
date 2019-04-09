# polyfill

## common
* `Object.defineProperty`
    `Object.defineProperty() `方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。  
    `Object.defineProperty(obj, prop, descriptor)`参数如下：  
    `obj`: 要在其上定义属性的对象。  
    `prop`: 要定义或修改的属性的名称。  
    `descriptor`: 将被定义或修改的属性描述符。  
    属性描述符有两种主要形式：数据描述符和存取描述符。  
    数据描述符【可设置属性】：`configurable`、 `enumerable`、`writable`、`value`  
    存取描述符【可设置属性】：`configurable`、`enumerable`、`get`、`set`  
    其中布尔值类型的属性默认值全部是`false`；

## 实践
1. `Object.assign`,通过`Object.defineProperty`追加进入`Object`对象中，是不可枚举，可以修改，且是浅拷贝操作
2. `Function.prototype.bind`