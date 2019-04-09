/*
 * @Author: weiu.cao
 * @Date: 2019-04-08 18:08:19
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-04-09 17:00:39
*/

/**
 * ObjectAssign polyfill
 */
const ObjectAssign = function () {
    if(typeof Object.assign === 'function') {
        return true;
    }
    Object.defineProperty(Object, 'assign', {
        configurable: true,
        writable: true,
        enumerable: false, // 默认 false 可以不写
        value: function(targetObj, sourceObjs) {
            if(targetObj && Object.prototype.toString.call(targetObj) !== '[object Object]') {
                return 'cannt convert targetObj which isnot object type to Object type';
            }
            var newObj = new Object(targetObj),
                index = 1,
                argsLen = arguments.length;
            while(--argsLen) {
                var sourceObj = arguments[argsLen];
                if(sourceObj && Object.prototype.toString.call(sourceObj) !== '[object Object]') {
                   continue;
                }
                for(var key in sourceObj) {
                    sourceObj.hasOwnProperty(key) && (newObj[key] = sourceObj[key]);
                }
            }
            return newObj;
        }
    });
}

/**
 * bind函数实现
 * @param {object} oThis 绑定的对象
 */
function functionBind(oThis) {

}