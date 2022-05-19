import "../Custom_entities/css/Image.css";
const Image = ({maxW = '100%', minW = '0', height = 'fit-content', style = {}, round = false, src}) => {
    return (<>
    {
        round? <>
        <i style={{
            display: 'flex',
            height: maxW,
            width: maxW,
            borderRadius: '50%',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }}></i>
        </> : <>
        <span style={{display: 'inline-block', position: 'relative', maxWidth: maxW, minWidth: minW, height: height, ...style}}>
            {
                <img className="imageX" style={{maxWidth: '100%', height: 'auto'}} src={src} /> 
            }
            <i className="imageX" style={{position: "absolute", width: '100%', height: '100%', top:'0', left: '0',}}></i>
        </span>        
        </>
    }
    </>)
}

export default Image;