import './Masterlist.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useReducer, useRef, useState } from 'react';
import $ from 'jquery';
import compare from 'just-compare';

//Custom Components
import Image from '../../Custom_entities/image';
import Custom_Select from '../../Custom_entities/Custom_select';

//Child component
import Masterlist_table from './Masterlist_table';
import PROFILE_ACTION_GROUP from './Member-profile-action-group';
import COUNTER_BOX from '../../Components/Counter_box';
import PIECHART from '../../Components/PieChart';
import MORE_ACTION_GROUP from './More-actions-group';
import WARNING_MESSAGE from './Warning_Message';
import MEMBERSHIP_FORM from './Membership_form';

const MASTERLIST_GROUP = ({tab, switchTab}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    // States
    const [filter_set, filter_set_state] = useState(false)//Toggle
    const [membership_form, updateMembershipFormState] = useState(false);
    const [table_data, updateData] = useState([]);
    const [table_settings, setTableSettings] = useState(false);
    const [table_field, set_field] = useState(false);
    const [filters_payload, updateFilterPayload] = useState(false);
    const [member, setMember] = useState(null);


    const test_table_data = [
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                // {title: 'Kababaihan', avatar: 'apple.jgp'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Macedonian'},
                {title: 'Radio'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Mark Niño',
            m_name: 'Quilonio',
            l_name: 'Baylon',
            gender: 'Male',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Usher'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Danielle',
            m_name: 'Ramos',
            l_name: 'Macabitas',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Kabataan'},
            ],
            ministry: [
                {title: 'Radio'},
            ], 
            marked: false
        },
        
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Usher'},
                {title: 'Radio'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                // {title: 'Kababaihan', avatar: 'apple.jgp'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Macedonian'},
                {title: 'Radio'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Mark Niño',
            m_name: 'Quilonio',
            l_name: 'Baylon',
            gender: 'Male',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Usher'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Danielle',
            m_name: 'Ramos',
            l_name: 'Macabitas',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Kabataan'},
            ],
            ministry: [
                {title: 'Radio'},
            ], 
            marked: false
        },
        
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Usher'},
                {title: 'Radio'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                // {title: 'Kababaihan', avatar: 'apple.jgp'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'},
                // {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Macedonian'},
                {title: 'Radio'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Mark Niño',
            m_name: 'Quilonio',
            l_name: 'Baylon',
            gender: 'Male',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Usher'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Danielle',
            m_name: 'Ramos',
            l_name: 'Macabitas',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Kabataan'},
            ],
            ministry: [
                {title: 'Radio'},
            ], 
            marked: false
        },
        
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                
            ], 
            marked: false
        },
        {
            member_idn: '1234567891',
            f_name: 'Apple Jane',
            m_name: 'Libao',
            l_name: 'De Guzman',
            gender: 'Female',
            status: 'Single',
            d_o_b: '1996-06-26',
            email: 'ajdeeguzman@gamil.com',
            phone: '09128486021',
            role: 'Worker',
            address: 'Brgy. Arellano, Quezon Isabela Philippines',
            avatar: 'apple.jpg',
            organizations: [
                {title: 'Youth Organizations'},
                {title: 'Young Adult'},
                {title: 'Kalalakihan', avatar: 'apple.jgp'},
                {title: 'Kababaihan', avatar: 'apple.jgp'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'},
                {title: 'Kabataan'}
            ],
            ministry: [
                {title: 'Usher'},
                {title: 'Radio'},
                {title: 'Macedonian'}
            ], 
            marked: false
        },
    ];

    useEffect(() => {
        updateData(test_table_data);
    }, []);

    useEffect(() => {
        console.log(filters_payload)
    }, [filters_payload]);

    return(<>
    <MEMBERSHIP_FORM state={membership_form} dispatchState={(state) => updateMembershipFormState(state)} />
    <div className="scrolling-content">
        <div className="tab-container members">
            <header className="header_1 solid-container" style={{...colorscheme.elements.solidContainer}}>
                <select name="list-cat" defaultValue={tab} className="solid-container text-solid list-categories" style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textSolid}} onChange={(e) => switchTab(e.target.value)}>
                    <option value="masterlist">Masterlist</option>
                    <option value="families">Families</option>
                    <option value="ministry">Ministry</option>
                    <option value="organizations">Organizations</option>
                    <option value="workers">Workers</option>
                </select>
            
                <div className="toggle-group">
                    <span className="btn btn-primary add-new-toggle" style={{...colorscheme.elements.btnPrimary}}
                    onClick={() => updateMembershipFormState(true)}>
                        <i className="fas fa-user-plus"></i><p className="toggle-text">Add record</p>
                    </span>
                    <span className="btn btn-edit add-new-toggle" style={{...colorscheme.elements.btnEdit}}>
                        <i className="fas fa-sync-alt"></i><p className="toggle-text">Refresh</p>
                    </span>
                </div>
            </header>
            <div className="aside-content-area">
                <WARNING_MESSAGE message="16 Members has a outdated contacts information!" />
                <COUNTER_BOX label='Total Members' count={568} icon="fas fa-users" />
                <PIECHART 
                    label='No. Of Baptised and Not Baptize Members' 
                    labels={['Baptized', 'NOt Batized']} 
                    dataSet={[256, 467]} 
                    dataColor={[
                        'rgb(55 226 46)',
                        'rgb(0 208 135)',
                    ]} />
            </div>
            <div className="tab-content">
                <header className="header_2 solid-container" style={{...colorscheme.elements.solidContainer}}>
                    {/* <Custom_Select /> */}
                    <MANAGE_FILTER state={filter_set}
                    dispatchState={(state) => {
                        filter_set_state(state);
                    }} 
                    dispatchPayload={(filters => updateFilterPayload(filters))} />

                    <div className="toggle-group">

                        <TableSettings  
                        dispatchPayload={(payload) => {
                            setTableSettings(payload);
                        }} 
                        />

                        <ManageTableColumn
                        dispatchPayload={(payload) => {
                            set_field(payload);
                        }}
                        />
                        
                        <MORE_ACTION table_data={table_data}/>
                    </div>
                </header>
                
                <Masterlist_table 
                    table_data={table_data} 
                    table_field={table_field}
                    view={table_settings.table_view} 
                    name_format={table_settings.name_format} 
                    dispatchMember={(member) => setMember(member)} 
                    dispatchData={(data) => {
                        // console.log(data);
                        updateData(data);
                        console.log(table_data)
                    }
                }/> 
                {
                    table_data.length > 0? <>
                    <div className="pagination-control-container">
                        <div className="pagination">
                            <p className="text-light" style={{...colorscheme.elements.textLight}}>Page 1 out of 3 pages</p>
                            <span className="btn btn-default" style={{...colorscheme.elements.btnDefault}}>
                                <p>Prev</p>
                            </span>
                            <span className="page-number solid-container text-solid" style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textSolid}}>1</span>
                            <span className="btn btn-default" style={{...colorscheme.elements.btnDefault}}>
                                <p>Next</p>
                            </span>
                        </div>
                    </div>
                    </> : ''
                }                   
            </div>
        </div>
    </div>
    {/* <div className="fixed-aside">
        <WARNING_MESSAGE message="16 Members has a outdated contacts information!" />
        <RECORDS_LENGTH length={16} />
        <COUNTER_BOX label='Total Members' count={568} />
        <PROFILE_ACTION_GROUP information={member} />
        <MORE_ACTION_GROUP table_data={table_data} />
    </div> */}
    </>);
}

