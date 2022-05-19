

const TOOLTIP = ({text, direction}) => {
    return <>
    <div className={`tooltip tooltip-${direction}`}>
        <p className="tooltip-text">{text}</p>
    </div>
    </>
} 

export default TOOLTIP;