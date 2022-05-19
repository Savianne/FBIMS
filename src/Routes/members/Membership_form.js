import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Membership_form.css';
import $ from 'jquery';
import axios from 'axios';

//Custom Entities
import INPUT from '../../Custom_entities/Input';
import SELECT from '../../Custom_entities/Select';
import YES_NO_SWITCH from '../../Custom_entities/yes_no_switch';

//COmponents
import AVATAR_UPLOADER from './Avatart_uploader';

const MEMBERSHIP_FORM = ({state, dispatchState}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //State
    const [steps, updateSteps] = useState(1);
    const [isBaptized, setIsBaptizedState] = useState(false);

    //Reference
    const form_bg = useRef(null);
    const form = useRef(null);
    const step1 = useRef(null);
    const step2 = useRef(null);

    useEffect(() => {
        if(state) {
            $(form_bg.current).css({display: 'flex'});
            $(form_bg.current).fadeIn(300);
            $(form.current).animate({
                marginTop: '0'
            }, 200, 'swing')
        } else {
            $(form.current).animate({
                marginTop: '-25px'
            }, 300, 'swing')
            $(form_bg.current).fadeOut(200);
        }
    }, [state]);
    
    return <>
        <div className="blur-bg-effect membership-form-bg" 
        style={{
            ...colorscheme.elements.blurBgEffect
        }}
        ref={form_bg}>
            <form action="" className="solid-container membership-form" 
            style={{
                ...colorscheme.elements.solidContainer
            }}
            ref={form}>
                <div className="form-head global-border" 
                style={{
                    ...colorscheme.elements.globalBorder,
                }}>
                    <h6 className='text-solid' style={{...colorscheme.elements.textSolid, marginRight: 'auto'}}>Membership Form</h6>
                    <i className="fas fa-times close-toggle text-light icon-toggle" 
                    style={{...colorscheme.elements.textLight}}
                    onClick={() => dispatchState(false)}
                    ></i> 
                </div>
                <div className="steps global-border text-light" 
                style={{
                    ...colorscheme.elements.globalBorder,
                    ...colorscheme.elements.textLight
                }}>
                    <p className="step-title">{'Personal Information | Contact Information | Address | Baptism'}</p>
                </div>
                <div className="step-content">
                    <div className='text-solid left-area' 
                    style={{
                        ...colorscheme.elements.textSolid
                    }}>
                        {/* <p className="data-group-label">Full Name</p> */}
                        <h6
                       style={{
                            ...colorscheme.elements.textSolid,
                            margin: '0 0 10px 0 '
                        }}>-- Personal Information --</h6>
                        <div className="data-group">
                            <p className="data-label">First Name:</p><INPUT height='25px' width='400px' placeholder='Please Input A-Z between 4-10 char.' min_char={4} max_char={15} />
                        </div>
                        <div className="data-group">
                            <p className="data-label">Middle Name:</p><INPUT height='25px' width='400px' min_char={4} max_char={15} />
                        </div>
                        <div className="data-group">
                            <p className="data-label">Last Name:</p><INPUT height='25px' width='400px' min_char={4} max_char={15} />
                        </div>
                        <div className="data-group">
                            <p className="data-label">Gender:</p>
                            <SELECT height='38px' width='400px' values={[
                                {value: 'M', text: 'Male'},
                                {value: 'F', text: 'Female'}
                            ]}/>
                        </div>
                        <div className="data-group">
                            <p className="data-label">Date Of Birth:</p><INPUT type="date" height='25px' width='400px' min_char={4} max_char={15} />
                        </div>
                        <div className="data-group">
                            <p className="data-label">Marital Status:</p>
                            <SELECT height='38px' width='400px' values={[
                                {value: 'single', text: 'Single'},
                                {value: 'merried', text: 'Merried'}
                            ]}/>
                        </div>
                        <h6
                       style={{
                            ...colorscheme.elements.textSolid,
                            margin: '10px 0'
                        }}>-- Contact Information --</h6>
                        <div className="data-group">
                            <p className="data-label">Email:</p><INPUT type="email" height='25px' width='400px' min_char={4} max_char={15} />
                        </div>
                        <div className="data-group">
                            <p className="data-label">Phone Number:</p><INPUT type="number" height='25px' width='400px' min_char={4} max_char={15} />
                        </div>
                        <h6
                       style={{
                            ...colorscheme.elements.textSolid,
                            margin: '10px 0'
                        }}>-- Address --</h6>
                        <div className="data-group">
                            <p className="data-label">Country:</p>
                            <SELECT height='38px' width='400px'>
                                <option value="PH" selected>Philippines</option>
                                <option>Sandiat Centro</option>
                            </SELECT>
                        </div>
                        <div className="data-group">
                            <p className="data-label">Province:</p>
                            <SELECT height='38px' width='400px'>
                                <option>Sandiat West</option>
                                <option>Sandiat Centro</option>
                            </SELECT>
                        </div>
                        <div className="data-group">
                            <p className="data-label">City/Municipality:</p>
                            <SELECT height='38px' width='400px'>
                                <option>Sandiat West</option>
                                <option>Sandiat Centro</option>
                            </SELECT>
                        </div>
                        <div className="data-group">
                            <p className="data-label">Barangay:</p>
                            <SELECT height='38px' width='400px'>
                                <option>Sandiat West</option>
                                <option>Sandiat Centro</option>
                            </SELECT>
                        </div>
                        <div className="data-group">
                            <p className="data-label">Street:</p><INPUT height='25px' width='400px' min_char={4} max_char={15} />
                        </div>
                        <div className="data-group">
                            <p className="data-label">ZIP Code:</p>
                            <INPUT height='25px' width='400px' min_char={4} max_char={15} />
                        </div>
                        <h6
                       style={{
                            ...colorscheme.elements.textSolid,
                            margin: '10px 0 15px 0'
                        }}>-- Baptism --</h6>
                        <div className="data-group" style={{alignItems: 'flex-start'}}>
                            <p className="data-label" style={{marginTop: '9.5px'}}>Baptized?</p>
                            <span className="input-provider">
                                <YES_NO_SWITCH dispatcher={(data) => setIsBaptizedState(data)} />
                                <div className="data-group-hidden">
                                    <div className="data-group">
                                        <p className="data-label">On (Date Of Baptism):</p><INPUT type="date" height='25px' width='400px' min_char={4} max_char={15} disabled={!isBaptized? true : false} />
                                    </div>
                                    <div className="data-group" style={{alignItems: 'flex-start', marginTop: '10px'}}>
                                        <p className="data-label">From (Name of Church):</p>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            flex: '0 1 408px',
                                            height: 'fit-content'
                                        }}>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flex: '0 1 100%',
                                            }}>
                                                <input style={{margin: 0}} type="radio" id="html" name="fav_language" value="HTML" disabled={!isBaptized? true : false} />
                                                <p className="text-light" style={{...colorscheme.elements.textLight, fontSize: '11px', marginLeft: '5px'}}>Chrurch of Christ (Roxas)</p>
                                            </span>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flex: '0 1 100%',
                                                marginTop: '5px'
                                            }}>
                                                <input style={{margin: 0}} type="radio" id="html" name="fav_language" value="HTML" disabled={!isBaptized? true : false} />
                                                <p className="text-light" style={{...colorscheme.elements.textLight, fontSize: '11px', marginLeft: '5px'}}>Specify</p>
                                            </span>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                flex: '0 1 100%',
                                                marginTop: '5px'
                                            }}>
                                                <INPUT type="text" height='25px' width='100%' min_char={4} max_char={15} placeholder="Specify Church here." disabled={true} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className="baptism-info-area">
                            
                        </div>
                    </div>
                    <div className="right-area text-solid">
                       
                       <h6
                       style={{
                            ...colorscheme.elements.textSolid,
                        }}>Upload Picture</h6>
                       <AVATAR_UPLOADER />
                    </div>
                    <div className="btn-container">
                        <span className="btn btn-edit"
                        style={{
                            ...colorscheme.elements.btnEdit,
                            marginRight: '5px'
                        }}>
                            Clear Form
                        </span>
                        <span className="btn btn-primary"
                        style={{
                            ...colorscheme.elements.btnPrimary
                        }}
                        onClick={() => {
                            
                        }}>
                            Next
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </>
}

export default MEMBERSHIP_FORM;