import './styles.scss';
import AuthCard from '../Card';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ButtonIcon from '../../../../core/components/ButtonIcon';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { makeLogin, makePrivateRequest } from '../../../../core/utils/request';
import { saveSessionData } from '../../../../core/utils/auth';


type FormData = {
    username: string;
    password: string;   
}
type LocationState = {
    from: string;
}

const Login = () => {
    
    const { register,  handleSubmit, formState: { errors } } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
   
    const history = useHistory();
    let location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/movies" } };



    const onSubmit = (data: FormData) => {
        
        makeLogin(data)
          .then(response => {
            setHasError(false);
             saveSessionData(response.data);
             history.replace(from);          
           })
          .catch(() => {
            setHasError(true)
          })
                

      //  
        console.log('salvar username', data.username);
        console.log('salvar password:', data.password);
        
    }
    return (
        <AuthCard title="login">
            {hasError && (
                <div className="alert alert-danger mt-5" role="alert">
                    Usuário ou senha inválidos!
                </div>
            )}

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                <div className="margin-botton-30">
                    <input type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''} `}
                        placeholder="Email"
                        {...register("username", {
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div>
                    <input type="password"
                        className="form-control input-base"
                        placeholder="Senha"
                        {...register("password", { required: "Campo obrigatório" })}
                        
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}                  
                </div>
                
                <div className="login-submit">
                  
                       <ButtonIcon text="Logar" />
                      
                </div>
              
            </form>
        </AuthCard>
    );
};


export default Login;