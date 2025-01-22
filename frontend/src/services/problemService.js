import axios from "axios";
import { data } from "react-router-dom";

class problemService{
    API_END_POINT="http://localhost:8000/api/v1"

    

    async getProblems(collegeName){
       
        
        const config={
            headers:{
                "Content-Type":"application/json",
               
            }
        }
         
       const {data}= await axios.post(`${this.API_END_POINT}/problems/getproblems`,{
            collegeName
        },config)
    
        
       return data;
    }
}

const problemservice=new problemService()


export default problemservice
