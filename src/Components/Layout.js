import '../Stylesheets/Layout.css';
// import '../Stylesheets/Default_scheme.css';

import '../Stylesheets/Theme.css';
import '../Stylesheets/Typography.css';
import { useSelector, useDispatch } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

//Components
import Navbar from './Navbar';
import Header from './Header';
import Calendar_events from './Calendar_events';
import Confirm from './Confirm';

//Routes Index files
import MEMBERS from '../Routes/members/Index_members';
import PROFILE from '../Routes/Profile/Profile';

const Layout = () => {
    const colorscheme = useSelector(state => state.changeColorSchemeReducer);
    return (<>
    <Confirm />
    <div className="main-container" style={{...colorscheme.elements.mainContainer}}>
        <Switch>
            <div className="base-container">
                <Navbar />
                <div className="side-content">
                    <div className="top-padding" style={{...colorscheme.elements.topPadding}}></div>
                    <Header />
                    <Route exact path="/">
                        <div className="scrolling-content">
                            <p>Dashboard</p>
                        </div>
                        <Calendar_events />
                    </Route>
                    <Route path="/dashboard">
                        <div className="scrolling-content">
                            <p>Dashboard</p>
                        </div>
                        <Calendar_events />
                    </Route>
                    <Route path="/members">
                        <MEMBERS />     
                        {/* <Calendar_events /> */}
                    </Route>
                    <Route path="/calendar">
                        <div className="scrolling-content">
                            <p>Calendar</p>
                        </div>
                        <Calendar_events />
                    </Route>
                    <Route path="/profile">
                        <PROFILE />
                    </Route>
                </div>
            </div>
        </Switch>
    </div>
    </>)
}

export default Layout;