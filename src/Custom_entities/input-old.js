// import {useState, useEffect} from 'react';
// import './css/input-old.css';

// // Using Custom Entities
// import ErrTooltip from './error_tooltip';

// // Using Input Checker
// //const InputChecker = require('../Controllers/class.input_checker');

// const Input = ({type = 'text', placeholder = '', style = {width: '300px', height: '35px'}}) => {
//    // const inputChecker = new InputChecker(limitations); 

//     const [inputState, changeState] = useState({});
//     const [tooltip, showToltip] = useState(false);
//     const [value, inputValue] = useState(initialization.value);
//     const [validatedValue, updateValue] = useState('');
    
//     useEffect(() => {
//         dispatcher(inputState);
//     }, [inputState])
//     return (
//         <div className={inputState.state == 'disabled'? 'input-disabled' : 'input'}
//         style={{...style}}>
//             <input
//             type={type} 
//             placeholder={placeholder}
//             value={inputState.value}
//             disabled={inputState.state == 'disabled'? true : false}
//             onChange={(self) => {
        
//             }}
//             onFocus={() => {
//                 showToltip(true);
//             }}
//             onBlur={() => {
//                 showToltip(false);
//             }}
//             // required={initialization.required}
//             autoFocus></input>
//             {inputState.state == 'onerror' ? <ErrTooltip text={inputState.error} state={tooltip} /> : ''}
//             {inputState.state == 'onerror' && !(type == 'password')? <i className="fas fa-exclamation-circle icn-error"></i> : ''}
//             {inputState.state == 'success' && !(type == 'password')? <i className="fas fa-check-circle icn-success"></i> : ''}
//         </div>
//     )
// }

// // export default Input;