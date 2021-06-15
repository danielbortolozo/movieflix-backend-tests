import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from '../../utils/auth';
import { ReactComponent as ArrowSair } from '../../assets/img/box-arrow-right.svg';

import './styles.scss';

type Props = {
    children?: React.ReactNode;
}


const Navbar = ({ children }: Props) => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (


        <nav className="row bg-primary main-nav">
            <div className="col-2">
                <Link to="/movies" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>
            </div>
            {currentUser && (
                <>
                    <div className="logout">
                        <a href="/"
                            className="nav-link active d-inline"
                            onClick={handleLogout}>
                            Sair
                       </a>
                      
                    </div>
                </>
            )}
            {children}
            
        </nav>
    )
};

export default Navbar;