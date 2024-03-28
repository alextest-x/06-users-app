//import { useReducer } from "react";
//import Swal from "sweetalert2";
//import { loginReducer } from "./auth/reducers/loginReducer";

import { useAuth } from "./auth/hooks/useAuth";
import { LoginPage } from "./auth/pages/LoginPage";
import { Navbar } from './components/layout/Navbar';
import { UsersPage } from "./pages/UsersPage";

/*
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/reducers/loginReducer";
*/

//10. ponemos los datos iniciales para p0nerlos en la funcion del Reducer
//const initialLogin =  {
//    isAuth: false,
////   user: undefined,
//}


export const UsersApp = () => {

    //llamamos lo que estamos utilizando en el useAuht
    const { login, handlerLogin, handlerLogout } = useAuth();

    return (
        <>
            {
                login.isAuth
                    ? (
                        <>
                            <Navbar login={ login } handlerLogout={handlerLogout} />
                            <UsersPage />
                        </>
                    )
                    : <LoginPage handlerLogin={handlerLogin} />
            }
     
        </> 
    );
}
