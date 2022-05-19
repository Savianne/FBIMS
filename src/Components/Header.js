import '../Stylesheets/Header.css';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

//Using Custom Entities
import Image from '../Custom_entities/image';

//Componets
import DROPDOWN_BODY from './Dropdown_body';

//Import Actions For Navbar State
import { closeNav, openNav } from '../State/actions/toggle-navbar';

const Header = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    const dropdown_state = useSelector(state => state.dropdownToggleReducer);
    const notif_state = useSelector(state => state.notificationToggleReducer);
    const messages_state = useSelector(state => state.messagesToggleReducer);
    const [isfocus, focus] = useState(false);

    const dispatch = useDispatch();

    //Refs
    const fixed_container = useRef(null);

    useEffect(() => {
        if(
            dropdown_state == "open" ||
            notif_state == "open" ||
            messages_state == "open"
        ) {
            $(fixed_container.current).fadeIn(300);
        } else {
            $(fixed_container.current).fadeOut(300);
        }
    }, [dropdown_state, notif_state, messages_state]);

    useEffect(() => {
        function toggleFixedContainer() {
            if(!isfocus) {
                messages_state == 'open' && dispatch({type: 'MESSAGES_CLOSE'}); 
                notif_state == 'open' && dispatch({type: 'NOTIFICATIONS_CLOSE'});
                dropdown_state == 'open' && dispatch({type: 'DROPDOWN_CLOSE'});
            }
        }

        window.addEventListener('click', toggleFixedContainer);

        return function cleanUp() {
            window.removeEventListener('click', toggleFixedContainer);
        }
        
    });

    return (<>
    <header className="main-header">
        <div className="header-shadow"></div>
        <div className="header-content solid-container" style={{...colorscheme.elements.solidContainer}}>
            <MenuToggle />
            <Sitemap />
            <div className="admin">
                <Messages_toggle />
                <Notifications_toggle />
                <span className="admin-avatar">
                    <Image minW="35px" maxW="35px" round="true" src="assets/images/apple.jpg" /> 
                </span>
                <span className="icon-toggle" style={{...colorscheme.elements.iconToggle}}
                onClick={() => {
                    if(dropdown_state == 'close') dispatch({type: 'DROPDOWN_OPEN'});
                }}>
                    <i className="fas fa-angle-down normal" style={dropdown_state == 'open'? {...colorscheme.elements.active} : {...colorscheme.elements.normal}}></i>
                </span>
            </div>
        </div>
        <div className="fixed-container solid-container shadow-effect" 
        style={{
            ...colorscheme.elements.solidContainer, 
            ...colorscheme.elements.shadowEffect
        }} 
        ref={fixed_container}
        onMouseEnter={() => {
            focus(true);
        }}
        onMouseLeave={() => {
            focus(false);
        }}>
            {
                dropdown_state == 'open'? <DROPDOWN_BODY /> : ''
            }
            {
                notif_state == 'open'? <div>Notifications</div> : ''
            }
            {
                messages_state == 'open'? <div>Messages</div> : ''
            }
        </div>
    </header>
    </>)
}

const MenuToggle = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    const state = useSelector(state => state.toggleNavbarReducer);
    const dispatch = useDispatch();

    return (<>
    {//Use this Navbar for Large Scgreen readers with the minimum screen lenght of 750px
        state.nav == 'large'? <>
            <span className="menu-toggle-btn icon-toggle"
            style={state.state == 'open'? {...colorscheme.elements.iconToggle, ...colorscheme.elements.active} : {...colorscheme.elements.iconToggle, ...colorscheme.elements.normal}}
            onClick={() => {
                (state.state == 'open')? dispatch(closeNav()) : dispatch(openNav());
            }}>
                {
                    state.state == 'open'? <i className="fas fa-outdent"></i> : <i className="fas fa-bars"></i>
                }
            </span>        
        </> : ''
    }
    {//Use this Navbar for small screen readers with the maximum screem lenght of 750px
        state.nav == 'small'? <>
            <span className="menu-toggle-btn icon-toggle" style={{...colorscheme.elements.iconToggle, ...colorscheme.elements.normal}}>
                <i className="fas fa-bars" onClick={() => {
                dispatch(openNav());
            }}></i>
            </span>        
        </> : ''
    }
    </>)
}

const Notifications_toggle = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    const notif_state = useSelector(state => state.notificationToggleReducer);
    const dispatch = useDispatch();
    return (<>
    <div className="notif-toggle" 
    onClick={() => {
        if(notif_state == 'close') dispatch({type: 'NOTIFICATIONS_OPEN'});
    }}>
        <span className="icon-toggle normal" style={{...colorscheme.elements.iconToggle, ...colorscheme.elements.normal, position: 'relative'}}>
            <span className='counter'>8</span>
            <i className="far fa-bell"></i>
        </span>
    </div>
    </>)
}

const Messages_toggle = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    const messages_state = useSelector(state => state.messagesToggleReducer);
    const dispatch = useDispatch();
    return (<>
    <div className="messages-toggle" 
    onClick={() => {
        if(messages_state == 'close') dispatch({type: 'MESSAGES_OPEN'});
    }}>
        <span className="icon-toggle normal" style={{...colorscheme.elements.iconToggle, ...colorscheme.elements.normal, position: 'relative'}}>
            <span className='counter'>15</span>
            <i className="far fa-envelope"></i>
        </span>
    </div>
    </>)
}


const Sitemap = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    const [sitemap, setMap] = useState('');
    useEffect(() => {
        switch(window.location.pathname) {
            case '/dashboard':
                setMap(<span className="text-solid" style={{...colorscheme.elements.textSolid}}><a href='/dashboard'>/ dashboard</a></span>);
                break;
            case '/members':
                setMap(<span className="text-solid" style={{...colorscheme.elements.textSolid}}><a href='/dashboard'>/ dashboard</a> / <a href='/members'>members</a> </span>);
                break; 
        }
    }, [window.location.pathname]);
    
    return(<>
    <span className="sitemap"  style={{...colorscheme.elements.textSolid}}>
        <span className="icon-toggle normal" style={{...colorscheme.elements.iconToggle, ...colorscheme.elements.normal}}>
            <i className="fas fa-sitemap"></i>
        </span>
        {sitemap}
    </span>
    </>)
}
export default Header;