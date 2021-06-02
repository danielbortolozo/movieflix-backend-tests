import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

type FormState = {
    text: string;
    userId: number;
    movieId: number;
}


const FormReview = () => {

    const { register, handleSubmit, setValue } = useForm<FormState>();
    const history = useHistory();


    // useEffect(() => {
    //     makePrivateRequest({ url: '/reviews' })
    //         .then(response => {
    //             setValue('text', response.data.text);
    //             setValue('userId', response.data.userId);
    //             setValue('movieId', response.data.movieId);
    //         })
    // }, [setValue])

    // const onSubmit = (formData: FormState) => {
    //     formData.movieId = parseInt(movieId);
    //     const payload = { ...formData };
    //     makePrivateRequest({
    //         method: 'POST',
    //         url: '/reviews',
    //         data: payload
    //     })
    //         .then(() => {
    //             toast.success("Avaliação cadastrada");
    //             history.go(0);
    //         })
    //         .catch(() => {
    //             toast.error("Erro em cadastrar a avaliação");
    //         });
    // }

    return (
        <form
        //    onSubmit={handleSubmit(onSubmit)}
            className="form-review-container">
            <textarea
                {...register("text")}
                name="text"
                className="form-review-text"
                placeholder="Digite aqui a sua avaliação..."
            ></textarea>

            <button className=" form-review-button">
                Salvar avaliação
            </button>

        </form>
    );

}

export default FormReview;