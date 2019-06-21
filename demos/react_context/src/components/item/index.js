/*
 * @Author: weiu.cao
 * @Date: 2019-06-21 15:13:21
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-06-21 17:00:13
*/
'use strict';
import Text from '../text/index.js';
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = LenContext;
    render() {
        const data = this.context,
            {list=[], currLan=''} = data || {},
            {index} = props;

        return (
            <div className="m-home-item">
                <Text />
            </div>
        );
    }
}