const MORE_ACTION = ({table_data}) => {
    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //States
    const [state, switchState] = useState(false);
    const [isfocus, focus] = useState(false);
    const [onview, switchView] = useState(false); 
    const [marked_items, updateMarkedItems] = useState([]);

     // Reference
     const more_action_ref = useRef(null);

     useEffect(() => {
        const filtered_marked_item = table_data.filter((item) => item.marked? true : false);
        updateMarkedItems(filtered_marked_item);
    }, [table_data]);

     useEffect(() => {
        if(state) {
            $(more_action_ref.current).fadeIn(300);
        } else {
            $(more_action_ref.current).fadeOut(300);
        }
    }, [state]);

    useEffect(() => {
        function toggleTableSettings() {
            if(!isfocus) {
                state && switchState(false); 
            }
        }

        window.addEventListener('click', toggleTableSettings);

        return function cleanUp() {
            window.removeEventListener('click', toggleTableSettings);
        }
        
    });

    return <>
        <span className="icon-toggle more_action"
        style={state? 
            {...colorscheme.elements.iconToggle, ...colorscheme.elements.active} : 
            {...colorscheme.elements.iconToggle,  ...colorscheme.elements.toggleBackground, ...colorscheme.elements.normal}
        }
        onClick={() => {
            if(state) {
                switchState(false);
            } else {
                switchView(true);
                switchState(true);
            }}
        }>
            {
                state === false && marked_items.length > 0?  <span className='counter'>{marked_items.length}</span> : ''
            }
            
            <i className="fas fa-ellipsis-v"></i>
        </span>
        {
            onview? <>
                <div className="more_action_container solid-container text-light shadow-effect" ref={more_action_ref}
                style={{
                    ...colorscheme.elements.solidContainer, 
                    ...colorscheme.elements.textLight, 
                    ...colorscheme.elements.shadowEffect
                }}
                onMouseEnter={() => {
                    focus(true);
                }}
                onMouseLeave={() => {
                    focus(false);
                }}>
                    <MORE_ACTION_GROUP table_data={table_data} marked={marked_items}/>
                </div>
            </> : ''
        }
    </>
}

