// import './Ministry.css';
import $ from 'jquery';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
//Components
import GROUP_LIST from './Group_list';
import RECORDS_LENGTH from './Records_length';
import WARNING_MESSAGE from './Warning_Message';

const FAMILIES_GROUP = ({tab, switchTab}) => {
    const default_list = [
        {
            title: 'Useher',
            avatar: 'apple.jpg',
            members: [
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    // avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    // avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    avatar: 'apple.jpg'
                }
                
            ]
        },
        {
            title: 'Radio',
            members: []
        },
        {
            title: 'Useher',
            avatar: 'apple.jpg',
            members: [
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    // avatar: 'apple.jpg'
                },
            ]
        },
        {
            title: 'Useher',
            avatar: 'apple.jpg',
            members: [
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    // avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    // avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    // avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    // avatar: 'apple.jpg'
                },
                {
                    f_name: 'Apple Jane',
                    l_name: 'De Guzman',
                    m_name: 'Libao',
                    member_uid: '1233',
                    avatar: 'apple.jpg'
                }
                
            ]
        },
        
    ]

    // States
    const [ministry_list, updateList] = useState([]);
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    
    useEffect(() => {
        updateList(default_list);
    },[]);

    return(<>
    <div className="scrolling-content">
        <div className="tab-container families">
            <header className="header_1 global-border" style={{...colorscheme.elements.globalBorder}}>
                <select name="list-cat" defaultValue={tab} className="solid-container text-solid list-categories" style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textSolid}} onChange={(e) => switchTab(e.target.value)}>
                    <option value="masterlist">Masterlist</option>
                    <option value="families">Families</option>
                    <option value="ministry">Ministry</option>
                    <option value="organizations">Organizations</option>
                    <option value="workers">Workers</option>
                </select>
            
                <div className="toggle-group">
                    <span className="toggle toggle-background normal add-new-toggle" style={{...colorscheme.elements.toggleBackground, ...colorscheme.elements.normal}}>
                        <i className="fas fa-user-plus"></i><p className="toggle-text">New Member</p>
                    </span>
                    <span className="toggle toggle-background normal add-new-togglechan" style={{...colorscheme.elements.toggleBackground, ...colorscheme.elements.normal}}>
                        <i className="fas fa-sync-alt"></i><p className="toggle-text">Refresh</p>
                    </span>
                </div>
            </header>
            <GROUP_LIST data={ministry_list} color="#e91e63" />
        </div>
    </div>
    <div className="fixed-aside">
        <WARNING_MESSAGE message="10 Members are not a member of any Families!" />
        <RECORDS_LENGTH length={4} />
    </div>
    </>);
}


export default FAMILIES_GROUP;