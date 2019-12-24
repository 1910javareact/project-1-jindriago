import { ersUserClient } from "./ers-user-client"

export async function ersSLogin(username:string, password:string){
    const credentials = {
        username,
        password
    }
    try{
        const response = await ersUserClient.post('/login', credentials)
        if(response.status===200){
            return{
                status:response.status,
                body: response.data
            }
        }else{
            return{
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
    
}
export const getAllUsers = async () => {
    try{
        let response = await ersUserClient.get('/users')
        if(response.status === 200){
            return{
                status:response.status,
                body:response.data
            }
        }else{
            return {
                status:response.status,
                body:undefined
            }
        }
    }catch(e){
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}