import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/posts">Posts</Link>
                </li>

                <li>
                    <Link to="/photos">Photos</Link>
                </li>

                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Header;