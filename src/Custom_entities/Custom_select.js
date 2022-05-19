

const Custom_Select = () => {
    return <>
        <div className="custom-select solid-container" style={{
            display: 'flex',
            padding: '5px'
        }}>
            <p className="select-text text-solid" style={{
                marginRight: '10px',
                fontWeight: 'bold',
                fontSize: '13.5px'
            }}>Actions</p>
            <i className="fas fa-caret-down text-solid"></i>
        </div>
    </>
}

export default Custom_Select;  