const TableSettings = ({dispatchPayload}) => {
    const dispatch = useDispatch();

    // Default States
    const defaultSettings = {
        name_format: 'LFM',
        sort_by: 'name',
        order: 'A',
        limit: '20',
        table_view: 'CUI',
    }

    //Global State
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    //States
    const [state, switchState] = useState(false);
    const [isfocus, focus] = useState(false);
    const [onview, switchView] = useState(false);
    const [table_settings, setTableSettings] = useState({...defaultSettings});
    const [new_table_settings, updateNewTableSettings] = useState({...table_settings});

    // Reference
    const table_settings_ref = useRef(null);

    useEffect(() => {
        if(state) {
            $(table_settings_ref.current).fadeIn(300);
        } else {
            if(!compare(table_settings, new_table_settings)) {
                //This Dispatch is for Global State
                dispatch(
                    {
                        type: "ASK", 
                        payload: {
                            title: "Manage Table Settings", 
                            question: "Do you want to apply the changes?", 
                            yes: function() {setTableSettings({...new_table_settings})}, 
                            no: function() {
                                updateNewTableSettings({...table_settings});
                                switchView(false);
                            }
                        }
                    }
                );
            }
            $(table_settings_ref.current).fadeOut(300);
        }
    }, [state, table_settings])

    useEffect(() => {
        dispatchPayload({...table_settings});
    }, [table_settings]);

    useEffect(() => {
        function toggleTableSettings() {
            if(!isfocus) {
                state && switchState(false); 
            }
        }

        window.addEventListener('click', toggleTableSettings);

        return function cleanUp() {
            window.removeEventListener('click', toggleTableSettings);
        }
        
    });

    return <>
        <span className="icon-toggle toggle-background settings"
        style={state? 
            {...colorscheme.elements.iconToggle, ...colorscheme.elements.active} : 
            {...colorscheme.elements.iconToggle, ...colorscheme.elements.toggleBackground, ...colorscheme.elements.normal}
        }
        onClick={() => {
            if(state) {
                switchState(false);
            } else {
                switchView(true);
                switchState(true);
            }}
        }>
            <i className="fas fa-cog"></i>
        </span>
        {
            onview? <>
                <div className="table_settings_container solid-container text-light shadow-effect" ref={table_settings_ref}
                style={{
                    ...colorscheme.elements.solidContainer, 
                    ...colorscheme.elements.textLight, 
                    ...colorscheme.elements.shadowEffect
                }}
                onMouseEnter={() => {
                    focus(true);
                }}
                onMouseLeave={() => {
                    focus(false);
                }}>
                    <p className="header-text">Table Settings</p>
                    <div className="setting-item-group">
                        <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>Name Format:</strong>
                        <select className="text-light solid-container" name="name_format" id="name_format"
                        style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textLight}}
                        onChange={(e) => {
                            updateNewTableSettings({...new_table_settings, name_format: e.target.value});
                        }}>
                            <option selected={new_table_settings.name_format === 'FML'? true : false} value="FML">First Name first</option>
                            <option selected={new_table_settings.name_format === 'LFM'? true : false} value="LFM">Last Name first</option>
                        </select>
                    </div>
                    <div className="setting-item-group">
                        <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>Sort By:</strong>
                        <select className="text-light solid-container" name="sort_by" id="sort_by"
                        style={{
                            ...colorscheme.elements.solidContainer, 
                            ...colorscheme.elements.textLight
                        }}
                        onChange={(e) => {
                            updateNewTableSettings({...new_table_settings, sort_by: e.target.value});
                        }}>
                            <option selected={new_table_settings.sort_by === 'name'? true : false} value="name">Name</option>
                            <option selected={new_table_settings.sort_by === 'time'? true : false} value="time">Time</option>
                        </select>
                    </div>
                    <div className="setting-item-group">
                        <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>Order:</strong>
                        <select className="text-light solid-container" name="order" id="order"
                        style={{
                            ...colorscheme.elements.solidContainer, 
                            ...colorscheme.elements.textLight
                        }}
                        onChange={(e) => {
                            updateNewTableSettings({...new_table_settings, order: e.target.value});
                        }}>
                            <option selected={new_table_settings.order === 'A'? true : false} value="A">Ascending</option>
                            <option selected={new_table_settings.order === 'D'? true : false} value="D">Descending</option>
                        </select>
                    </div>
                    <div className="setting-item-group">
                        <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>Entry Limit:</strong>
                        <select className="text-light solid-container" name="limit" id="limit"
                        style={{
                            ...colorscheme.elements.solidContainer, 
                            ...colorscheme.elements.textLight
                        }}
                        onChange={(e) => {
                            updateNewTableSettings({...new_table_settings, limit: e.target.value});
                        }}>
                            <option selected={new_table_settings.limit === '10'? true : false} value="10">10</option>
                            <option selected={new_table_settings.limit === '20'? true : false} value="20">20</option>
                            <option selected={new_table_settings.limit === '30'? true : false} value="30">30</option>
                            <option selected={new_table_settings.limit === '40'? true : false} value="40">40</option>
                        </select>
                    </div>
                    <div className="setting-item-group">
                        <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>Table View:</strong>
                        <select className="text-light solid-container" name="table_view" id="table_view" 
                        style={{
                            ...colorscheme.elements.solidContainer, 
                            ...colorscheme.elements.textLight
                        }}
                        onChange={(e) => {
                            updateNewTableSettings({...new_table_settings, table_view: e.target.value});
                        }}>
                            <option selected={new_table_settings.table_view === 'CUI'? true : false} value="CUI">Creative UI</option>
                            <option selected={new_table_settings.table_view === 'EXCEL'? true : false} value="EXCEL">Excel</option>
                        </select>
                    </div>
                    <div className="btn-container">
                        <span className={compare(table_settings, defaultSettings)? "btn btn-warning reset-btn btn-disabled" : "btn btn-warning reset-btn"} 
                        style={{...colorscheme.elements.btnWarning}}
                        onClick={() => {
                            setTableSettings({...defaultSettings});
                            updateNewTableSettings({...defaultSettings});
                        }}>Reset</span>
                        <span className={compare(table_settings, new_table_settings)? "btn btn-primary btn-disabled" : "btn btn-primary"} style={{...colorscheme.elements.btnPrimary}} 
                        onClick={() => {
                            setTableSettings({...new_table_settings})
                        }}>Apply Changes</span>
                    </div>
                </div>            
            </> : ""
        } 
    </>
}


