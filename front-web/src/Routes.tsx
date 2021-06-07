import { Switch, Route, Router } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/Catalog/components/MovieDetails';
import history from './core/utils/history';
import PrivateRoute from './core/components/Routers/PrivateRoute';


const Routes = () => (

   <Router history={history}>
     <Navbar />
      <Switch>
         <Route path="/" exact> 
           <Auth />
         </Route>  
         <PrivateRoute path="/movies"> 
           <Catalog />
         </PrivateRoute>    
         <PrivateRoute path="/movie/:movieId"> 
           <MovieDetails />
         </PrivateRoute>   
      </Switch>   
   </Router>

);


export default Routes;