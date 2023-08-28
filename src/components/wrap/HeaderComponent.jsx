import React from 'react';

export default function HeaderComponent(){

    const [state, setState] = React.useState({
        isFix: false,
        isSearch: false,
        isFullmenu: false,
        isShoppingat: false
    });

    React.useEffect(()=>{

        window.addEventListener('scroll', function(){
            let isFix = false;

            if(window.scrollY>0){
                isFix = true;
            }
            else{
                isFix = false;
            }

            setState({
                ...state,
                isFix: isFix
            })
        });
    },[]);


    const onClickSearchOpen=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSearch: true
        })
    }

    const onClickSearchClose=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSearch: false
        })
    }



    const onClickFullmenuOpen=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isFullmenu: true
        })
    }

    const onClickFullmenuClose=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isFullmenu: false
        })
    }



    const onClickShoppingat=(e)=>{
        e.preventDefault();
        let isShoppingat = false;
        
        if(state.isShoppingat===false){
            isShoppingat=true;
        }
        else if(isShoppingat===true){
            isShoppingat=false;
        }
        setState({
            ...state,
            isShoppingat: isShoppingat
        })
    }








    return (
        <header id="header">
            <div className={`container ${state.isFix?' on':''}`}>
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="logo">
                                <span>
                                    <a href="!#"><img src="./img/img_logo2023.png" alt="" /></a>
                                </span>
                            </div>
                            <nav className="nav">
                                <ul>
                                    <a href="!#"><li>PRODUCT</li></a>
                                    <a href="!#"><li>NEW</li></a>
                                    <a href="!#"><li>BRAND</li></a>
                                    <a href="!#"><li>MAKEUP LOOK</li></a>
                                    <a href="!#"><li>STORE</li></a>
                                    <a href="!#"><li>FOUNDATION FACTORY</li></a>
                                </ul>
                            </nav>
                        </div>
                        <div className="right-box">
                            <span>
                                <a onClick={onClickSearchOpen} href="!#"><img src="./img/search.svg" alt="" /></a>
                                <div className={`search-container ${state.isSearch?' on':''}`}>
                                    <div className="search-gap">
                                        <div className="search-content">
                                            <div className="search-top">
                                                <a href="!#"><img src="./img/img_logo2023.png" alt="" /></a>
                                                <a onClick={onClickSearchClose} href="!#"><img src="./img/icon-gnb-close.svg" alt="" /></a>
                                            </div>
                                            <div className="search-middle">
                                                <h2>Search For Products</h2>
                                                <div className="search-box">
                                                    <label>
                                                        <input type="text" name='search' id='search' placeholder='#립케어 강자! 진저슈가' />
                                                        <button type='submit'><img src="./img/icon-gnb-search.svg" alt="" /></button>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="search-bottom">
                                                <ul>
                                                    <li><h3><span>TREND </span><strong>#TAG</strong></h3></li>
                                                    <li><a href="!#">신제품 모아보기</a></li>
                                                    <li><a href="!#">진저슈가</a></li>
                                                    <li><a href="!#">플레이 컬러 아이즈</a></li>
                                                    <li><a href="!#">순정</a></li>
                                                    <li><a href="!#">비건</a></li>
                                                    <li><a href="!#">픽싱 틴트</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className={`fullmenu-btn ${state.isFullmenu?' on':''}`} onClick={onClickFullmenuOpen} href="!#">
                                    <i className='line1'></i>
                                    <i className='line2'></i>
                                    <i className='line3'></i>
                                </a>
                                <div className={`fullmenu-container ${state.isFullmenu?' on':''}`}>
                                    <div className="fullmenu-gap">
                                        <header className="fullmenu-header">
                                            <div className="fullmenu-header-container">
                                                <div className="fullmenu-header-gap">
                                                    <div className="fullmenu-header-content">
                                                        <div className="fullmenu-header-left-box">
                                                            <div className="fullmenu-header-logo">
                                                                <span>
                                                                    <a href="!#"><img src="./img/img_logo2023.png" alt="" /></a>
                                                                </span>
                                                            </div>
                                                            <nav className="fullmenu-header-nav">
                                                                <ul>
                                                                    <a href="!#"><li>PRODUCT</li></a>
                                                                    <a href="!#"><li>NEW</li></a>
                                                                    <a href="!#"><li>BRAND</li></a>
                                                                    <a href="!#"><li>MAKEUP LOOK</li></a>
                                                                    <a href="!#"><li>STORE</li></a>
                                                                    <a href="!#"><li>FOUNDATION FACTORY</li></a>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                        <div className="fullmenu-header-right-box">
                                                            <span>
                                                                <a onClick={onClickSearchOpen} href="!#"><img src="./img/search.svg" alt="" /></a>
                                                                <div className={`search-container ${state.isSearch?' on':''}`}>
                                                                    <div className="search-gap">
                                                                        <div className="search-content">
                                                                            <div className="search-top">
                                                                                <a href="!#"><img src="./img/img_logo2023.png" alt="" /></a>
                                                                                <a onClick={onClickSearchClose} href="!#"><img src="./img/icon-gnb-close.svg" alt="" /></a>
                                                                            </div>
                                                                            <div className="search-middle">
                                                                                <h2>Search For Products</h2>
                                                                                <div className="search-box">
                                                                                    <label>
                                                                                        <input type="text" name='search' id='search' placeholder='#립케어 강자! 진저슈가' />
                                                                                        <button type='submit'><img src="./img/icon-gnb-search.svg" alt="" /></button>
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="search-bottom">
                                                                                <ul>
                                                                                    <li><h3><span>TREND </span><strong>#TAG</strong></h3></li>
                                                                                    <li><a href="!#">신제품 모아보기</a></li>
                                                                                    <li><a href="!#">진저슈가</a></li>
                                                                                    <li><a href="!#">플레이 컬러 아이즈</a></li>
                                                                                    <li><a href="!#">순정</a></li>
                                                                                    <li><a href="!#">비건</a></li>
                                                                                    <li><a href="!#">픽싱 틴트</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a className={state.isFullmenu?' on':''} onClick={onClickFullmenuClose} href="!#">
                                                                    <i className='fullmenu-line1'></i>
                                                                    <i className='fullmenu-line2'></i>
                                                                    <i className='fullmenu-line3'></i>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>
                                        <div className="fullmenu-content">
                                            <ul>
                                                <li><a href="!#">BRAND</a></li>
                                                <li><a href="!#">PRODUCT</a></li>
                                                <li><a href="!#">MAKEUP LOOK</a></li>
                                                <li><a href="!#">FOUNDATION FACTORY</a></li>
                                                <li><a href="!#">@etudeofficial</a></li>
                                                <li><a href="!#">STORE</a></li>
                                                <li><a href="!#">CONATCT</a></li>
                                                <li><a href="!#">MEMBERSHIP</a></li>
                                                <li><a href="!#">뽀오얀</a></li>
                                            </ul>
                                        </div>
                                        <div className={`fullmenu-footer ${state.isShoppingat?' on':''}`}>
                                            <ul>
                                                <li><a href="!#">네이버 브랜드 스토어</a></li>
                                                <li><a href="!#">올리브영 브랜드관</a></li>
                                                <li><a href="!#">아모레몰 브랜드관</a></li>
                                                <li><a href="!#">ETUDE GLOBAL MALL</a></li>
                                            </ul>
                                            <a onClick={onClickShoppingat} href="!#">
                                                <span>
                                                    <p>Shopping at</p>
                                                    <p>네이버 브랜드 스토어</p>
                                                    <img src="./img/arrow-shoping-select.svg" alt="" />
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};