const ManageTableColumn = ({dispatchPayload}) => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    const dispatch = useDispatch();

    //Default States
    const default_table_fields_view = {
        gender: false,
        status: false,
        d_o_b: false,
        email: false,
        phone: false,
        role: false,
        address: false,
        org: true,
        ministry: true,
    }

    //States
    const [state, switchState] = useState(false);
    const [table_field, set_field] = useState(default_table_fields_view);
    const [new_table_view, update_new_table_field] = useState({...table_field});
    const [isfocus, focus] = useState(false);
    const [onview, switchView] = useState(false);

    //Reference
    const table_field_options_ref = useRef(null);

    useEffect(() => {
        if(state) {
            $(table_field_options_ref.current).fadeIn(300);
        } else {
            if(!compare(table_field, new_table_view)) {
                //This Dispatch is for Global State
                dispatch(
                    {
                        type: "ASK", 
                        payload: {
                            title: "Manage Table Column", 
                            question: "Do you want to apply the changes?", 
                            yes: function() {set_field(new_table_view)}, 
                            no: function() {
                                update_new_table_field({...table_field});
                                switchView(false);
                            }
                        }
                    }
                );
            }
            $(table_field_options_ref.current).fadeOut(300);
        }
    }, [state]);

    useEffect(() => {
        dispatchPayload(table_field);
    }, [table_field]);

    useEffect(() => {
        function toggleManageTableColumn() {
            if(!isfocus) {
                state && switchState(false); 
            }
        }

        window.addEventListener('click', toggleManageTableColumn);

        return function cleanUp() {
            window.removeEventListener('click', toggleManageTableColumn);
        }
        
    });

    return <>
        <span className="icon-toggle toggle-background table-fields"
        style={state? 
            {...colorscheme.elements.iconToggle, ...colorscheme.elements.active} : 
            {...colorscheme.elements.iconToggle, ...colorscheme.elements.toggleBackground, ...colorscheme.elements.normal}
        }
        onClick={() => {
            if(state) {
                switchState(false);
            } else {
                switchView(true);
                switchState(true)
            }}
        }>
            <i className="fas fa-tasks"></i>
        </span>
        {
            onview? <>
                <div className="table-fields-list-container solid-container text-light shadow-effect" ref={table_field_options_ref}
                style={{
                    ...colorscheme.elements.solidContainer,
                    ...colorscheme.elements.textLight,
                    ...colorscheme.elements.shadowEffect
                }}
                onMouseEnter={() => {
                    focus(true);
                }}
                onMouseLeave={() => {
                    focus(false);
                }}>
                    <p className="header-text">Manage Table Columns</p>
                    <div className="list-item">
                        <input type="checkbox" checked disabled /> Member
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.role? true : false} id="role_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, role: e.target.checked}) } /> Role
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.org? true : false} id="org_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, org: e.target.checked})} /> Organizations
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.ministry? true : false} id="ministry_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, ministry: e.target.checked})} /> Ministry
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.gender? true : false} id="gender_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, gender: e.target.checked})} /> Gender
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.d_o_b? true : false} id="d_o_b_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, d_o_b: e.target.checked})} /> Date of Birth
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.status? true : false} id="status_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, status: e.target.checked})} /> Marital Status
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.phone? true : false} id="phone_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, phone: e.target.checked})} /> Phone
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.email? true : false} id="email_field"
                        onChange={(e) => update_new_table_field({...new_table_view, email: e.target.checked})} /> Email
                    </div>
                    <div className="list-item">
                        <input type="checkbox" defaultChecked={new_table_view.address? true : false}  id="address_field" 
                        onChange={(e) => update_new_table_field({...new_table_view, address: e.target.checked})} />Address
                    </div>
                    <div className="list-item">
                        <input type="checkbox" checked disabled /> Action
                    </div>
                    <div className="btn-container">
                        <span className={compare(table_field, new_table_view)? "btn btn-primary btn-disabled" : "btn btn-primary"} 
                        style={{...colorscheme.elements.btnPrimary}}
                        onClick={() => {
                            set_field(new_table_view);
                        }}>Apply Changes</span>
                    </div>
                </div>          
            </> : ''
        }
    </>
}

