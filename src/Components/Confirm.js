import '../Stylesheets/Confirm.css';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';

const Confirm = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    const confirm = useSelector(state => state.confirmReducer);
    const dispatch = useDispatch();

    const title = confirm.asking.title;
    const question = confirm.asking.question;

    //REFERENCE 
    const ask_bg = useRef(null);
    const ask = useRef(null);

    useEffect(() => {
        if(confirm.asking) {
            $(ask_bg.current).css({display: 'flex'});
            $(ask_bg.current).fadeIn(300);
            $(ask.current).animate({
                marginTop: '25px'
            }, 200, 'swing')
        } else {
            $(ask.current).animate({
                marginTop: '-25px'
            }, 300, 'swing')
            $(ask_bg.current).fadeOut(200);
        }
    }, [confirm.asking]);

    return <>
        <div className="blur-bg-effect confirm" style={{...colorscheme.elements.blurBgEffect}} ref={ask_bg}>
            <div className="confirm-container solid-container" 
            style={{
                ...colorscheme.elements.solidContainer,
            }}
            ref={ask}>
                <div className="confirm-head global-border" style={{...colorscheme.elements.globalBorder}}>
                {/* <i className="fas fa-question-circle text-warning" style={{marginRight: '10px', ...colorscheme.elements.textLight}}></i> */}
                    <p className="title-text text-solid" style={{...colorscheme.elements.textSolid}}>{title}</p>
                </div>
                <p className="question-text text-solid" style={{...colorscheme.elements.textSolid}}>{question}</p>
                <div className="confirm-btn-container global-border" style={{...colorscheme.elements.globalBorder}}>
                    <span className="btn btn-delete" style={{...colorscheme.elements.btnDelete}}
                    onClick={() => {
                        dispatch({type: 'CONFIRM_NO'});
                    }}>NO</span>
                    <span className="btn btn-primary" style={{...colorscheme.elements.btnPrimary}} 
                    onClick={() => {
                        dispatch({type: 'CONFIRM_YES'});
                    }}>YES</span>
                    </div>
            </div>
        </div>
    </>
}


export default Confirm;