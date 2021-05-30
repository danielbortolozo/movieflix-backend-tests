

import './styles.scss';
import { ReactComponent as StarIcon } from '../../../../core/assets/img/star.svg';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router';


const CardReview = () => {
    // const { movieId } = useParams<ParamsType>();
    // const [movie, setMovie] = useState<Movie>();


    // useEffect(() => {
    //     makePrivateRequest({ url: `/movies/${movieId}` })
    //         .then((response) => {
    //             setMovie(response.data);
    //         });
    // }, [movieId]);

    return (
        <>
            <div className="card-review-container">
               
                    <div className="card-review-content" key="User">
                        <div className="card-review-icon">
                            <StarIcon />
                            <h5 className="card-review-text">User</h5>
                        </div>
                        <div className="card-review-response">
                            <h5 className="card-review-response-text">Teste</h5>
                        </div>
                    </div>
               
            </div>
        </>

    );
}

export default CardReview;
