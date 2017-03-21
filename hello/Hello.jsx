import './index.scss';
//import "../../style/comm.style.scss";
import './init.scss'
import React from 'react';
import ReactDom from 'react-dom';

import { Link, withRouter} from 'react-router';
//返回
//import Go from '../../components/navigation/GoBack.jsx';

//detali组件
import Detail from './detail';
//relative
import Relative from './relative';
//引入 swiper
import Swipers from './swiper';

const Hello = withRouter(
    React.createClass({

        render(){
            return (
                <div className="goods-wrap">
                    <link rel="alternate" href="./swiper.min.css"/>
                    <div className="goods-show common-margin">
                        <Swipers swimgs={this.getImgs()} />
                        <div className="goodsAbout">
                            <h2>诺基亚6 全网通 双卡双待4G手机 4GB+64GB</h2>
                            <p className="introduce">品质卓越、设计精美、经久耐用</p>
                            <p className="issue clearfix">
                                <i className="icon icon-number"></i>
                                期号：20170310
                                <a href="/goodsprobability">计算方式说明></a>
                            </p>
                            <div className="progress">
                                <p className="progressLine">
                                    <span></span>
                                    <i>37%</i>
                                </p>
                                <p className="text clearfix">
                                    <span className="total">总需2600人次（1微豆/人次）</span>
                                    <span className="remain">剩余<b>1638</b>人次</span>
                                </p>
                            </div>
                            <div className="participate">
                                <p>
                                    <i></i>
                                    您还没有参与本期夺宝哦！
                                </p>
                            </div>
                            <ul className="item clearfix">
                                <li>公正公开</li>
                                <li>正品保证</li>
                                <li>权益保障</li>
                                <li>免费配送</li>
                            </ul>
                        </div>
                    </div>
                    <Detail />
                    <Relative number={this.getNumbers()} />
                    <div className="footer">
                        <a>立即夺宝</a>
                    </div>
                    <div className="return"><a href="/">返回</a></div>
                </div>
            )
        },
        getNumbers(){
            return [
                {
                    con: '3666',
                    src: require('./img/detail-one.jpg')
                },
                {
                    con: '2222',
                    src: require('./img/detail-two.jpg')
                },
                {
                    con: '3333',
                    src: require('./img/detail-three.jpg')
                },
                {   con:'1234',
                    src:require('./img/detail-four.jpg')

                },
                {   con:'2233',
                    src:require('./img/detail-five.jpg')

                },
                {   con:'1314',
                    src:require('./img/detail-six.jpg')

                }
            ];
        },
        getImgs(){
            return [
                {src: 'http://ww3.sinaimg.cn/mw690/006uZX6xly1fdd8tkp0vyj30ku0afgmb'},
                {src: 'http://ww3.sinaimg.cn/mw690/006uZX6xly1fdd8th32b7j30ku0af75a'},
                {src: 'http://ww3.sinaimg.cn/mw690/006uZX6xly1fdd8tj0kmjj30ku0af755'}
            ]
        }
    })
);
//class Hello extends Component{
//    render(){
//        return (
//        <div>
//            <h1> <strong>Hello EveryOne!!!</strong></h1>
//            <img src={require('./yy6.jpeg')}/>
//            <Go router={this.props.router}/>
//        </div>
//
//        )
//    }
//}
export default Hello;

