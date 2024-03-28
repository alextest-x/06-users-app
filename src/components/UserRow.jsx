export const UserRow = ( { handlerUserSelectedForm, handlerRemoveUser, id, username, email }) => {

    //  quitamos el del UserRow de las props: password
    /*
    la pasamos en el formulario 
    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }
    */

    return (
        <tr>
     
            <td> { id } </td>
            <td> { username } </td>
            <td> { email } </td>
        <td> 
            <button
                 type="button"
                 className="btn btn-secondary btn-sm"
                  onClick = { () => handlerUserSelectedForm({
                    id,
                    username,
                    email
                    //password
                    
                 })}
              >
                update
            </button>
        </td>       


        <td> 
            <button
               type="button"
               className="btn btn-danger btn-sm"
               //onClick = { () => onRemoveUser(id)}
                 onClick = { () => handlerRemoveUser(id)}
            
               >
                remove
            </button>
        </td> 
    </tr>

    )

}