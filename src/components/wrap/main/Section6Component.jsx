import React from 'react';
import $ from 'jquery';

export default function Section6Component(){

    React.useEffect(() => {

        const $slideWrap = $('#section6 .slide-wrap');
        const $prevBtn = $('#section6 .prev-btn');
        const $nextBtn = $('#section6 .next-btn');
        let cnt = 0;

        function mainSlide(){
            // console.log(cnt);
            $slideWrap.stop().animate({left:`${-25 * cnt}%`},600, function(){

                $slideWrap.stop().animate({left:`${-25 * cnt}%`}, 0)
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

        $prevBtn.on({
            click(e){
                e.preventDefault();
                if(cnt>0){
                    prevCount();
                }
            }
        })

        $nextBtn.on({
            click(e){
                e.preventDefault();
                if(cnt<3){
                    nextCount();
                }
            }
        })

    })






    
    return (
        <section id="section6">
            <div className="container">
                <div className="title">
                    <span><img src="./img/whatsnew-icon.png" alt="" /></span>
                    <h2>What’s New</h2>
                    <p>주목! 신상이 궁금해? 설레는 신상으로 채워지는 작은 행복</p>
                    <button type='button'>View More</button>
                </div>
                <div className="gap">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide slide1">
                                    <div className="col-gap">
                                        <span>
                                            <a href="!#">
                                                <p>NEW</p>
                                                <img className='img1' src="./img/0317_Soonjung_Toner_01-800x800.jpg" alt="" />
                                                <img className='img2' src="./img/0317_Soonjung_Toner_Model_04-800x800.jpg" alt="" />
                                            </a>
                                        </span>
                                        <div>
                                            <h3><a href="!#">순정 약산성 5.5 진정 토너 500ml + 리필 200ml</a></h3>
                                            <h4><strong>47,000</strong><span>원</span></h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="slide slide2">
                                    <div className="col-gap">
                                        <span>
                                            <a href="!#">
                                                <p>NEW</p><span>올리브영</span>
                                                <img className='img1' src="./img/연출컷_00-800x800.jpg" alt="" />
                                                <img className='img2' src="./img/모델컷_01-800x800.jpg" alt="" />
                                            </a>
                                        </span>
                                        <div>
                                            <p>#데일리 #영롱 #요즘글리터 </p>
                                            <h3><a href="!#">샤인 픽스 아이즈 글리터 2.5g</a></h3>
                                            <h4><strong>13,000</strong><span>원</span></h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="slide slide3">
                                    <div className="col-gap">
                                        <span>
                                            <a href="!#">
                                                <p>NEW</p>
                                                <img className='img1' src="./img/00-2-800x800.jpg" alt="" />
                                                <img className='img2' src="./img/01-1-800x800.jpg" alt="" />
                                            </a>
                                        </span>
                                        <div>
                                            <p>#BT21 #수분 #진정 </p>
                                            <h3><a href="!#">(BT21) 순정 수분 베리어 크림 75ml</a></h3>
                                            <h4><strong>22,000</strong><span>원</span></h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="slide slide4">
                                    <div className="col-gap">
                                        <span>
                                            <a href="!#">
                                                <p>NEW</p>
                                                <img className='img1' src="./img/00-800x800.jpg" alt="" />
                                                <img className='img2' src="./img/0258-KT_YS.J._TonerCicaBalm_Vegan_Set-1-800x800.jpg" alt="" />
                                            </a>
                                        </span>
                                        <div>
                                            <p>BT21 #약산성 #집중진정 </p>
                                            <h3><a href="!#">(BT21) 순정 약산성 5.5 진정 토너 350ml</a></h3>
                                            <h4><strong>27,000</strong><span>원</span></h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="slide slide5">
                                    <div className="col-gap">
                                        <span>
                                            <a href="!#">
                                                <p>NEW</p>
                                                <img className='img1' src="./img/00-1-800x800.jpg" alt="" />
                                                <img className='img2' src="./img/0310_PPOYAN_SOON_Probiotics_Mmune_Powder_06-800x800.jpg" alt="" />
                                            </a>
                                        </span>
                                        <div>
                                            <p>#BT21 #피치&코랄 #핑크&모브 </p>
                                            <h3><a href="!#">(BT21) 플레이 컬러 아이즈 0.5g X 6ea</a></h3>
                                            <h4><strong>24,000</strong><span>원</span></h4>
                                        </div>
                                    </div>
                                </li>
                                <li className="slide slide6">
                                    <div className="col-gap">
                                        <span>
                                            <a href="!#">
                                                <p>NEW</p>
                                                <img className='img1' src="./img/00-800x800 (1).jpg" alt="" />
                                                <img className='img2' src="./img/03-800x800.jpg" alt="" />
                                            </a>
                                        </span>
                                        <div>
                                            <p>#BT21 #안묻픽싱 </p>
                                            <h3><a href="!#">(BT21) 픽싱 틴트 4g</a></h3>
                                            <h4><strong>12,000</strong><span>원</span></h4>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-box1">
                        <a href="!#" className="prev-btn"><img src="./img/icon-arrow-slide.svg" alt="" /></a>
                    </div>
                    <div className="btn-box2">
                        <a href="!#" className="next-btn"><img src="./img/icon-arrow-slide.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};