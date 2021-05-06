import './styles.scss';
import { ReactComponent as MainImage } from 'core/assets/images/main-home.svg';
import { Link } from 'react-router-dom';


const Home = () => ( 

    <div className="home-container">
        <div className="row home-content card-base border-radius-20">
              <div className="col-6" >
                        <h1 className="text-title">
                        Avalie Filmes
                    </h1>
                        <p className="text-subtitle">
                        Diga o que você achou do seu filme favorito.
                    </p>
            
            </div>     
        </div>
    </div>

);



export default Home;