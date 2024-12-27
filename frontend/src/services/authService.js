import axios from "axios"

export class AuthService{

     API_END_POINT="http://localhost:8000/api/v1"

   
     async createAccount({fullName, email, username, password,avatar}){
       try {
        console.log(fullName);
        const config={
            headers:{
                "Content-Type":"multipart/form-data; boundary=<calculated when request is sent>"
            }
        }
      const {data} = await axios.post(`${this.API_END_POINT}/users/register`,{
          fullName,
          email,
          username,
          password,
          avatar
        },config)
        if(data){
            console.log(data);
             return await this.login({email,password})
        }else{
            console.log(data);
        
           return data;
        }
       } catch (error) {
        throw  error;
       }
     }




     async login({ email, password}){
        console.log(email);
        const config={
            headers:{   
                "Content-Type":"application/json"
            },
            
        }
      const {data} = await axios.post(`${this.API_END_POINT}/users/login`,{
          email,
          password,
        },config)
        console.log(data);
        return data;
     }

     async getCurrentUser(user){

        const config={
            headers:{
                Authorization:`Bearer ${user.data.accessToken}`
            }
        }
      
        const data=await axios.get(`${this.API_END_POINT}/users/getcurrentuser`,config,{ withCredentials: true })
        return data

     }

     async logout(user){
        console.log(user.data.accessToken);

        const config={
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${user.data.accessToken}`
            }
        }
        
        const res =await axios.post(`${this.API_END_POINT}/users/logout`,config)
        console.log(res);
        
        return res
     }
   
}


const service=new AuthService()

export default service