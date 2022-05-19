import { useSelector, useDispatch } from 'react-redux';

const RECORDS_LENGTH = ({length}) => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);

    return<>
    <div className="solid-container" style={{
        display: 'flex',
        width: '230px',
        height: 'fit-content',
        padding: '10px',
        alignItems: 'center',
        // justifyContent: 'center',
        flexWrap:'wrap',
        ...colorscheme.elements.solidContainer
    }}>
        <p className="text-light" style={{
            fontSize: '12px',
            ...colorscheme.elements.textLight
        }}>All Records:</p>
        <p className="text-solid" style={{
            margin: '0 15px 0 8px',
            ...colorscheme.elements.textSolid
        }}>{length}</p>
        <i className="fas fa-clipboard-list text-solid light-container" style={{
            display: 'flex',
            width: '30px',
            height: '30px',
            marginLeft: 'auto',
            borderRadius: '50%',
            // backgroundColor: "whitesmoke",
            alignItems: 'center',
            justifyContent: 'center',
            ...colorscheme.elements.lightContainer,
            ...colorscheme.elements.textSolid
        }}></i>
    </div>
    </>
}

export default RECORDS_LENGTH;