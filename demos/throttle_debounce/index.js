/*
 * @Author: weiu.cao
 * @Date: 2019-04-11 18:03:42
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-04-28 10:40:20
*/

/**
 * throttle
 * @param {function} handerFn 
 * @param {number} timeout 
 */
const throttle = (handerFn, timeout) => {
    if(typeof handerFn !== 'function') {
        return handerFn;
    }
    typeof timeout !== 'number' && (timeout=250);
    let last;
    return function(...args) {
        let _now = +new Date();
        if(last && _now - last < timeout) {
            handerFn.throttleId && clearTimeout(handerFn.debounceId);
            handerFn.debounceId = setTimeout(()=>{
                last = _now;
                // 要清楚这里的this指向 和使用节流函数的方式有关 
                // jquery中可能指向e.currentTarget react中可能指向undefined或者component
                handerFn.apply(this, args);
            }, timeout);
        } else {
            last = _now;
            handerFn.apply(this, args);
        }
    };
}

/**
 * throttle 节流函数
 * @param {fucntion} handerFn 
 * @param {number} timeout 
 */
function throttle(handerFn, timeout) {
    if(typeof handerFn !== 'function') {
        return handerFn;
    }
    typeof timeout !== 'number' && (timeout=250);
    var last;
    return function() {
        var _now = +new Date(),
            self = this,
            args = arguments;
        if(last && _now - last < timeout) {
            handerFn.throttleId && clearTimeout(handerFn.debounceId);
            handerFn.debounceId = setTimeout(function() {
                last = _now;
                handerFn.apply(self, args);
            }, timeout);
        } else {
            last = _now;
            handerFn.apply(self, args);
        }
    };
}

/*******************************************************/
/******************----------------*********************/
/*******************************************************/

/**
 * debounceFn
 * @param {function} handerFn 代理函数
 * @param {number} timeout 超时时间 ms
 */
const debounceFn = (handerFn, timeout=250) => {
    if(typeof handerFn !== 'function') {
        return handerFn;
    }
    typeof timeout !== 'number' && (timeout=250);
    return function(...args) {
        handerFn.debounceId && clearTimeout(handerFn.debounceId);
        handerFn.debounceId = setTimeout(()=>{
            // 要清楚这里的this指向 和使用节流函数的方式有关 
            // jquery中可能指向e.currentTarget react中可能指向undefined或者component
            handerFn.apply(this, args);
        }, timeout);
    };
};

/**
 * debounceFn
 * @param {function} handerFn 
 * @param {number} timeout 
 */
function debounceFn(handerFn, timeout){
    if(typeof handerFn !== 'function') {
        return handerFn;
    }
    typeof timeout !== 'number' && (timeout=250);
    return function() {
        var self = this,
            args = arguments;
        handerFn.debounceId && clearTimeout(handerFn.debounceId);
        handerFn.debounceId = setTimeout(function() {
            handerFn.apply(self, args);
        }, timeout);
    };
};