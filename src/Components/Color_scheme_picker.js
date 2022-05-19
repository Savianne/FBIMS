import '../Stylesheets/Color_scheme_picker.css';
// import ReactScrollbar from 'react-scrollbar-js';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react/cjs/react.development';

//Custom Entities
import Image from '../Custom_entities/image';

const sample_db = {
    '123': {
        mainContainer: {
            backgroundColor: 'rgb(32, 32, 32)'
        },
        solidContainer: {
            backgroundColor: 'rgb(41, 41, 41)',
            borderColor: 'rgba(104, 103, 103, 0.185)',
        },
        globalBorder: {
            borderColor: 'rgba(104, 103, 103, 0.185)',
        },
        lightContainer: {
            backgroundColor: '#3f3a3a',
            borderColor: 'rgba(104, 103, 103, 0.185)',
        },
        blurBgEffect: {
            backgroundColor: 'rgb(6 6 6 / 57%)',
            // backgroundColor: 'rgba(41, 41, 41, 0.445)',
        },
        topPadding: {
            backgroundColor: 'rgb(32, 32, 32)',
        },
        activeIndicatorBar: {
            backgroundColor: 'rgb(214, 214, 214)',
        },
        shadowEffect: {
            boxShadow: '0 0 8px 2px #1413139e',  
        },
        toggleBackground: {
            backgroundColor: 'rgba(92, 92, 92, 0.219)',
        },
        normal: {
            color: 'rgb(192, 191, 191)',
        },
        active: {
            color: 'whitesmoke',
        },
        systemName: {
            color: 'rgb(47, 85, 151 )',
        },
        textPrimary: {
            color: 'rgb(81, 179, 245)'
        },
        textSolid: {
            color: '#e4e6eb',
        },
        textLight: {
            color: '#b0b3b8',
    },
        textWarning: {
            color: 'orange',
        },
        textEdit: {
            color: '#72f13d',
        },
        textDelete: {
            color: 'rgb(223, 63, 63)',
        },
        btnDefault: {
            color: 'whitesmoke',
            backgroundColor: 'rgba(92, 92, 92, 0.219)',
            borderColor: 'rgb(207, 207, 207)',
        },
        borderedBtnPrimary: {
            color: 'rgb(0, 176, 240)',
            borderColor: 'rgb(0, 176, 240)',
        },
        btnPrimary: {
            color: 'white',
            borderColor: 'rgb(0, 176, 240)',
            backgroundColor: 'rgb(0, 176, 240)',
        },
        btnEdit: {
            color: 'white',
            borderColor: 'rgb(0, 240, 100)',
            backgroundColor: 'rgb(0, 240, 100)'
        },
        btnWarning: {
            color: 'white',
            borderColor: 'orange',
            backgroundColor: 'orange'
        },
        btnDelete: {
            color: 'white',
            borderColor: 'rgb(223, 63, 63)',
            backgroundColor: 'rgb(223, 63, 63)'
        }
    },
    '1234': {
        mainContainer: {
            background: 'linear-gradient(to right, rgb(0, 141, 81), rgb(5, 241, 44), rgb(255, 255, 0))'
        },
        solidContainer: {
            // backgroundColor: 'linear-gradient(to right, rgb(5, 241, 44), rgb(0, 141, 81), rgb(5, 241, 44)',
            backgroundColor: 'rgb(0, 141, 81)',
            borderColor: 'rgb(5, 241, 44)',
        },
        globalBorder: {
            borderColor: 'rgb(5, 241, 44)',
        },
        lightContainer: {
            backgroundColor: '#19b975',
            borderColor: 'rgb(5, 241, 44)',
        },
        blurBgEffect: {
            backgroundColor: 'rgba(41, 41, 41, 0.445)',
        },
        topPadding: {
            background: 'linear-gradient(to right, #02b143, rgb(0, 141, 81), rgb(5, 241, 44), rgb(5, 241, 44), rgb(255, 255, 0))'
        },
        activeIndicatorBar: {
            backgroundColor: 'rgb(214, 214, 214)',
        },
        shadowEffect: {
            boxShadow: '0 0 8px 2px #1413139e',  
        },
        toggleBackground: {
            backgroundColor: 'rgb(0, 226, 151)',
        },
        normal: {
            color: 'white',
        },
        active: {
            color: 'whitesmoke',
        },
        systemName: {
            color: 'rgb(47, 85, 151 )',
        },
        textPrimary: {
            color: '#e4ff00'
        },
        textSolid: {
            color: 'white',
        },
        textLight: {
            color: '#e4e6eb',
    },
        textWarning: {
            color: 'orange',
        },
        textEdit: {
            color: '#72f13d',
        },
        textDelete: {
            color: 'rgb(223, 63, 63)',
        },
        btnDefault: {
            color: 'white',
            backgroundColor: 'rgb(0, 226, 151)',
            borderColor: 'rgb(207, 207, 207)',
        },
        borderedBtnPrimary: {
            color: 'rgb(0, 176, 240)',
            borderColor: 'rgb(0, 176, 240)',
        },
        btnPrimary: {
            color: 'white',
            borderColor: 'rgb(0, 176, 240)',
            backgroundColor: 'rgb(0, 176, 240)',
        },
        btnEdit: {
            color: 'white',
            borderColor: 'rgb(0, 240, 100)',
            backgroundColor: 'rgb(0, 240, 100)'
        },
        btnWarning: {
            color: 'white',
            borderColor: 'orange',
            backgroundColor: 'orange'
        },
        btnDelete: {
            color: 'white',
            borderColor: 'rgb(223, 63, 63)',
            backgroundColor: 'rgb(223, 63, 63)'
        }
    }
}

const COLOR_SCHEME_PICKER = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    const [cs_list, setCsList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        setCsList([
            {
                id: '123',
                title: 'Dark Mode',
                avatar: 'color_scheme_darkmode.png'
            },
            {
                id: '1234',
                title: 'ISUAN',
                avatar: 'color_scheme_isuan.png'
            }
        ])
    }, [])
    return(<>
    <div className="color-scheme-picker-container">
        <div className="color-scheme-item solid-container"
        style={colorscheme.id == 'default'? {...colorscheme.elements.lightContainer} : {...colorscheme.elements.solidContainer}}
        onClick={() => {
            dispatch({type: "DEFAULT_CS"});
        }}>
            <Image src='/assets/images/avatar/color_scheme_light.png' maxW="50px" />
        </div>
        {
            cs_list.length? <>
                {
                    cs_list.map((item) => {
                        return <>
                            <div className="color-scheme-item solid-container"
                            style={colorscheme.id == item.id? {...colorscheme.elements.lightContainer} : {...colorscheme.elements.solidContainer}}
                            onClick={() => {
                                const new_cs = {
                                    id: item.id,
                                    elements: {...sample_db[item.id]},
                                }

                                dispatch({type: 'SWITCH_CS', payload: {...new_cs}});
                            }}>
                                <Image src={`/assets/images/avatar/${item.avatar}`} maxW="50px" />
                            </div>
                        </>
                    })
                }
            </> : ''
        }
        
    </div>
    </>)
}

export default COLOR_SCHEME_PICKER;