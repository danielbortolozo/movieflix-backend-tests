import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';
import MovieDetails from './pages/Catalog/components/MovieDetails';


const Routes = () => (

   <BrowserRouter>
     <Navbar />
      <Switch>
         <Route path="/" exact> 
           <Auth />
         </Route>  
         <Route path="/movies" exact> 
           <Catalog />
         </Route>    
         <Route path="/movies/:movieId"> 
           <MovieDetails />
         </Route>   
      </Switch>   
   </BrowserRouter>

);


export default Routes;