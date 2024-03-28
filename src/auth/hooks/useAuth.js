import { useReducer } from "react";
import Swal from "sweetalert2";
import { loginUserService } from "../../services/authService";
import { loginReducer } from "../reducers/loginReducer";


//12. ponemos el sessionStorage.setItem 
//esto es string lo convertimos a json
const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}



export const useAuth = () => {

    //9. implementamos el Reducer que viene de loginReducer 
    //initialLogin es un objeto
    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    //11. implementamos el handlerLogin(); que viene  de LoginPage

    //implementamos un login simulado
    const handlerLogin = ({username, password}) => {
       
        //lo pasamos a authService
        // if( username === 'admin' && password === '123') {
        
        //llamamos la funcion del authService
        const isLogin = loginUserService({username, password});
       
        //si es true guarda el usuario porque es un booleano
        if(isLogin)
          {
           const user = {username: 'admin'}
           dispatch({
               type: 'login',
               payload: user,
           });
           //convertimo a un json
           sessionStorage.setItem('login', JSON.stringify({
               isAuth: true,
               user,
           }));
        } else {
            Swal.fire('Error Login', 'Username o password invalidos', 'error');
       }
   
}

//borra la sesion 
const handlerLogout = () => {
   dispatch({
       type: 'logout',
   });
   sessionStorage.removeItem('login');
}


return{

    //regresamos en el return lo que ocupamos en el useAuth y que viene del UsersApp
     login,
     handlerLogin,
     handlerLogout,

}





}