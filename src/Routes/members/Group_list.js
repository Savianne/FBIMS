import './Group_list.css';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import $ from 'jquery';

//Custom Entities
import Image from '../../Custom_entities/image';
import Alt_avatar from '../../Custom_entities/alt_avatar';

const GROUP_LIST = ({data, color}) => {
    //Reference
    const itemRef = useRef(null);

    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    return <>
    <div className="group-list-container">
            {
                data.length? <>
                    {
                        data.map((item) => {
                            return <div className="group-list-item solid-container" ref={itemRef} 
                            style={{
                                ...colorscheme.elements.solidContainer,
                                borderLeftColor: color,
                            }}>
                                { 
                                    item.avatar? <div className="avatar-border global-border"
                                    style={{...colorscheme.elements.globalBorder}}>
                                        <Image src={`assets/images/${item.avatar}`} maxW="35px" round />
                                    </div> : <div className="avatar-border global-border"
                                    style={{...colorscheme.elements.globalBorder}}>
                                        <Alt_avatar size="35px" title="Usher" />
                                    </div> 
                                }
                                <span>
                                    <p className="title text-solid"
                                    style={{...colorscheme.elements.textSolid}}>{item.title}</p>
                                    {
                                        item.members.length? <div className="members-avatar-holder">
                                        {
                                            item.members.map((inner_item, index) => {
                                                return <>
                                                    {
                                                        index <= 7? <>
                                                            {
                                                                inner_item.avatar? <>
                                                                    <div style={{
                                                                        border: `2px solid ${colorscheme.elements.solidContainer.backgroundColor}`,
                                                                        height: 'fit-content',
                                                                        width: 'fit-content',
                                                                        borderRadius: '50%',
                                                                        marginLeft: '-4px',
                                                                        backgroundColor: colorscheme.elements.solidContainer.backgroundColor,
                                                                    }}>
                                                                        <Image src={`assets/images/${inner_item.avatar}`} maxW="20px" round />
                                                                    </div>
                                                                    {index === 0 && item.members.length <= 5? <p className="text-light" style={{margin: '0 10px 0 5px', fontSize: '11px'}}>{inner_item.f_name} </p>: ''} 
                                                                </> : <>
                                                                    <div style={{
                                                                        border: `2px solid ${colorscheme.elements.solidContainer.backgroundColor}`,
                                                                        height: 'fit-content',
                                                                        width: 'fit-content',
                                                                        borderRadius: '50%',
                                                                        marginLeft: '-4px',
                                                                        backgroundColor: colorscheme.elements.solidContainer.backgroundColor,
                                                                    }}>
                                                                        <Alt_avatar size="16px" title={inner_item.f_name} />
                                                                    </div>
                                                                    {index === 0 && item.members.length <= 5? <p className="text-light" style={{margin: '0 10px 0 5px', fontSize: '11px', ...colorscheme.elements.textLight}}>{inner_item.f_name} </p>: ''}
                                                                </>  
                                                            }
                                                        </> : ''
                                                    }
                                                </>
                                            })
                                        }
                                        {
                                            item.members.length >= 9? <>
                                                <p className="text-light" style={{...colorscheme.elements.textLight, fontSize: '12px', marginLeft: '2px'}}>+ {item.members.length - 9} more</p>
                                            </> : ''
                                        }
                                        </div> : <p className="text-light" style={{fontSize: '12px', marginTop: '5px', ...colorscheme.elements.textLight}}>0 Member</p>
                                    }
                                </span>
                                <span className="btn action-btn text-primary"
                                style={{...colorscheme.elements.textPrimary}}
                                onClick={() => {
                                    // dispatchMember(item);
                                }}><i className="fas fa-arrow-circle-right"></i> Manage</span>
                            </div>
                        })
                    }
                </> : 'Empty List'
            }
            {/* <span className="avatar-holder"><Image src="/asstsdefault.css" /></span> */}
        </div>
    </>
}

export default GROUP_LIST;