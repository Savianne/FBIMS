import '../Stylesheets/Calendar_events.css';

const Calendar_events = () => {
    return (<>
    <aside className="calendar-events solid-container">
        <Todays_events />  
        <Upcoming_events />     
    </aside>
    </>)
}

const Todays_events = () => {
    return(<>
    <div className="today-events">
    
    </div>
    </>)
}

const Upcoming_events = () => {
    return(<>
    <div className="today-events">

    </div>
    </>)
} 


export default Calendar_events;