import React from 'react';

export default function FooterComponent(){

    const [state, setState] = React.useState({
        isFamilySite : false,
        isSiteMap : false
    });


    const onClickFamilySite=(e)=>{
        e.preventDefault();
        let isFamilySite = false;
        let isSiteMap = false;
        
        if(state.isFamilySite===false){
            isFamilySite=true;
        }
        else if(state.isFamilySite===true){
            isFamilySite=false;
            isSiteMap=false;
        }
        setState({
            ...state,
            isFamilySite: isFamilySite,
            isSiteMap: isSiteMap,
        })
    }

    const onClickSiteMap=(e)=>{
        e.preventDefault();
        let isSiteMap = false;
        let isFamilySite = false;
        
        if(state.isSiteMap===false){
            isSiteMap=true;
        }
        else if(state.isSiteMap===true){
            isSiteMap=false;
            isFamilySite=false;
        }
        setState({
            ...state,
            isSiteMap: isSiteMap,
            isFamilySite: isFamilySite
        })
    }



    return (
        <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="row1">
                            <div className="row1-l">
                                <p>공지</p>
                                <span><a href="!#">[공지] 에뛰드 개인정보처리 방침 일부가 변경됩니다.</a></span>
                                <a href="!#">더보기</a>
                            </div>
                            <div className="row1-r">
                                <span>
                                    <a onClick={onClickFamilySite} href="!#">Family Site<img className={`${state.isFamilySite?' on':''}`} src="./img/arrow-footer-select.svg" alt="" /></a>
                                    <div className={`familysite ${state.isFamilySite?' on':''}`}>
                                        <ul>
                                            <li>ETUDE GLOBAL MALL</li>
                                            <li>JAPAN</li>
                                        </ul>
                                    </div>
                                </span>
                                <span>
                                    <a onClick={onClickSiteMap} href="!#">Site Map<img className={`${state.isSiteMap?' on':''}`} src="./img/arrow-footer-select.svg" alt="" /></a>
                                    <div className={`sitemap ${state.isSiteMap?' on':''}`}>
                                        <div className="sitemap-box">
                                            <div className="sitemap-left">
                                                <ul>
                                                    <li>
                                                        <a href="!#"><h2>BRAND</h2></a>
                                                        <div>
                                                            <strong><a href="!#">About ETUDE</a></strong>
                                                            <strong><a href="!#">뷰티즌</a></strong>
                                                            <strong><a href="!#">지구를 위한 활동</a></strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#"><h2>PRODUCT</h2></a>
                                                        <div>
                                                            <strong><a href="!#">전체보기</a></strong>
                                                            <strong><a href="!#">신제품</a></strong>
                                                            <strong className='category'><a href="!#">카테고리</a></strong>
                                                            <p><a href="!#">아이</a></p>
                                                            <p><a href="!#">립</a></p>
                                                            <p><a href="!#">페이스</a></p>
                                                            <p><a href="!#">네일</a></p>
                                                            <p><a href="!#">스킨케어</a></p>
                                                            <p><a href="!#">마스크·팩</a></p>
                                                            <p><a href="!#">클렌저</a></p>
                                                            <p><a href="!#">바디</a></p>
                                                            <p><a href="!#">헤어</a></p>
                                                            <p><a href="!#">툴</a></p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#"><h2>MAKEUP LOOK</h2></a>
                                                        <div>
                                                            <strong><a href="!#">메이크업룩</a></strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#"><h2>FOUNDATION FACTORY</h2></a>
                                                        <div>
                                                            <strong><a href="!#">서비스안내</a></strong>
                                                            <strong><a href="!#">예약하기</a></strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="sitemap-right">
                                                <ul>
                                                    <li>
                                                        <a href="!#"><h2>@ETUDEOFFICIAL</h2></a>
                                                        <div>
                                                            <strong><a href="!#">Instagram</a></strong>
                                                            <strong><a href="!#">Tiktok</a></strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#"><h2>STORE</h2></a>
                                                        <div>
                                                            <strong><a href="!#">온라인</a></strong>
                                                            <strong><a href="!#">오프라인</a></strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#"><h2>CONTACT</h2></a>
                                                        <div>
                                                            <strong><a href="!#">공지사항</a></strong>
                                                            <strong><a href="!#">FAQ</a></strong>
                                                            <strong><a href="!#">고객문의</a></strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#"><h2>MEMBERSHIP</h2></a>
                                                        <div>
                                                            <strong><a href="!#">핑크멤버십</a></strong>
                                                            <strong><a href="!#">뷰티포인트</a></strong>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a href="!#"><h2>뽀오얀</h2></a>
                                                        <div>
                                                            <strong><a href="!#">About 뽀오얀</a></strong>
                                                            <strong><a href="!#">제품 보기</a></strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="row2">
                            <ul>
                                <li>
                                    <a href="!#">공지사항</a>
                                </li>
                                <i>|</i>
                                <li>
                                    <a href="!#">이용약관</a>
                                </li>
                                <i>|</i>
                                <li>
                                    <a href="!#">전자공고</a>
                                </li>
                                <i>|</i>
                                <li>
                                    <a href="!#">개인정보처리방침</a>
                                </li>
                                <i>|</i>
                                <li>
                                    <a href="!#">영상정보처리기기 운영·관리 방침</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row3">
                            <div className="row3-l">
                                <span>
                                    <a href="!#"><img src="./img/img_logo2023.png" alt="" /></a>
                                </span>
                                <p>
                                    (주)에뛰드 대표이사 : 이수연<br />
                                    개인정보보호책임자 : 이수연<br />
                                    사업자등록번호 : 135-81-05033<br />
                                    주소 : 서울특별시 용산구 한강대로 100 (한강로 2가)
                                </p>
                            </div>
                            <div className="row3-r">
                                <h3>CONTACT</h3>
                                <div>
                                    <img src="./img/icon-phone.svg" alt="" /><p>제품 문의 : 080-022-2285<br />고객 문의 : 1544-5418</p>
                                </div>
                                <div>
                                    <img src="./img/icon-clock.svg" alt="" /><p>운영 시간 : 평일 13:00 ~ 17:00  (주말 및 공휴일 휴무)<br />점심 시간 : 12:00 ~ 13:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="row4">
                            <span><img src="./img/icon-email.svg" alt="" /><p>대표 이메일 : etude_master@etude.co.kr</p></span>
                        </div>
                        <div className="row5">
                            <div className="row5-l">
                                <p>© ETUDE CORPORATION. ALL RIGHTS RESERVED.</p>
                            </div>
                            <div className="row5-r">
                                <div className="icon">
                                    <a href="!#"><img src="./img/icon-insta.svg" alt="" /></a>
                                    <a href="!#"><img src="./img/icon-facebook.svg" alt="" /></a>
                                    <a href="!#"><img src="./img/icon-youtube.svg" alt="" /></a>
                                    <a href="!#"><img src="./img/icon-tiktok.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};