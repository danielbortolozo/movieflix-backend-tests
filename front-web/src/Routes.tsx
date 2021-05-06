import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Auth from './pages/Auth';
import Catalog from './pages/Catalog';


const Routes = () => (

   <BrowserRouter>
     <Navbar />
      <Switch>
         <Route path="/" exact> 
           <Auth />
         </Route>  
         <Route path="/catalog"> 
           <Catalog />
         </Route>       
      </Switch>   
   </BrowserRouter>

);


export default Routes;