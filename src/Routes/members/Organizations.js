// import './Ministry.css';
import $ from 'jquery';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
//Components
import GROUP_LIST from './Group_list';
import RECORDS_LENGTH from './Records_length';
import WARNING_MESSAGE from './Warning_Message';
import COUNTER_BOX from '../../Components/Counter_box';
import PIECHART from '../../Components/PieChart';


const ORGANIZATIONS_GROUP = ({tab, switchTab}) => {
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
                },{
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
        <div className="tab-container organizations">
            <header className="header_1 global-border" style={{...colorscheme.elements.globalBorder}}>
                <select name="list-cat" defaultValue={tab} className="solid-container text-solid list-categories" style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textSolid}} onChange={(e) => switchTab(e.target.value)}>
                    <option value="masterlist">Masterlist</option>
                    <option value="families">Families</option>
                    <option value="ministry">Ministry</option>
                    <option value="organizations">Organizations</option>
                    <option value="workers">Workers</option>
                </select>
            
                <div className="toggle-group">
                    <span className="btn btn-primary add-new-toggle" style={{...colorscheme.elements.btnPrimary}}
                    onClick={() => alert('Add a Ministry')}>
                        <i className="fas fa-user-plus"></i><p className="toggle-text">Add record</p>
                    </span>
                    <span className="btn btn-edit add-new-toggle" style={{...colorscheme.elements.btnEdit}}>
                        <i className="fas fa-sync-alt"></i><p className="toggle-text">Refresh</p>
                    </span>
                </div>
            </header>
            <div className="aside-content-area">
                <WARNING_MESSAGE message="16 Members has a outdated contacts information!" />
                <COUNTER_BOX label='All Organizations' color="#00d157" count={14} icon="fas fa-users" />
                <PIECHART 
                    label='No. Of Members with and without a Organization' 
                    labels={['With Organization', 'W/O any Organization']} 
                    dataSet={[656, 250]} 
                    dataColor={[
                        '#00d157',
                        'rgb(0 208 135)',
                    ]} />
            </div>
            <div className="tab-content">
                <GROUP_LIST data={ministry_list} color="#00d157" />
            </div>
        </div>
    </div>
    {/* <div className="fixed-aside">
        <WARNING_MESSAGE message="50 Members are not a member of any Organizations!" />
        <RECORDS_LENGTH length={4} />
    </div> */}
    </>);
}


export default ORGANIZATIONS_GROUP;