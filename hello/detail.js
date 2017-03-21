
/**
 * Created by ysm on 2017/3/15.
 */

import React,{Component} from 'react';

class Detail extends Component{

    render(){
        return(

        <div className="goods-details common-margin">

            <ul>
                <li className="detail-picture">
                    <i></i>图文详情
                    <span>建议在wifi下查看<i></i></span>
                </li>
                <li className="detail-award">
                    <i></i>历史中奖情况
                    <span><i></i></span>
                </li>
                <li className="detail-record">
                    <i></i>本期参与记录
                    <span>2017-03-10 12:03:07开始<i></i></span>
                </li>
            </ul>
        </div>


        )
    }

}
export default Detail;