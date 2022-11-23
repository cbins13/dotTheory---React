import {NavLink} from 'react-router-dom';

const Header = () => {
    return(<header>
        <h1>What's new in React Module</h1>
        <ul className="header-nav">
            <li key={"v16"}><NavLink to="/">v16</NavLink></li>
            <li key={"v17"}><NavLink to="v17">v17</NavLink></li>
            <li key={"v18"}><NavLink to="v18">v18</NavLink></li>
        </ul>
    </header>)
}


export default Header;