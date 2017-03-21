/**
 * Created by ysm on 2017/3/15.
 */
import React,{Component} from 'react';

import './swiper.min.css';
import './swiper.min';
//<li>
//    <a href="###">
//        <div>
//            <img src={require('./img/detail-two.jpg')}/>
//        </div>
//        <p>总需人次：4188人次</p>
//    </a>
//
//</li>
//<li>
//    <a href="###">
//        <div>
//            <img src={require('./img/detail-three.jpg')}/>
//        </div>
//        <p>总需人次：2833人次</p>
//    </a>
//
//</li>
//<li>
//    <a href="###">
//        <div>
//            <img src={require('./img/detail-four.jpg')}/>
//        </div>
//        <p>总需人次：6888人次</p>
//    </a>
//
//</li>

import './relative.scss';
class Detail extends Component {

    componentDidMount(){
        //console.log('sss');
        var swiper = new Swiper('.goods-relative .swiper-container', {

            loop: false,
            slidesPerView: 3
            //slidesPerColumn: 2

        });
    };

    render() {
        //初始化变量
        let {number}=this.props;

        return (

            <div className="goods-relative common-margin">
                <p>相关商品</p>
                <div className="relative-list clearfix swiper-container">
                    <div className="swiper-wrapper">
                        {
                            number.map((d,i) => {
                                return  <div className="swiper-slide imgcon" key={i}>
                                            <div><img src={d.src} alt=""/></div>
                                            <p>总需人次：{d.con}人次</p>
                                        </div>
                            })
                        }
                    </div>


                </div>
            </div>
        )
    }
}
export default Detail;