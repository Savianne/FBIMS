import './css/button.css';

const Button = ({name, type = 'default', action = null, is_disabled = false, style = {}}) => {
    switch(type) {
        case 'default':
            return  <button className={is_disabled? "btn btn-default btn-disabled" : "btn btn-default"} type="submit" 
            onClick={() => {if(action && !is_disabled) action()}} style={{...style}}>{name}</button>;
            break;
        case 'submit':
            return  <button className={is_disabled? "btn btn-submit btn-disabled" : "btn btn-submit"} type="submit" 
            onClick={() => {if(action && !is_disabled) action()}} style={{...style}}>{name}</button>;
            break;
        case 'edit':
            return  <button className={is_disabled? "btn btn-edit btn-disabled" : "btn btn-edit"} type="submit" 
            onClick={() => {if(action && !is_disabled) action()}} style={{...style}}>{name}</button>;
            break;
        case 'delete':
            return  <button className={is_disabled? "btn btn-delete btn-disabled" : "btn btn-delete"} type="submit" 
            onClick={() => {if(action && !is_disabled) action()}} style={{...style}}>{name}</button>;
            break;
    }
}

export default Button;