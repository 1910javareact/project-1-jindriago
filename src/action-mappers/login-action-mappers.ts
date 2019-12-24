import { ersSLogin } from "../remote/ers-clients/ers-user"



export const ersLoginTypes = {
    INVALID_CREDENTIALS: 'ERS_LOGIN_INVALID_CREDENTIALS',
    SUCCESSFUL_LOGIN: 'ERS_LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'ERS_LOGIN_FAILED_LOGIN'
}


export const ersLogin = (username:string, password:string) => async (dispatch:any) => {

    try{
        let res = await ersSLogin(username, password)
        if(res.status === 200){
            dispatch({
                type:ersLoginTypes.SUCCESSFUL_LOGIN,
                payload:{
                    user:res.body
                }
            })
        }else{
            dispatch({
                type:ersLoginTypes.INVALID_CREDENTIALS
            })
        }
    }catch(e){
        dispatch({
            type:ersLoginTypes.UNSUCCESSFUL_LOGIN
        })
    }
    
}

