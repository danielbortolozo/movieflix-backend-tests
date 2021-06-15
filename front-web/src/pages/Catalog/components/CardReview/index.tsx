import { ReactComponent as StarIcon } from '../../../../core/assets/img/star.svg';
import { Review } from '../../../../core/types/Movie';
import './styles.scss';

type Props = {
    review: Review;   
}
const CardReview = ({ review }: Props) => {    
        
    return (
        <>
        <div className="card-review-container">
            <div className="card-review-content" key="User">
               <div className="card-review-icon">
                  <StarIcon />
                  <h5 className="card-review-text">{review.user.userName}</h5>
               </div>
               <div className="card-review-response">
                  <h5 className="card-review-response-text">{review.text}</h5>
               </div>
            </div>               
        </div>
        </>
    );
}

export default CardReview;
