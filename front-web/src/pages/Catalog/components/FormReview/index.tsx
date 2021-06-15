import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';

import { getSessionData } from '../../../../core/utils/auth';
import { makePrivateRequest } from '../../../../core/utils/request';
import './styles.scss';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 


type ParamsType = {
    movieId: string;
}
type LocationState = {
    from: string;
}

type FormState = {
    text: string;
    userId: number;
    idMovie: number;
    user?: User;
}
type User = {
    id:  number | undefined ;
    userName?: string;
}

const FormReview = () => {

    const { register, handleSubmit, setValue } = useForm<FormState>();
    const history = useHistory();
    const { movieId } = useParams<ParamsType>();
    const sessionData = getSessionData();
    const [usuario, setUsuario] = useState<User>();

    let location = useLocation<LocationState>();
    const { from } = location.state || { from: { pathname: "/movies" } };

   
    useEffect(() => {
        setUsuario({id: sessionData.userId})          
    }, [setUsuario])

    const onSubmit = (formData: FormState) => {
        formData.idMovie = parseInt(movieId);
        formData.user = usuario;
        
        const payload = { ...formData};
        makePrivateRequest({
            method: 'POST',
            url: '/reviews',
            data: payload
        })
            .then(() => {
                 
                toast.success('Avaliação cadastrado com sucesso!')
            
               history.replace(from)
                  console.log('chamar toast;;;');
               
                
            })
            .catch(() => {
                alert('Error ao salvar avaliação.');
                toast.error("Erro em cadastrar a avaliação");
            });
    }


    const getMessageSuccess = () => {
        return toast.success('Avaliação cadastrado com sucesso!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
        
    }

    return (
<>
<ToastContainer />
        <form
        
            onSubmit={handleSubmit(onSubmit)}
            className="form-review-container">
            <textarea               
                {...register("text", {required: "Campo obrigatório."})}
                name="text"
                className="form-review-text"
                placeholder="Digite aqui a sua avaliação..."
            ></textarea>

            <button className=" form-review-button">
                Salvar avaliação
            </button>
        </form>
</>
    );
}

export default FormReview;