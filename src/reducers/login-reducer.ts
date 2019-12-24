import { ILoginState } from "."
import { User } from "../models/user"
import { ersLoginTypes } from "../action-mappers/login-action-mappers"
import { Role } from "../models/role"


const initialState: ILoginState = {
    user: new User(0,'','','','','',new Role(0,''))
}



export const loginReducer = (state = initialState, action:any) => {
    
    switch (action.type) {
        case ersLoginTypes.SUCCESSFUL_LOGIN:{

            return {
                ...state,
                user:action.payload.user
            }
        }
        default:
            return state
    }

}