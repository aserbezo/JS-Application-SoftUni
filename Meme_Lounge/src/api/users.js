import { clearUserData, setUserData } from "../util";
import { get, post } from "./api";

export async function login (email, password){
    const result =  await post('/users/login', {email,password})

    const userData = {
        id : result._id,
        username: result.username,
        email : result.email,
        gender: result.gender,
        acessToken : result.acessToken
    }

    setUserData(userData)

    return result
}

export async function register(username,email,password,gender){
    const result = await post('/users/register',{username, email,password,gender})

    const userData = {
        id : result._id,
        username: result.username,
        email : result.email,
        gender: result.gender,
        acessToken : result.acessToken
    }

    setUserData(userData)

    return result
}

export function logout(){
    get('/users/logout')
    clearUserData()
}