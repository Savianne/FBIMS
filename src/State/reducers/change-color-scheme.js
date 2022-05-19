const default_color_scheme = {
    id: 'default',
    elements: {
        mainContainer: {
            backgroundColor: 'rgba(242, 242, 242, 0.25)',
        },
        solidContainer: {
            backgroundColor: 'white',
            borderColor: 'rgba(242, 242, 242, 1)',
        },
        globalBorder: {
            borderColor: 'rgba(242, 242, 242, 1)',
        },
        lightContainer: {
            backgroundColor: 'rgb(247, 247, 247)',
            borderColor: 'rgba(242, 242, 242, 1)',
        },
        blurBgEffect: {
            // backgroundColor: '#fcfcfc85',
            backgroundColor: 'rgba(30, 41, 51, 0.45)'
        },
        topPadding: {
            backgroundColor: '#fcfcfc',
        },
        activeIndicatorBar: {
            backgroundColor: 'rgb(0, 176, 240)',
        },
        shadowEffect: {
            boxShadow: '0 0 8px 2px #ebebeb9c',  
        },
        toggleBackground: {
            backgroundColor: 'rgba(242, 242, 242, 1)',
        },
        normal: {
            color: 'rgb(46, 117, 182)',
        },
        active: {
            color: 'rgb(0, 176, 240)',
        },
        systemName: {
            color: 'rgb(47, 85, 151)',
        },
        textPrimary: {
            color: 'rgb(81, 179, 245)'
        },
        textSolid: {
            color: 'rgb(38, 38, 38)',
        },
        textLight: {
            color: '#65676B',
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
            color: 'rgb(46, 45, 45)',
            backgroundColor: 'rgba(242, 242, 242, 1)',
            borderColor: 'rgb(207, 207, 207)',
        },
        borderedBtnPrimary: {
            color: 'rgb(0, 176, 240)',
            borderColor: 'rgb(0, 176, 240)',
        },
        borderedBtnRemove: {
            color: 'rgb(223, 63, 63)',
            borderColor: 'rgb(223, 63, 63)',
        },
        borderedBtnEdit: {
            color: 'rgb(0, 240, 100)',
            borderColor: 'rgb(0, 240, 100)',
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
 
// const default_color_scheme = {
//     elements: {
//         mainContainer: {
//             backgroundColor: 'rgb(32, 32, 32)'
//         },
//         solidContainer: {
//             backgroundColor: 'rgb(41, 41, 41)',
//             borderColor: 'rgba(104, 103, 103, 0.185)',
//         },
//         globalBorder: {
//             borderColor: 'rgba(104, 103, 103, 0.185)',
//         },
//         lightContainer: {
//             backgroundColor: '#4e4b4b',
//             borderColor: 'rgba(104, 103, 103, 0.185)',
//         },
//         blurBgEffect: {
//             backgroundColor: 'rgba(41, 41, 41, 0.445)',
//         },
//         topPadding: {
//             backgroundColor: 'rgb(32, 32, 32)',
//         },
//         activeIndicatorBar: {
//             backgroundColor: 'rgb(214, 214, 214)',
//         },
//         shadowEffect: {
//             boxShadow: '0 0 8px 2px #1413139e',  
//         },
//         toggleBackground: {
//             backgroundColor: 'rgba(92, 92, 92, 0.219)',
//         },
//         normal: {
//             color: 'rgb(192, 191, 191)',
//         },
//         active: {
//             color: 'whitesmoke',
//         },
//         systemName: {
//             color: 'rgb(47, 85, 151 )',
//         },
//         textPrimary: {
//             color: 'rgb(81, 179, 245)'
//         },
//         textSolid: {
//             color: '#e4e6eb',
//         },
//         textLight: {
//             color: '#b0b3b8',
//        },
//         textWarning: {
//             color: 'orange',
//         },
//         textEdit: {
//             color: '#72f13d',
//         },
//         textDelete: {
//             color: 'rgb(223, 63, 63)',
//         },
//         btnDefault: {
//             color: 'whitesmoke',
//             backgroundColor: 'rgba(92, 92, 92, 0.219)',
//             borderColor: 'rgb(207, 207, 207)',
//         },
//         borderedBtnPrimary: {
//             color: 'rgb(0, 176, 240)',
//             borderColor: 'rgb(0, 176, 240)',
//         },
//         btnPrimary: {
//             color: 'white',
//             borderColor: 'rgb(0, 176, 240)',
//             backgroundColor: 'rgb(0, 176, 240)',
//         },
//         btnEdit: {
//             color: 'white',
//             borderColor: 'rgb(0, 240, 100)',
//             backgroundColor: 'rgb(0, 240, 100)'
//         },
//         btnWarning: {
//             color: 'white',
//             borderColor: 'orange',
//             backgroundColor: 'orange'
//         },
//         btnDelete: {
//             color: 'white',
//             borderColor: 'rgb(223, 63, 63)',
//             backgroundColor: 'rgb(223, 63, 63)'
//         }
//     }
// }
const changeColorSchemeReducer = (state = default_color_scheme, action) => {
    switch(action.type) {
        case 'SWITCH_CS':
            state = {...action.payload}
            return state;
        break;
        case 'DEFAULT_CS':
            return {...default_color_scheme}
        break;
        default: 
            return state;
    }
}

export default changeColorSchemeReducer;