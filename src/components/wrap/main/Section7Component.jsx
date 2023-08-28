import React from 'react';
import $ from 'jquery';

export default function Section7Component(){

    React.useEffect(() => {

        const $slideWrap = $('#section7 .slide-wrap');
        let cnt = 0;
        let setId = 0;

        function mainSlide(){
            $slideWrap.stop().animate({left:`${-100 * cnt}%`},1000, function(){
                if(cnt>4) cnt = 0;
                if(cnt<0) cnt = 4;
                $slideWrap.stop().animate({left:`${-100 * cnt}%`}, 0)
            });
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();
    })







    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-content">
                            <div className="tiktok-img">
                                <h2><span>ETUDE Official </span><strong>Tiktok</strong></h2>
                                <a href="!#">
                                    <img src="./img/img_main_tiktox_1212.jpg" alt="" />
                                    <img src="./img/ico_tiktok_play.png" alt="" />
                                </a>
                                <h3>FOLLOW US</h3>
                                <h4>@etude_official</h4>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="icon-box">
                                <a href="!#"><img src="./img/instagram-icon.svg" alt="" /></a>
                                <a href="!#"><img src="./img/facebook-icon.svg" alt="" /></a>
                                <a href="!#"><img src="./img/youtube-icon.svg" alt="" /></a>
                                <a href="!#"><img src="./img/tiktok-icon.svg" alt="" /></a>
                            </div>
                            <h2><span>ETUDE Official </span><strong>Instagram</strong></h2>
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide5">
                                            <div>
                                                <a href="!#"><img src="./img/img5_main_insta_1212.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div>
                                                <a href="!#"><img src="./img/img1_main_insta_1212.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li className="slide slide2">
                                            <div>
                                                <a href="!#"><img src="./img/img2_main_insta_1212.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li className="slide slide3">
                                            <div>
                                                <a href="!#"><img src="./img/img3_main_insta_1212.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li className="slide slide4">
                                            <div>
                                                <a href="!#"><img src="./img/img4_main_insta_1212.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li className="slide slide5">
                                            <div>
                                                <a href="!#"><img src="./img/img5_main_insta_1212.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                        <li className="slide slide1">
                                            <div>
                                                <a href="!#"><img src="./img/img1_main_insta_1212.jpg" alt="" /></a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </section>
    );
};