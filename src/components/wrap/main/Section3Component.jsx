import React from 'react';

export default function Section3Component(){

    const [state, setState] = React.useState({
        isShow: false
    });

    React.useEffect(()=>{

        const sec3Top = document.querySelector(`#section3`).offsetTop;

        window.addEventListener('scroll', function(){
            let isShow = false;

            if(this.window.scrollY>=sec3Top+200){
                isShow = true;
            }
            else{
                isShow = false;
            }

            setState({
                ...state,
                isShow: isShow
            })
        });
        
    },[]);



    return (
        <section id="section3">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <span><img src="./img/makeuplook-icon.png" alt="" /></span>
                        <h2>Makeup Look</h2>
                        <p>지금 나에게 어울리는 메이크업 룩은?</p>
                        <button type='button'>View More</button>
                    </div>
                    <div className="content">
                        <span>
                            <a href="!#"><img src="./img/makeup_look_main_playlist.jpg" alt="" /></a>
                        </span>
                        <figure><img className={`textimg ${state.isShow?' on':''}`} src="./img/makeup_playlist_text.png" alt="" /></figure>
                    </div>
                    <div className="content-bottom">
                        <div className="left">
                            <span>
                                <a href="!#">
                                    <p>EYE</p>
                                    <img src="./img/makeup_prd_playcoloreyes.jpg" alt="" />
                                    <figure>
                                        <img src="./img/icon-arrow-banner-1.svg" alt="" />
                                    </figure>
                                </a>
                            </span>
                        </div>
                        <div className="right">
                            <span>
                                <a href="!#">
                                    <p>LIP</p>
                                    <img src="./img/makeup_prd_glowfixingtint.jpg" alt="" />
                                    <figure>
                                        <img src="./img/icon-arrow-banner-1.svg" alt="" />
                                    </figure>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};