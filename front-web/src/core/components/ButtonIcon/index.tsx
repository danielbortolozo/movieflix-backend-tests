import './styles.scss';
import { ReactComponent as ArrowIcon } from '../../assets/img/arrow.svg';


type Props = {
  text: string;
}

const ButtonIcon = ({text}: Props) => (

    <div className="d-flex">
    <button className="btn btn-primary btn-icon">
      <h5>{text}</h5>      
    </button>  
    <div className="btn-icon-content">
        <ArrowIcon />
    </div>
    </div>  

);

export default ButtonIcon;