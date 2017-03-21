/**
 * Created by ysm on 2017/3/16.
 */
//引入轮播插件
import './swiper.min.css';
import './swiper.min';
import './swipers.scss'

import React,{Component} from 'react';

class Swipers extends Component{


    componentDidMount(){
        var swiper = new Swiper('.goods-show .swiper-container', {
            pagination:'.goods-show .swiper-pagination',
            paginationClickable: true,
            autoplay:3000,
            loop: true,
            autoplayDisableOnInteraction: false
        });
    };

    render(){
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper imgContainer clearfix">
                    {this.props.swimgs.map((d,i)=>{
                        return  <div className="swiper-slide" key={i}>
                                    <img src={d.src} alt=""/>
                                </div>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>

            </div>
        )
    }
}
export default Swipers;

//<div className="swiper-container">
//    <div className="swiper-wrapper imgContainer clearfix">
//        <div className="swiper-slide">
//            <img src="http://ww3.sinaimg.cn/mw690/006uZX6xly1fdd8tkp0vyj30ku0afgmb" alt="图片未加载"/>
//        </div>
//        <div className="swiper-slide">
//            <img src="http://ww3.sinaimg.cn/mw690/006uZX6xly1fdd8th32b7j30ku0af75a" alt="图片未加载"/>
//        </div>
//        <div className="swiper-slide">
//            <img src="http://ww3.sinaimg.cn/mw690/006uZX6xly1fdd8tj0kmjj30ku0af755" alt="图片未加载"/>
//        </div>
//    </div>
//    <div className="swiper-pagination"></div>
//</div>