const MANAGE_FILTER = ({dispatchPayload}) => {
    function reducer(state, payload) {
        switch(payload.action) {
            case 'ADD':
                let new_item = [
                    payload.item,
                    ...state,
                ];
                return new_item;
            break;
            case 'EDIT':
                let edited = state.map((item) => {
                    return (item.id == payload.item.id)? payload.item : item;
                });

                return edited;
            break;
            case 'DELETE':
                let trimed = state.filter((item) => {
                    return item.id == payload.item.id? false : true;
                });

                return trimed;
            break;
        }
    }

    const default_fields = [
        {field: 'Admin', selected: false},
        {field: 'Ministry', selected: false},
        {field: 'Organization', selected: false},
        {field: 'Gender', selected: false},
        {field: 'Keyword', selected: false},
    ];

    const default_filters = [
        // {id: '1', field: 'Admin', operator: 'is not', value: '12334535'},
        // {id: '2', field: 'Ministry', operator: 'is', value: 'Usher'},
        // {id: '3', field: 'Gender', operator: 'is', value: 'Male'},
    ]

    //States
    const [state, updateState] = useState(false);
    const [fields, updateFields] = useState(default_fields);
    const [available_filters_count, updateCount] = useState(0);
    const [filters_list, dispatch] = useReducer(reducer, default_filters);
    const [new_filter, setState] = useState('onblur'); //Toggle
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    useEffect(() => {
        let used_fields = filters_list.map((item) => {return item.field});
        const updated_fields = fields.map((item) => {
            used_fields.includes(item.field)? item.selected = true : item.selected = false;
            return item;
        });
        updateFields(updated_fields);
        dispatchPayload(filters_list);
    }, [filters_list]);

    useEffect(() => {
        updateCount(fields.filter((item) => {return item.selected? false : true}).length);
    }, [fields]);

    return <>
    <div className="toggle filter-toggle solid-container toggle-background text-light"
    style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.toggleBackground, ...colorscheme.elements.textLight}}
    onClick={() => updateState(true)}>
        <i className="fas fa-filter filter-toggle-icn"></i>
        <p className="filters-text-count">{filters_list.length? filters_list.length : 'None'}</p>    
            <i className="fas fa-sort"></i>
            {/* <i className="fas fa-sliders-h"></i> */}
            {/* <i class="fas fa-sliders-h-square"></i> */}
    </div>
    {
        state? <div className="blur-bg-effect" style={{...colorscheme.elements.blurBgEffect}}>
            <div className="filters-settings-container solid-container"
            style={{...colorscheme.elements.solidContainer,}}>
                <div className="container-header">
                    <i className="fas fa-filter text-light"
                    style={{...colorscheme.elements.textLight, marginLeft: '10px', fontSize: '13px'}}></i>
                    <p className="header-label text-solid" style={{...colorscheme.elements.textSolid}}>Manage Filters</p>
                    <i className="fas fa-times close-toggle text-light icon-toggle"
                    style={{...colorscheme.elements.textLight}} 
                    onClick={() => updateState(false)}></i> 
                </div>  
                <div className="container-body">
                    <div className="filters-list text-light" style={{...colorscheme.elements.textLight}}>
                        {
                            new_filter == 'onfocused'? <CREATE_NEW_FILTER item_data={{id: Date.now(), field: fields.filter((item) => {return item.selected? false : true})[0].field, operator: 'is', value: ''}} available_filter={fields} dispatchPayload={(payload) => dispatch(payload)} dispatchState={(state) => setState(state)} /> : ''
                        }
                        {
                            filters_list.length? <>
                                {
                                    filters_list.map((item) => {
                                        return <FILTER_ITEM item_data={item} available_filter={fields} dispatchPayload={(payload) => dispatch(payload)} />
                                    })
                                }
                                <span className={available_filters_count? "btn btn-primary" : "btn btn-primary btn-disabled"} 
                                style={{...colorscheme.elements.btnPrimary}}
                                onClick={() => {
                                    if(new_filter == 'onblur' && available_filters_count) setState('onfocused'); 
                                }}>Set New Filter</span>
                                {available_filters_count? <p>{available_filters_count} more available filters</p> : <p>Consumed all filters!</p>} </> : <>
                                {new_filter == 'onblur'? <p className="no-filter-text text-light" style={{...colorscheme.elements.textLight}}>No Active Filters!</p> : ''} 
                                <span className="btn btn-centered btn-primary" 
                                style={{...colorscheme.elements.btnPrimary}}
                                onClick={() => {
                                if(new_filter == 'onblur' && available_filters_count) setState('onfocused'); 
                                }}>Set New Filter</span>
                            </>
                        }
                    </div>
                </div>
            </div> 
        </div> : ''
    }
    </>
}

