import CustomStringMethods from '../Controllers/class.custom_string_methods';
 const Alt_avatar = ({size, title, color = 'pink'}) => {
     return <div className="alt-avatar" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', borderWidth: '2px', width: size, height: size, color: 'white', backgroundColor: color, borderRadius: '50%', fontSize: '0.8em'}}>
         {CustomStringMethods.abbreviation(title, true)}
     </div>
 }

 export default Alt_avatar;