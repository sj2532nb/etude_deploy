import React from 'react';
import $ from 'jquery';

export default function Section1Component(){

    React.useEffect(() => {
        const $slideContainer = $('#section1 .slide-container');
        const $slide = $('#section1 .slide');
        const $pageBtn = $(`#section1 .page-btn`);
        let cnt = 0;
        let setId = 0;
        let imsi = null;

        // 1-1. 메인 다음슬라이드 함수 : 페이드인
        function mainNextSlide(){
            // 슬라이드 모두 초기화
            $slide.css({zIndex:1, opacity:1});
            // 첫번째 슬라이드
            // $slide.eq(현재슬라이드번호-1)
            $slide.eq(cnt===0? 7:cnt-1).css({zIndex:2});  // cnt 0 현재슬라이드
            // 두번째 슬라이드(맨 위에꺼)
            $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0}, 0).animate({opacity:1}, 600);
            // $slide.css({zIndex: 1, opacity:1});
            // $slide.eq(imsi!==null?imsi:(cnt===0?7:cnt-1)).css({zIndex: 8});  // 현재슬라이드
            // $slide.eq(cnt).css({zIndex: 8}).stop().animate({opacity:0}, 0).animate({opacity:1}, 600);  // 다음슬라이드
            pageNation();
        }
        // 1-2. 메인 이전슬라이드 함수 : 페이드아웃
        function mainPrevSlide(){
            $slide.css({zIndex:1, opacity:1});
            $slide.eq(cnt).css({zIndex:2});  // 이전슬라이드
            $slide.eq(cnt===0? 7:cnt+1).css({zIndex:3}).stop().animate({opacity:1}, 0).animate({opacity:0}, 600);  // 현재슬라이드
            // $slide.css({zIndex: 1, opacity:1});
            // $slide.eq(cnt).css({zIndex: 2});  // 이전슬라이드
            // $slide.eq(imsi!==null?imsi:(cnt===7?0:cnt+1)).css({zIndex: 3}).stop().animate({opacity:1}, 0).animate({opacity:0}, 600);  // 현재슬라이드
            pageNation();
        }

        function nextCount(){
            cnt++;
            if(cnt>7){
                cnt=0;
            }
            mainNextSlide();
        }

        function prevCount(){
            cnt--;
            if(cnt<0){
                cnt=7;
            }
            mainPrevSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();
        
        
        function pageNation(){
            console.log(cnt>7 ? 0 : cnt);
            $pageBtn.removeClass(`on`);
            $pageBtn.eq(cnt>7 ? 0 : cnt).addClass(`on`);
        }

        //6. 페이지버튼 클릭이벤트
        $pageBtn.each(function(idx){
            $(this).on({
                click(e){
                    e.preventDefault();
                    clearInterval(setId);
                    if(cnt<idx){  // 현재 슬라이드번호 cnt 보다 클릭한 버튼 1 인덱스번호가 크면
                        if( Math.abs(idx-cnt)>=7 ){  // 0 1 2
                            imsi=cnt;
                        }
                        else{
                            imsi=null;
                        }
                        cnt=idx;
                        mainNextSlide();

                    }
                    if(cnt>idx){  // 현재 슬라이드번호 cnt 보다 클릭한 버튼 1 인덱스번호가 작으면
                        if( Math.abs(idx-cnt)>=7 ){
                            imsi=cnt;
                        }
                        else{
                            imsi=null;
                        }
                        cnt=idx;
                        mainPrevSlide();

                    }

                }
            });
        });

        // $slideContainer.on({
        //     mouseenter(){
        //         clearInterval(setId);
        //     },
        //     mouseleave(){
        //         autoTimer();
        //     }
        // });

    },[]);




    return (
        <section id="section1">
            <div className="container">

                <div className="slide-container">
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide slide1">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>네이버 단독 선론칭 특/별/혜/택/</h1>
                                        <h2>선착순 사은품 증정</h2>
                                    </div>
                                </a>
                            </li>
                            <li className="slide slide2">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>한 올 한 올 깔끔한 컬링</h1>
                                        <h2>컬 픽스 마스카라</h2>
                                    </div>
                                </a>
                            </li>
                            <li className="slide slide3">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>BT21 프라이빗 뉴이어 파티</h1>
                                        <h2>2023 새해 한정 BT21 스페셜 에디션</h2>
                                    </div>
                                </a>
                            </li>
                            <li className="slide slide4">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>에뛰드 NEW MUSE 카즈하</h1>
                                        <h2>플레이 톤 아이 팔레트</h2>
                                    </div>
                                </a>
                            </li>
                            <li className="slide slide5">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>조효진 개발! 그림자 쉐딩</h1>
                                        <h2>음영 메이크업 강자로 재.조.명.</h2>
                                    </div>
                                </a>
                            </li>
                            <li className="slide slide6">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>립케어 강자 '진저슈가'</h1>
                                        <h2>약 200만개 누적 판매 진저슈가! </h2>
                                    </div>
                                </a>
                            </li>
                            <li className="slide slide7">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>플레이 톤 아이즈</h1>
                                        <h2>약 200만개 누적 판매 진저슈가! </h2>
                                    </div>
                                </a>
                            </li>
                            <li className="slide slide8">
                                <a href="!#">
                                    <div className='title'>
                                        <h1>순정 디렉터 선크림</h1>
                                        <h2>#디렉터파이 공동개발 #자차검증 #저자극</h2>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="page-btn-box">
                    <span><a href="!#" className='page-btn blind on'>페이지1</a></span>
                    <span><a href="!#" className='page-btn blind'>페이지2</a></span>
                    <span><a href="!#" className='page-btn blind'>페이지3</a></span>
                    <span><a href="!#" className='page-btn blind'>페이지4</a></span>
                    <span><a href="!#" className='page-btn blind'>페이지5</a></span>
                    <span><a href="!#" className='page-btn blind'>페이지6</a></span>
                    <span><a href="!#" className='page-btn blind'>페이지7</a></span>
                    <span><a href="!#" className='page-btn blind'>페이지8</a></span>
                </div>
            </div>
        </section>
    );
};