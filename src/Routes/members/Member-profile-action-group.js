import { useState } from 'react';
import './Member-profile-action-group.css';
import { useSelector, useDispatch } from 'react-redux';

//Custom Entities
import Image from '../../Custom_entities/image';

const PROFILE_ACTION_GROUP = ({information}) => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    
    return <div className="member-profile-action-group solid-container text-light"
    style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textLight}}>
        {
            information? <>
                <span className="avatar-holder solid-container"
                style={{...colorscheme.elements.solidContainer}}>
                    <Image src={`assets/images/${information.avatar}`} maxW="110px" round="true" />    
                </span>
                <p className="member">{information.f_name} {information.m_name[0]}. {information.l_name}</p>  
                <div className="gender-row">{information.gender}</div>      
                <div className="membership-row">{information.role}</div>
            </> : <>
            <i className="fas fa-user"></i>
            <p className="warning" style={{...colorscheme.elements.warning}}>Please Select item from the list</p>
            </>
        }
        <div className="action-group solid-container"
        style={{...colorscheme.elements.solidContainer}}>
            <span className={information? "btn btn-delete" : "btn btn-delete btn-disabled"} 
            style={{...colorscheme.elements.btnDelete}}
            onClick={() => {
                
            }}>Remove</span>
            <span className={information? "btn btn-edit" : "btn btn-edit btn-disabled"} 
            style={{...colorscheme.elements.btnEdit}}
            onClick={() => {
                
            }}>Edit</span>
            <span className={information? "btn btn-primary" : "btn btn-primary btn-disabled"} 
            style={{...colorscheme.elements.btnPrimary}}
            onClick={() => {
                
            }}>More Info</span>
        </div>
    </div>    
}

export default PROFILE_ACTION_GROUP;