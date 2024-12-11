import axios from "axios"

export class AuthService{

     API_END_POINT="http://localhost:8000/api/v1"

   
     async createAccount({fullName, email, username, password,avatar}){
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
       
        console.log(data);
        
        return data;
     }

     async login({ email, password}){
        
        
        const config={
            headers:{
                "Content-Type":"multipart/form-data; boundary=<calculated when request is sent>"
            }
        }

      const {data} = await axios.post(`${this.API_END_POINT}/users/login`,{
          
          email,
          
          password,
           
        },config)
       
        console.log(data);
        
        return data;
     }
   
}


const service=new AuthService()

export default service