const FILTER_ITEM = ({item_data, available_filter, dispatchPayload}) => {
    //States
    const [item_state, switchState] = useState('onblur');
    const colorscheme = useSelector(state => state.changeColorSchemeReducer); 

    useEffect(() => {
        if(item_state == 'onedit') {
            function blurItem(event) {
                if(!(event.target.dataset.family && event.target.dataset.family == item_data.id)) {
                    switchState('onblur');
                } 
            }
    
            window.addEventListener('click', blurItem);
    
            return function cleanUp() {
                window.removeEventListener('click', blurItem);
            }
        }
    }, [item_state]);
    
    return <>
    {
        item_state == 'onblur'? <div className="filter-item solid-container text-light toggle-background" 
        style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textLight, ...colorscheme.elements.toggleBackground}}>
            <p className="filter-description">
                {item_data.field == 'Admin'? item_data.operator == 'is'? `Added by: ${item_data.value}` : <>Added by: <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>not</strong> {item_data.value}</> : ''}   
                {item_data.field == 'Ministry'? item_data.operator == 'is'? `Ministry: ${item_data.value}` : <>Ministry: <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>not</strong> {item_data.value}</> : ''}
                {item_data.field == 'Organization'? item_data.operator == 'is'? `Organization: ${item_data.value}` : <>Organization: <strong className="text-solid" style={{...colorscheme.elements.textSolid}}>not</strong> {item_data.value}</> : ''} 
                {item_data.field == 'Gender'? `Gender: ${item_data.value}` : ''}
                {item_data.field == 'Keyword'? `Keywords: ${item_data.value}` : ''}
            </p>
            <i className="fas fa-edit action-toggle-edit icon-toggle" onClick={() => switchState('onedit')}></i>
            <i className="fas fa-minus-square action-toggle-remove icon-toggle" onClick={() => {
                dispatchPayload({action: 'DELETE', item: item_data});
            }}></i>
        </div> : ''
    }
    {
        item_state == 'onedit'? <NEW_FILTER_FORM item_data={item_data} available_filter={available_filter} dispatchState={(state) => switchState(state)} dispatchPayload={(payload) => dispatchPayload(payload)} /> : ''
    }
    </>
}

