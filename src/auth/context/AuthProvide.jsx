import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

/* const initialState = {
    logged: false
} */

const init = () => {
  const user = JSON.parse( localStorage.getItem("user") );

  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvide = ({ children }) => {

   const [ authState , dispath ] =  useReducer( authReducer , {} , init );

   const login = ( name = "" ) => {

      const user = { id: "ABC", name }

      const action = {
        type: types.login,
        payload: user 
      }

      localStorage.setItem( "user" , JSON.stringify(user))

      dispath(action)
   }

   const logout = () => {

    localStorage.removeItem("user");
    const action = { 
      types: types.logout
    }
    dispath(action)

   }

  return (
    <AuthContext.Provider value={{ 
        //  Propertyes
        ...authState,

        //Methods
        login: login,
        logout: logout
      }}>
        { children }
    </AuthContext.Provider>
  )
}
