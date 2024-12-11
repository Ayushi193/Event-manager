
import axios from "axios"

export class AuthLogin{

     API_END_POINT="http://localhost:8000/api/v1"

   
     async createAccount({ email, password}){
        
        
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


const login=new AuthLogin()

export default login