const CREATE_NEW_FILTER = ({item_data, available_filter, dispatchPayload, dispatchState}) => {
    useEffect(() => {
        
            function blurItem(event) {
                if(!(event.target.dataset.family && event.target.dataset.family == item_data.id)) {
                    dispatchState('onblur');
                } 
            }
    
            window.addEventListener('click', blurItem);
    
            return function cleanUp() {
                window.removeEventListener('click', blurItem);
            }
        
    }, []);
    return <>
    {
        <NEW_FILTER_FORM item_data={item_data} available_filter={available_filter} 
        dispatchState={(state) => {
            dispatchState(state);
        }} 
        dispatchPayload={(payload) => {
            if(payload.action == 'EDIT') payload.action = 'ADD';
            dispatchPayload(payload);
        }} />
    }
    </>
}

const NEW_FILTER_FORM = ({item_data, available_filter, dispatchState, dispatchPayload})  => {
    const admin = [
        {id: '12334534', name: 'Apple Jane'},
        {id: '12334535', name: 'Mark Nino'},
    ]

    const organizations = [
        {id: '12345', title: 'RCYO | Kabataan'},
        {id: '12346', title: 'RCYA | Young Adult'},
        {id: '12347', title: 'RCMO | Kalalakihan'},
        {id: '12348', title: 'RCFO | Kababaihan'},
    ];

    const ministry = [
        {id: '12349', title: 'Uhser'},
        {id: '12310', title: 'Radio'},
        {id: '12311', title: 'Documentation'},
    ]

    //State
    const [filter_data, updateFilterData] = useState(item_data);
    const [mutable_filter_data, mutateFilterData] = useState({...filter_data});
    const [ready, updateReadiness] = useState(Object.values(mutable_filter_data).includes('')? false : true);
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    useEffect(()=> {
        updateReadiness(Object.values(mutable_filter_data).includes('')? false : true);
    }, [mutable_filter_data]);

    useEffect(() => {
        mutateFilterData(filter_data);
    }, [filter_data])
    
    return <div className="filter-item scaleup solid-container text-solid" 
    style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textSolid}}
    data-family={filter_data.id} key={filter_data.id}>
        <div className="input-group" data-family={filter_data.id}>

            {/* FIELDS */}

            <select name="field" className="solid-container" 
            style={{...colorscheme.elements.solidContainer}}
            defaultValue={filter_data.field} data-family={filter_data.id}
            onChange={(e) => {
                if(e.target.value == item_data.field) {
                    updateFilterData(item_data);
                } else {
                    const new_filter_data = {
                        ...filter_data,
                        field: e.target.value,
                        operator: 'is',
                        value: '',
                    }
                    updateFilterData(new_filter_data);
                }
            }}>
                {
                    available_filter.map((item) => {
                        return item.field == filter_data.field || item.field == item_data.field || !item.selected? <option key={item.field} value={item.field}>{item.field}</option> : ''
                    })    
                }
            </select>

            {/* OPERATOR */}

            {
                filter_data.field == 'Admin' ||
                filter_data.field == 'Ministry' ||
                filter_data.field == 'Organization' ||
                filter_data.field == 'Gender'? <select name="operator" className="solid-container" 
                style={{...colorscheme.elements.solidContainer}} 
                defaultValue={filter_data.operator} 
                data-family={filter_data.id}
                    onChange={(e) => {
                        mutateFilterData({...mutable_filter_data, operator: e.target.value});
                    }}>
                        <option value="is">is</option>
                        { !(filter_data.field == 'Gender')? <option value="is not">is not</option> : '' }
                </select> : '' 
            }

            {
                filter_data.field == 'Keyword'? <select name="operator" className="solid-container" 
                style={{...colorscheme.elements.solidContainer}} 
                defaultValue={filter_data.operator} 
                data-family={filter_data.id}
                    onChange={(e) => {
                        mutateFilterData({...mutable_filter_data, operator: e.target.value});
                    }}>
                        <option value="contains">contains</option> 
                </select> : '' 
            }

            {/* VALUES */}

            {
                filter_data.field == 'Admin'? <select name="admin" className="solid-container" 
                style={{...colorscheme.elements.solidContainer}} 
                defaultValue={filter_data.value} 
                data-family={filter_data.id}
                    onChange={(e) => {
                        mutateFilterData({...mutable_filter_data, value: e.target.value});
                    }}>
                        <option value="">--Select</option>
                    {
                        admin.map((admin) => {
                            return <option value={admin.id}>{admin.name}</option>
                        })
                    }
                </select> : ''
            }
            {
                filter_data.field == 'Organization'? <select name="ogranizations" className="solid-container" 
                style={{...colorscheme.elements.solidContainer}} 
                defaultValue={filter_data.value} 
                data-family={filter_data.id}
                    onChange={(e) => {
                        mutateFilterData({...mutable_filter_data, value: e.target.value})  
                    }}>
                        <option value="">--Select</option>
                    {
                        organizations.map((org) => {
                            return <option value={org.id}>{org.title}</option>
                        })
                    }
                </select> : ''
            }
            {
                filter_data.field == 'Ministry'? <select name="ministry" className="solid-container" 
                style={{...colorscheme.elements.solidContainer}} 
                defaultValue={filter_data.value} 
                data-family={filter_data.id}
                    onChange={(e) => {
                        mutateFilterData({...mutable_filter_data, value: e.target.value});  
                    }}>
                        <option value="">--Select</option>
                    {
                        ministry.map((ministry) => {
                            return <option value={ministry.id}>{ministry.title}</option>
                        })
                    }
                </select> : ''  
            }
            {
                filter_data.field == 'Gender'? <select name="gender" className="solid-container" 
                style={{...colorscheme.elements.solidContainer}} 
                defaultValue={filter_data.value} 
                data-family={filter_data.id}
                    onChange={(e) => {
                        mutateFilterData({...mutable_filter_data, value: e.target.value});  
                    }}>
                    <option value="">--Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> : ''
            }
            {
                filter_data.field == 'Keyword'? <input type="text" className="solid-container" 
                style={{...colorscheme.elements.solidContainer}} 
                value={mutable_filter_data.value} 
                data-family={filter_data.id} 
                onChange={(e) => {
                    mutateFilterData({...mutable_filter_data, value: e.target.value})
                }} /> : ''
            }
        </div>
        <i className={ready? "fas fa-check action-toggle-edit icon-toggle text-light" : "fas fa-check action-toggle-edit icon-toggle text-light btn-disabled"} 
        style={ready? {...colorscheme.elements.textEdit} : {...colorscheme.elements.textLight}} 
        data-family={filter_data.id}
        onClick={() => {
            if(ready) {
                dispatchPayload({action: 'EDIT', item: mutable_filter_data});
                dispatchState('onblur');
            } else {
                alert('PLease Complete the required input!')
            }
        }}></i>
        <i className="fas fa-minus-square action-toggle-remove icon-toggle text-light" 
        style={{...colorscheme.elements.textDelete}} 
        onClick={() => {
            dispatchPayload({action: 'DELETE', item: filter_data});
        }}></i>
    </div>
}

export default MASTERLIST_GROUP;