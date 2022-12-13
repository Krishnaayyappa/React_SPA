import classes from "./MainNavigation.module.css";
import { NavLink, Link} from "react-router-dom";



const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}><Link to="/quotes">Great Quotes</Link></div>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to = "/quotes/" activeClassName={classes.active}>All Quotes</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to = "/newquote" activeClassName={classes.active}>Add a quote</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;