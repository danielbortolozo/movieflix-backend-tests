
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { ReactComponent as AuthImage } from '../../core/assets/img/main-home.svg';
import './styles.scss';

const Auth = () => (
    <div className="auth-container">
       <div className="auth-info">
           <h1 className="auth-info-title"> 
               Avalie Filmes
           </h1>
           <p className="auth-info-subtitle">
           Diga o que você achou do seu filme favorito.              
           </p>
           <AuthImage  />
       </div>

       <div className="auth-content">
       <Switch>
           <Route path="/">
              <Login />       
           </Route>                         
         </Switch>     
        </div>
    </div>
)
export default Auth;