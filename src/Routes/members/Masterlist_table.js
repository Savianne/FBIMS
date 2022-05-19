// import './index_members.css';
import Image from '../../Custom_entities/image';
import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux';

//Custom Entities
import Alt_avatar from '../../Custom_entities/alt_avatar';

const Masterlist_table = ({table_data = [], table_field, view, name_format, dispatchData, dispatchMember}) => {
    const self = useRef(null);
    
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    useEffect(() => {
        if(view === 'CUI') {
            const tableHeight = $('.members > .tab-content > .masterlist > .table').outerHeight(true);
            $(self.current).css({height: tableHeight + 10});
        } else if(view === 'EXCEL') {
            const tableHeight = $('.members > .tab-content > .masterlist > table').outerHeight(true);
            $(self.current).css({height: tableHeight + 20});
        }
    });

    return(<>
    <div className="masterlist" ref={self}>
        {//Creative UI Table View
            view === 'CUI'? <>
            {
                table_data.length > 0? <>
                    <div className="table">
                        <div className="tr">
                            <div className="th mark text-solid" style={{...colorscheme.elements.textSolid}}>
                                <input type="checkbox" 
                                onChange={(e) => {
                                    // table_data
                                    const new_table_data = table_data.map((item) => {
                                        const new_item = {...item, marked: e.target.checked};
                                        return new_item;
                                    });

                                    dispatchData(new_table_data);  
                                }} />
                            </div>
                            <div className="th member text-solid" style={{...colorscheme.elements.textSolid}}>Members</div>
                            {table_field.role? <div className="th membership text-solid" style={{...colorscheme.elements.textSolid}}>Role</div> : ''}
                            {table_field.org? <div className="th org text-solid" style={{...colorscheme.elements.textSolid}}>Organization/s</div> : ''}
                            {table_field.ministry? <div className="th ministry text-solid" style={{...colorscheme.elements.textSolid}}>Ministry</div> : ''}
                            {table_field.gender? <div className="th gender text-solid" style={{...colorscheme.elements.textSolid}}>Gender</div> : ''}
                            {table_field.status? <div className="th status text-solid" style={{...colorscheme.elements.textSolid}}>Status</div> : ''}
                            {table_field.d_o_b? <div className="th dob text-solid" style={{...colorscheme.elements.textSolid}}>Date of Birth</div> : ''}
                            {table_field.phone? <div className="th cp_number text-solid" style={{...colorscheme.elements.textSolid}}>Phone</div> : ''}
                            {table_field.email? <div className="th email text-solid" style={{...colorscheme.elements.textSolid}}>Email</div> : ''}
                            {table_field.address? <div className="th address text-solid" style={{...colorscheme.elements.textSolid}}>Address</div> : ''}
                            <div className="th action text-solid" style={{...colorscheme.elements.textSolid}}>Action</div>
                        </div>
                        {
                            table_data.map((item, index) => {
                                return <>
                                    <div className={index % 2 == 0? "tr light-container text-light" : "tr solid-container text-light"} 
                                    style={index % 2 == 0? {...colorscheme.elements.lightContainer, ...colorscheme.elements.textLight} 
                                    : {...colorscheme.elements.solidContainer, ...colorscheme.elements.textLight}} key={item.member_idn}>
                                        <div className="td mark">
                                            <input type="checkbox" checked={item.marked} id={item.member_idn} onChange={(e) => {
                                                const new_item = [...table_data];
                                                new_item[index].marked = e.target.checked;
                                                dispatchData(new_item);
                                            }}/>
                                        </div>
                                        <div className="td member"><span className="solid-container" 
                                        style={{...colorscheme.elements.solidContainer}}><Image src={`/assets/images/${item.avatar}`} maxW="30px" round={true} /></span><p>Apple Jane De Guzman</p></div>
                                        {table_field.role? <div className="td membership">Worker</div> : ''}
                                        {table_field.org? <div className="td org">
                                            {
                                                item.organizations.length? <Organizations_group orgs={item.organizations} type="org" item_index={index} /> :  <p className="no-org-text">Not a Member of any Organization!</p>
                                            }
                                        </div> : ''}
                                        {table_field.ministry? <div className="td ministry">
                                            {
                                                item.ministry.length? <Organizations_group orgs={item.ministry} type="ministry" item_index={index}/> : <p className="no-org-text">Not a Member of any Ministry!</p>
                                            }
                                        </div> : ''}
                                        {table_field.gender? <div className="td gender">Gender</div> : ''}
                                        {table_field.status? <div className="td status">dqwdqwd</div> : ''}
                                        {table_field.d_o_b? <div className="td dob">wdqwdqwd</div> : ''}
                                        {table_field.phone? <div className="td cp_number">Phone</div> : ''}
                                        {table_field.email? <div className="td email">Email</div> : ''}
                                        {table_field.address? <div className="td address">address</div> : ''}
                                        <div className="td action">
                                            <span className="round-bordered-icon-btn bordered-btn-remove action-btn" 
                                            style={{...colorscheme.elements.borderedBtnRemove}}
                                            onClick={() => {
                                                dispatchMember(item)
                                                // console.log(item)
                                            }}>
                                                <i className="fas fa-user-times"></i>
                                            </span>
                                            <span className="round-bordered-icon-btn bordered-btn-edit action-btn" 
                                            style={{...colorscheme.elements.borderedBtnEdit}}
                                            onClick={() => {
                                                dispatchMember(item)
                                                // console.log(item)
                                            }}>
                                                <i className="fas fa-user-edit"></i>
                                            </span>
                                            <span className="round-bordered-icon-btn bordered-btn-primary action-btn" 
                                            style={{...colorscheme.elements.borderedBtnPrimary}}
                                            onClick={() => {
                                                dispatchMember(item)
                                                // console.log(item)
                                            }}>
                                                <i className="fas fa-chart-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </> : <>
                    <div className="nodata solid-container" style={{...colorscheme.elements.solidContainer}}>
                        <i className="fas fa-exclamation-circle text-light" style={{...colorscheme.elements.textLight}}></i>
                        <p className="text-light" style={{...colorscheme.elements.textLight}}>NO Data to display!</p>
                    </div>
                </>
            }
            </> : '' //End of Creative UI Table View
        }
        {//Excel Table Vieew
            view === 'EXCEL'? <>
                {
                    table_data.length > 0? <>
                    {
                        <table className="global-border" 
                        style={{
                            ...colorscheme.elements.globalBorder, 
                            backgroundColor: colorscheme.elements.solidContainer.backgroundColor
                        }}>
                            <tr className="global-border" 
                            style={{
                                ...colorscheme.elements.globalBorder,
                                ...colorscheme.elements.textSolid
                                // backgroundColor: colorscheme.elements.lightContainer.backgroundColor    
                            }}>
                                <th className='mark global-border' 
                                style={{...colorscheme.elements.globalBorder}}>
                                    <input type="checkbox" 
                                    onChange={(e) => {
                                        // table_data
                                        const new_table_data = table_data.map((item) => {
                                            const new_item = {...item, marked: e.target.checked};
                                            return new_item;
                                        });

                                        dispatchData(new_table_data);  
                                    }} />
                                </th>
                                <th className="global-border" 
                                style={{...colorscheme.elements.globalBorder}}>Members</th>
                                {table_field.role? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Role</th>: ''}
                                {table_field.org? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Organizations</th> : ''}
                                {table_field.ministry? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Ministry</th>: ''}
                                {table_field.gender? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Gender</th>: ''}
                                {table_field.status? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Status</th>: ''}
                                {table_field.d_o_b? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Date of Birth</th> : ''}
                                {table_field.phone? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>CP Number</th>: ''}
                                {table_field.email? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Email</th>: ''}
                                {table_field.address? <th className="global-border" style={{...colorscheme.elements.globalBorder}}>Address</th>: ''}
                                <th className='action-th global-border' style={{...colorscheme.elements.globalBorder}}>Action</th>
                            </tr>
                            {
                                table_data.map((item, index) => {
                                    return <>
                                        <tr>
                                            <td className="mark global-border"
                                            style={{...colorscheme.elements.globalBorder}}>
                                                <input type="checkbox" checked={item.marked} id={item.member_idn} onChange={(e) => {
                                                    const new_item = [...table_data];
                                                    new_item[index].marked = e.target.checked;
                                                    dispatchData(new_item);
                                                }}/>
                                            </td>
                                            <td className="global-border text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>Mark Nino Quilonio Baylon</td>
                                            {table_field.role? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>Member</td> : ''}
                                            {
                                                table_field.org? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>
                                                    {
                                                        item.organizations.length? <ul>
                                                            {
                                                                item.organizations.map((item, index) => {
                                                                    return <li>{item.title}</li>
                                                                })
                                                            }
                                                        </ul> :  <p className="no-org-text">Not a Member of any Organization!</p>
                                                    }
                                                </td>: ''
                                            }
                                            {
                                                table_field.ministry? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>
                                                    {
                                                        item.ministry.length? <ul>
                                                            {
                                                                item.ministry.map((item, index) => {
                                                                    return <li>{item.title}</li>
                                                                })
                                                            }
                                                        </ul> : <p className="no-org-text">Not a Member of any Ministry!</p>
                                                    }
                                                </td> : ''
                                            }
                                            {table_field.gender? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>Male</td> : ''}
                                            {table_field.status? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>Single</td> : ''}
                                            {table_field.d_o_b? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>August 03, 1998</td> : ''}
                                            {table_field.phone? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>09128486021</td> : ''}
                                            {table_field.email? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>markbaylon831998@gmail.com</td> : ''}
                                            {table_field.address? <td className="global-border  text-light" style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>Sandiat West, San Manuel Isabela 3317</td> : ''}
                                            <td className='action-td global-border  text-light' style={{...colorscheme.elements.globalBorder, ...colorscheme.elements.textLight}}>
                                                <div className='action'>
                                                    <span className="round-bordered-icon-btn bordered-btn-remove action-btn" 
                                                    style={{...colorscheme.elements.borderedBtnRemove}}
                                                    onClick={() => {
                                                        dispatchMember(item)
                                                        // console.log(item)
                                                    }}>
                                                        <i className="fas fa-user-times"></i>
                                                    </span>
                                                    <span className="round-bordered-icon-btn bordered-btn-edit action-btn" 
                                                    style={{...colorscheme.elements.borderedBtnEdit}}
                                                    onClick={() => {
                                                        dispatchMember(item)
                                                        // console.log(item)
                                                    }}>
                                                        <i className="fas fa-user-edit"></i>
                                                    </span>
                                                    <span className="round-bordered-icon-btn bordered-btn-primary action-btn" 
                                                    style={{...colorscheme.elements.borderedBtnPrimary}}
                                                    onClick={() => {
                                                        dispatchMember(item)
                                                        // console.log(item)
                                                    }}>
                                                        <i className="fas fa-chart-line"></i>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </>
                                })
                            }
                            
                        </table>
                    }
                    </> : <>
                        <div className="nodata solid-container" style={{...colorscheme.elements.solidContainer}}>
                            <i className="fas fa-exclamation-circle text-light" style={{...colorscheme.elements.textLight}}></i>
                            <p className="text-light" style={{...colorscheme.elements.textLight}}>NO Data to display!</p>
                        </div>
                    </>
                }
            </> : ''
        }
    </div>
    </>)
}

const Organizations_group = ({orgs, type, item_index}) => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    return <>
    <div className={type == 'org'? "org-avatar-group" : 'ministry-avatar-group'}>
        {
            orgs.map((item, index) => {
                return index <= 5? <span className={type == 'org'? "org-avatar" : 'ministry-avatar'} style={{display: 'flex', width: 'fit-content', alignItems: 'center'}}>
                    {
                        item.avatar? <span style={{
                            display: 'flex', 
                            borderRadius: '50%', 
                            padding: '3.5px', 
                            width: 'fit-content', 
                            height: 'fit-content', 
                            marginRight: '-11px', 
                            backgroundColor: item_index % 2 == 0? colorscheme.elements.lightContainer.backgroundColor : colorscheme.elements.solidContainer.backgroundColor,
                        }}>
                            <Image maxW="22px" round="true" src="assets/images/apple.jpg" />
                        </span> : <span style={{
                            display: 'flex', 
                            borderRadius: '50%', 
                            padding: '3.5px', 
                            width: 'fit-content', 
                            height: 'fit-content', 
                            marginRight: '-11px', 
                            backgroundColor: item_index % 2 == 0? colorscheme.elements.lightContainer.backgroundColor : colorscheme.elements.solidContainer.backgroundColor,
                        }}>
                            <Alt_avatar color={type == "org"? "#00b0f0" : "#f94f6c"} size="18px" title={item.title} />
                        </span>
                    }
                    {
                        index === 0 && orgs.length <= 4? <p style={{marginLeft: '10px'}}>{item.title}{orgs.length === 1? '' : ', '}</p> : ''
                    }
                    {
                        index === 1 && orgs.length == 2? <p style={{marginLeft: '10px'}}>{item.title}</p> : ''
                    }
                </span> : '';
            })
        }
        <p style={{display: 'flex', alignItems: 'center', marginLeft: '5px'}}>{orgs.length >= 6? `+ ${orgs.length - 6} more` : '' }</p>
    </div>
    </>
}

export default Masterlist_table;
