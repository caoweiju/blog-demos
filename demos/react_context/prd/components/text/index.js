/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 20:50:10
*/
'use strict';

import { LanContext } from "../../index.js";
export default function Text(props) {
    var index = props.index,
        txt = props.txt;

    return React.createElement(
        LanContext.Consumer,
        null,
        function (_ref) {
            var list = _ref.list,
                currLan = _ref.currLan;
            return React.createElement(
                "div",
                { className: "m-home-item" },
                "props:",
                txt,
                "------context:",
                list[index][currLan]
            );
        }
    );
}