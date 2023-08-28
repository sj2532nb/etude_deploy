import React from 'react';

export default function GotopComponent(){

    const [state, setState] = React.useState({
        isHide: true
    });

    React.useEffect(()=>{

        window.addEventListener('scroll', function(){
            let isHide = true;

            if(this.window.scrollY>100){
                isHide = false;
            }
            else{
                isHide = true;
            }

            setState({
                ...state,
                isHide: isHide
            })
        });
    },[]);








    return (
        <div className={`gotop ${state.isHide?' on':' off'}`}>
            <a href="#wrap"><img src="./img/arrow-footer-select.svg" alt="" /></a>
        </div>
    );
};