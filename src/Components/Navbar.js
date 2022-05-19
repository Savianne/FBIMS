import '../Stylesheets/Navbar.css';
import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

//Import Actions for Global state
import { switchToLargeNav, switchToSmallNav, closeNav } from '../State/actions/toggle-navbar';

//Using Custom Entities
import Image from '../Custom_entities/image';

const Navbar = () => {
    const [currentPath, changePath] = useState(window.location.pathname);
    const [nav_type, changeType] = useState(window.innerWidth > 750? 'large' : 'small');
    const state = useSelector(state => state.toggleNavbarReducer);
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    const dispatch = useDispatch();

    //Reference
    const dnav = useRef(null);
    const mnav= useRef(null);

    useEffect(() => {
        window.onpopstate = () => {
          changePath(window.location.pathname);  
        }

        $(window).resize(() => {
            if(window.innerWidth > 750) {
                changeType('large');
            } else {
                changeType('small');
            }
        })
    });

    useEffect(() => {
        if(state.state == 'open') {
            state.nav == 'large'? $(dnav.current).css({'width': '220px'}) : $(mnav.current).fadeIn(300);
        } else {
            state.nav == 'large'? $(dnav.current).css({'width': '100px'}) : $(mnav.current).fadeOut(300);
        }
    }, [state]);

    useEffect(() => {
        nav_type == 'large'? dispatch(switchToLargeNav()) : dispatch(switchToSmallNav());
    }, [nav_type])
    return(<>
    {
        state.nav == 'large'? <>
        <nav className="main-navigation solid-container" ref={dnav} style={{...colorscheme.elements.solidContainer}}> 
            <div className="nav-head">
                <div className="icon-container">
                    <Image minW="40px" maxW="120px" style={{padding: '0 15px'}} src="assets/images/fbims-logo-v1.png" />
                </div>
                {/* <div className="icon-container" style={{justifyContent: 'left'}}>
                    <Image maxW="85px" src="assets/images/fbims-logo-v1.png" />
                </div> */}
                {/* <Image maxW='100px' src="assets/images/coc-fbims-v8-green.png" /> */}
                {/* <p className="system-name" style={{...colorscheme.elements.systemName}}>MiAS_</p> */}
                {/* <Image minW="100px" maxW="45px" src="assets/images/fbims-logo-v1.png" /> */}
            </div>
            <div className="nav-link" onClick={() => changePath('/dashboard')}>
                <NavLink path="/dashboard" current_path={currentPath} name="Dashboard" icon="fas fa-tachometer-alt"/>
            </div>
            <div className="nav-link" onClick={() => changePath('/members')}>
                <NavLink path="/members" current_path={currentPath} name="Members" icon="fas fa-users"/>
            </div>
            <div className="nav-link" onClick={() => changePath('/calendar')}>
                <NavLink path="/calendar" current_path={currentPath} name="Calendar" icon="fas fa-calendar"/>
            </div>
            <div className="nav-link" onClick={() => changePath('/attendance')}>
                <NavLink path="/attendance" current_path={currentPath} name="Attendance" icon="fas fa-user-clock"/>
            </div>
            <div className="nav-link" onClick={() => changePath('/statistics')}>
                <NavLink path="/statistics" current_path={currentPath} name="Statistics" icon="fas fa-chart-line"/>
            </div>
        </nav>
        </> : ''
    }
    {
        state.nav == 'small'? <>
        <div className="mobile-nav-container" style={{backgroundColor: colorscheme.elements.blurBgEffect.backgroundColor}} 
        onClick={() => {
            dispatch(closeNav());
        }} ref={mnav}>
            <nav className="solid-container" style={{...colorscheme.elements.solidContainer}}>
                <div className="nav-head">
                    {/* <div className="icon-container">
                        <Image minW="45px" maxW="45px" src="assets/images/rcoc-mias-logo.png" />
                    </div> */}
                    {/* <p className="system-name" style={{...colorscheme.elements.systemName}}>MiAS_</p> */}
                    <div className="icon-container">
                    <Image minW="40px" maxW="120px" style={{padding: '0 15px'}} src="assets/images/fbims-logo-v1.png" />
                </div>
                </div>
                <div className="nav-link" onClick={() => changePath('/dashboard')}>
                    <NavLink path="/dashboard" current_path={currentPath} name="Dashboard" icon="fas fa-tachometer-alt"/>
                </div>
                <div className="nav-link" onClick={() => changePath('/members')}>
                    <NavLink path="/members" current_path={currentPath} name="Members" icon="fas fa-users"/>
                </div>
                <div className="nav-link" onClick={() => changePath('/calendar')}>
                    <NavLink path="/calendar" current_path={currentPath} name="Calendar" icon="fas fa-calendar"/>
                </div>
                <div className="nav-link" onClick={() => changePath('/attendance')}>
                    <NavLink path="/attendance" current_path={currentPath} name="Attendance" icon="fas fa-clipboard-check"/>
                </div>
                <div className="nav-link" onClick={() => changePath('/statistics')}>
                    <NavLink path="/statistics" current_path={currentPath} name="Statistics" icon="fas fa-chart-line"/>
                </div>
            </nav>
        </div>            
        </> : ''
    }
    </>)
}


const NavLink = ({icon, name, path, current_path}) => {
    const indicator_bar = useRef(null);
    const [active, setState] = useState(false);
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    useEffect(() => {
        window.location.pathname == current_path && window.location.pathname == path? setState(true) : setState(false);
    })

    useEffect(() => {
        if(active) {
            $(indicator_bar.current).css({height: '25px'});
        } else {
            $(indicator_bar.current).css({height: '0'});
        }
    }, [active]);

    return(<>
        <Link to={path}>
            <span className="icon-container">
                <i className="active-indicator-bar" ref={indicator_bar} style={{...colorscheme.elements.activeIndicatorBar}}></i>
                <span className="icon-toggle toggle-background" style={active? {...colorscheme.elements.toggleBackground, ...colorscheme.elements.active } : {...colorscheme.elements.toggleBackground, ...colorscheme.elements.normal}}>
                    <i className={icon}></i>
                </span>
            </span>
            <p className="nav-item-txt" style={active? {...colorscheme.elements.active} : {...colorscheme.elements.normal}}>{name}</p>
        </Link>
    </>)
}

export default Navbar;