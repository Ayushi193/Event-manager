import axios from "axios";



class problemService{
    API_END_POINT="http://localhost:8000/api/v1"

    

    async getProblems(collegeName){
       
        try {
            
        const config={
            headers:{
                "Content-Type":"application/json",
               
            }
        }
         
       const {data}= await axios.post(`${this.API_END_POINT}/problems/getproblems`,{
            collegeName
        },config)
    
        
       return data;
        } catch (error) {
            throw error
        }
    }

    async adminregister({email,fullName,password,college}){

        try {
            const config={
                headers:{
                    "Content-Type":"application/json",
                   
                }
            }
    
           const {data}= await axios.post(`${this.API_END_POINT}/admin/register`,{
                email,
                fullName,
                password,
                college
            },config)

            if(data){
                return await this.adminlogin({email,password})
            }else {
                return data
            }
            
            return data
        } catch (error) {
            throw error
        }
    }

    async adminlogin({ email, password}){
        console.log(email);
        const config={
            headers:{   
                "Content-Type":"application/json"
            },
            
        }
      const {data} = await axios.post(`${this.API_END_POINT}/admin/login`,{
          email,
          password,
        },config)
        console.log(data);
        return data;
     }

     async getSolutions({problemId}){
        //console.log(problemId);
        
       
        const config={
            headers:{
                "Content-Type":"application/json",
               
            }
        }
         
        if(!problemId){
            throw error("Problem id is not there")
        }

       const solution= await axios.post(`${this.API_END_POINT}/problems/getsolutions`,{problemId:problemId},config)
        
       
       
        
         return solution


     }

     async getSolbyId(userId){
     
        console.log(userId);
        

        const config={
            headers:{
                "Content-Type":"application/json",
               
            }
        }
         
        if(!userId){
            throw error("Problem id is not there")
        }

       const solution= await axios.post(`${this.API_END_POINT}/problems/getsolutionbyid`,{userId},config)
        
       return solution
     }

     async problemStatement(data,adminData){
        const config={
            headers:{
               Authorization:`Bearer ${adminData.data.accessToken}`,
                "Content-Type":"application/json",
               
            }
        }
       
        const problem =await axios.post(`${this.API_END_POINT}/problems/`,{
            title:data.title,
            description:data.content,
            time:data.time,
            status:true,
        },config)
       console.log(problem);
       
        return problem
      
     }

     async submitSolution(data,userData,id){
 
        console.log(id.id);
        const config={
            headers:{
               Authorization:`Bearer ${userData.accessToken}`,
                "Content-Type":"application/json",
            }
        }
       
        
      const solution= await axios.post(`${this.API_END_POINT}/problems/solutions`,{
         githubLink:data.githubLink,
         videoLink:data.youtubeLink,
         solutionDescription:data.description,
         title:data.title,
         problem:id.id,
         },
        config
    )

    console.log(solution.data);
    return solution.data
    
     
     }

}

const problemservice=new problemService()


export default problemservice
