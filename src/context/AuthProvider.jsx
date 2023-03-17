import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"

//const initialState={
   // logged:false,
//}

const init=()=>{
const user= JSON.parse(localStorage.getItem('user'));
return{
  logged:!!user,
  user: user,
}
}

const AuthProvider = ({children }) => {

    const [state, dispatch] = useReducer(authReducer,{},init);

    const login = async(name = '')=> {

            const user= {id:'ABC',name}

               const action = {type:types.Login, payload: user }

                 localStorage.setItem('user',JSON.stringify(user));

                    dispatch(action);
    }

              const logout= ()=>{
                localStorage.removeItem('user');
                const action = {types:types.Logout};
                dispatch(action);
              }

    
  return (
    <AuthContext.Provider value={{
      ...state,
      login:login,
      logout:logout,
    }}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
