/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 21:16:21
*/
'use strict';
import {LanContext} from "../../index.js";
import Item from '../item/index.js';
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const data = this.context,
            {list=[], currLan=''} = data || {};
        if(!list.length) return null;
        return (
        <div className="m-home-list">
            {
                list.map((item={}, index) => {
                    return <Item key={index} index={index} />
                })
            }
        </div>
        );
    }
}
List.contextType = LanContext;

export default List;