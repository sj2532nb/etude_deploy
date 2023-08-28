import React from 'react';
import $ from 'jquery';

export default function Section8Component(){

    React.useEffect(() => {
        let cnt = 0;
        const $nextBtn = $(`#section8 .next-btn`);
        const $prevBtn = $(`#section8 .prev-btn`);

        function mainSlide(){
            $('#section8 .slide-wrap').stop().animate({right:`${-100 * cnt}%`},500, function(){
                if(cnt<0) cnt=1;
            });
        }
        $nextBtn.on({
            click(e){
                e.preventDefault();
                cnt--;
                mainSlide();
            }
        })

        $prevBtn.on({
            click(e){
                e.preventDefault();
                cnt--;
                mainSlide();
            }
        })
    })






    return (
        <section id="section8">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <span><img src="./img/newevent-icon.png" alt="" /></span>
                        <h2>News & Event</h2>
                        <button type='button'>View More</button>
                    </div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide2">
                                    <div className="col-gap">
                                        <a href="!#">
                                            <img src="./img/EP01_002_main_news_03_foundationFactory.jpg" alt="" />
                                            <h3>맞춤형 파운데이션 서비스</h3>
                                        </a>
                                    </div>
                                        <div className="col-gap">
                                        <a href="!#">
                                            <img src="./img/EP01_002_main_news_04_brand.jpg" alt="" />
                                            <h3>어바웃 에뛰드</h3>
                                        </a>
                                    </div>
                                </li>
                                <li className="slide slide1">
                                    <div className="col-gap">
                                        <a href="!#">
                                            <img src="./img/EP01_002_main_news_01_recycle.jpg" alt="" />
                                            <h3>공병수거 캠페인</h3>
                                        </a>
                                    </div>
                                    <div className="col-gap">
                                        <a href="!#">
                                            <img src="./img/EP01_002_main_news_02_vegan.jpg" alt="" />
                                            <h3>모두를 위한 비건 라이프</h3>
                                        </a>
                                    </div>
                                </li>
                                <li className="slide slide2">
                                    <div className="col-gap">
                                        <a href="!#">
                                            <img src="./img/EP01_002_main_news_03_foundationFactory.jpg" alt="" />
                                            <h3>맞춤형 파운데이션 서비스</h3>
                                        </a>
                                    </div>
                                    <div className="col-gap">
                                        <a href="!#">
                                            <img src="./img/EP01_002_main_news_04_brand.jpg" alt="" />
                                            <h3>어바웃 에뛰드</h3>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="!#" className="prev-btn"><img src="./img/icon-arrow-slide.svg" alt="" /></a>
                    <a href="!#" className="next-btn"><img src="./img/icon-arrow-slide.svg" alt="" /></a>
                </div>
            </div>
        </section>
    );
};