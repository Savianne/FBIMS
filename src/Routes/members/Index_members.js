import './Index_members.css';
import { useEffect, useReducer, useRef, useState } from 'react';

//Tabs
import MASTERLIST_GROUP from './Masterlist';
import MINISTRY_GROUP from './Ministry';
import FAMILIES_GROUP from './Families';
import ORGANIZATIONS_GROUP from './Organizations';

const MEMBERS = () => {
    // States
    const [open_tab, switchTab] = useState('masterlist');    
    ;
    return <> 
    { //Masterlist Tab
        open_tab == 'masterlist'? <> 
            <MASTERLIST_GROUP tab={open_tab} switchTab={(tab) => switchTab(tab)} />          
        </> : ''
    }   

    { //Families Tab
        open_tab == 'families'? <> 
            <FAMILIES_GROUP tab={open_tab} switchTab={(tab) => switchTab(tab)}/>          
        </> : ''
    }

    { //Ministry Tab
        open_tab == 'ministry'? <> 
            <MINISTRY_GROUP tab={open_tab} switchTab={(tab) => switchTab(tab)} />          
        </> : ''
    }

    { //Organizations Tab
        open_tab == 'organizations'? <> 
            <ORGANIZATIONS_GROUP tab={open_tab} switchTab={(tab) => switchTab(tab)} />          
        </> : ''
    }  
    </>
}


export default MEMBERS;