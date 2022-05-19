import './More-actions-group.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MORE_ACTION_GROUP = ({table_data, marked}) => {
    // const [marked_items, updateMarkedItems] = useState([]);
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    // useEffect(() => {
    //     const filtered_marked_item = table_data.filter((item) => item.marked? true : false);
    //     updateMarkedItems(filtered_marked_item);
    // }, [table_data]);

    return <>
    <div className="more-actions-group solid-container text-solid"
    style={{...colorscheme.elements.solidContainer, ...colorscheme.elements.textSolid}}>
        <span className="container-head solid-container" style={{...colorscheme.elements.solidContainer}}>More Actions</span>
        <div className="container-body">
            <p className="selected-items-count text-light" style={{...colorscheme.elements.textLight}}>{marked.length} item selected</p>
            <span className={table_data.length? "action light-container btn text-primary" : "action light-container btn text-primary btn-disabled"}
            style={{...colorscheme.elements.lightContainer, ...colorscheme.elements.textPrimary}}><i className="fas fa-file-csv"></i><p>Export Masterlist as CSV</p></span>
            <span className={marked.length? "action light-container btn text-primary" : "action light-container btn text-primary btn-disabled"}
            style={{...colorscheme.elements.lightContainer, ...colorscheme.elements.textPrimary}}><i className="fas fa-file-csv"></i><p>Export Marked Item/s as CSV</p></span>
            <span className={marked.length? "action light-container btn text-delete" : "action light-container btn text-delete btn-disabled"}
            style={{...colorscheme.elements.lightContainer, ...colorscheme.elements.textDelete}}><i className="fas fa-minus-square"></i><p>Remove marked Items</p></span>
        </div>
    </div>
    </>
}

export default MORE_ACTION_GROUP;