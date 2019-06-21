/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 21:15:44
*/
'use strict';
import Text from '../text/index.js';
import {LanContext} from "../../index.js";

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    // static contextType = LanContext;
    render() {
        const data = this.context,
            {list=[], currLan=''} = data || {},
            {index} = props,
            item = list[index],
            currTxt = item[currLan];

        return (
            <div className="m-home-item">
                <Text txt={currTxt} index={index} />
            </div>
        );
    }
}

Item.contextType = LanContext;

export default Item;