/*
 * @Author: weiu.cao
 * @Date: 2019-04-08 18:08:19
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-04-08 18:22:20
*/

const ObjectAssign = function (targetObj, sourceObjs) {
    if(typeof Object.prototype.assign === 'function') {
        return true;
    }
    if(targetObj && Object.prototype.call(targetObj) !== 'object Object') {
        return 'cannt convert targetObj which isnot object type to Object type';
    }
    Object.defineProperty(Object, assign)
}