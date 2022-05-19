import '../Stylesheets/Dropdown_body.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

//Custom Entities
import Image from '../Custom_entities/image';

//Components
import COLOR_SCHEME_PICKER from './Color_scheme_picker';

const DROPDOWN_BODY = () => {
    //States
    const [vissible, switchVissible] = useState('categories');
    const [category, switchCategory] = useState(false);
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //Refs
    const categories = useRef(null);
    const links = useRef(null);
 
    useEffect(() => {
        if(vissible == 'categories') {
            $(categories.current).css({marginLeft: 0});
            $(categories.current).css({height: 'fit-content'});
            $(links.current).css({marginRight: '-100%'});
            $(links.current).css({height: 0});
        } else {
            $(links.current).css({height: 'fit-content'});
            $(categories.current).css({marginLeft: '-100%'});
            $(links.current).css({marginRight: 0});
            $(categories.current).css({height: 0});
        }
    }, [vissible])
    return <>
    <div className="dropdown-body-container" ref={categories}>
        <div className="container-heading global-border"
        style={{
            ...colorscheme.elements.globalBorder
        }}>
            <div className="avatar-border shadow-effect global-border"
            style={{
                ...colorscheme.elements.shadowEffect,
                ...colorscheme.elements.globalBorder
            }}>
                <Image src="assets/images/apple.jpg" minW="45px" maxW="45px" round />
            </div>
            <span className="admin-name">
                <p style={{...colorscheme.elements.textSolid, fontWeight: '600'}}>Apple Jane De Guzman</p>
                <span>
                    <p style={{width: '0px', height: '0px', border: `3.2px solid ${colorscheme.elements.textLight.color}`, borderRadius: '50%', marginRight: '5px', backgroundColor: colorscheme.elements.textLight.color}}></p>
                    <p style={{...colorscheme.elements.textLight, fontSize: '11.5px'}}>Super Admin</p>
                    <p style={{width: '0px', height: '0px', border: `3.2px solid ${colorscheme.elements.textLight.color}`, borderRadius: '50%', marginRight: '5px', marginLeft: '5px', backgroundColor: colorscheme.elements.textLight.color}}></p>
                    <p style={{...colorscheme.elements.textPrimary, fontSize: '11.5px'}}>AjDeeguzman</p>
                </span>
            </span>
        </div>
        <div className="dropdown-body">
            <div className="dropdown-item" style={{...colorscheme.elements.textSolid}} 
            onClick={() => {
                switchVissible('links');
                switchCategory('Profile');
            }}>
                <span>
                    <i className="fas fa-user" style={{...colorscheme.elements.toggleBackground}}></i>
                    <p>Profile</p>
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
            <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}
            onClick={() => {
                switchVissible('links');
                switchCategory('Admin & Permissions')
            }}>
                <span>
                    <i className="fas fa-user-cog" style={{...colorscheme.elements.toggleBackground}}></i>
                    <p>Admin & Permissions</p>
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
            <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}
            onClick={() => {
                switchVissible('links');
                switchCategory('Log In & Security');
            }}>
                <span>
                    <i className="fas fa-user-lock" style={{...colorscheme.elements.toggleBackground}}></i>
                    <p>Log In & Security</p>
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
            <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}
            onClick={() => {
                switchVissible('links');
                switchCategory('Color Scheme')
            }}>
                <span className="color-scheme global-border" style={{...colorscheme.elements.globalBorder}}>
                    <i className="fas fa-palette" style={{...colorscheme.elements.toggleBackground}}></i>
                    <p>Color Scheme</p>
                    <i className="fas fa-chevron-right"></i>
                </span>
            </div>
            <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}
            onClick={() => {
                switchVissible('links');
            }}>
                <Link to='/edit/profile'>
                    <i className="fas fa-sign-out-alt" style={{...colorscheme.elements.toggleBackground}}></i>
                    <p>Log Out</p>
                </Link>
            </div>
        </div>    
    </div>
    <div className="dropdown-body-container links" ref={links}>
        <div className="container-heading"
        style={{
            padding: '0 10px',
            ...colorscheme.elements.textSolid
        }}>
            <i className="fas fa-arrow-left icon-toggle" style={{marginRight: '15px', fontSize: '18px'}}
             onClick={() => {
                switchVissible('categories');
            }}></i>
            <p style={{fontSize: '19px', fontWeight: '600'}}>{category}</p>
        </div>
        <div className="dropdown-body">
            {
                category === 'Profile'? <>
                    <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}>
                        <Link to="/profile">
                            <i className="fas fa-user" style={{...colorscheme.elements.toggleBackground}}></i>
                            <p>View Profile</p>
                        </Link>
                    </div>
                    <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}>
                        <Link to="/edit-profile">
                            <i className="fas fa-user-cog" style={{...colorscheme.elements.toggleBackground}}></i>
                            <p>Edit Profile</p>
                        </Link>
                    </div>
                </> : ''
            }

            {
                category === 'Admin & Permissions'? <>
                    <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}>
                        <Link to="/profile">
                            <i className="fas fa-user" style={{...colorscheme.elements.toggleBackground}}></i>
                            <p>View Your Pirmissions</p>
                        </Link>
                    </div>
                    <div className="dropdown-item" style={{...colorscheme.elements.textSolid}}>
                        <Link to="/edit-profile">
                            <i className="fas fa-user-cog" style={{...colorscheme.elements.toggleBackground}}></i>
                            <p>View Admins & Status</p>
                        </Link>
                    </div>
                </> : ''
            }
            {
                category == 'Color Scheme'? <>
                    <COLOR_SCHEME_PICKER />
                </> : ""
            }
        </div>
    </div>    
    </>
}

export default DROPDOWN_BODY;