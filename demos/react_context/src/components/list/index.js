/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 19:53:07
*/
'use strict';
import {LenContext} from "../../index.js";
import Item from '../item/index.js';
export default class List extends React.Component {
    constructor(props) {
        super(props);
    }
    
    static contextType = LenContext;

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