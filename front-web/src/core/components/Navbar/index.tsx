import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    children?: React.ReactNode;
}

const Navbar = ({ children }:Props) => (
   
    <nav className="row bg-primary main-nav">
        <div className="col-2">
         <Link to="/" className="nav-logo-text">
            <h4>MovieFlix</h4>
         </Link>
        </div>   
        {children}   
    </nav>
);

export default Navbar;