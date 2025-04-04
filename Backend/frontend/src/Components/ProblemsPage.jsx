import React, { useEffect, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookText } from 'lucide-react';
import Description from './Description';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useParams } from 'react-router-dom';
import problemservice from '@/services/problemService';
import { useSelector } from 'react-redux';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { useForm } from 'react-hook-form';
import parse from "html-react-parser";
import Spinner from './Spinner';
import { ToastClose } from '@radix-ui/react-toast';



function  ProblemsPage () {
  const {id}=useParams()
  const userData=JSON.parse(localStorage.getItem("userData"))
  const [description,setDescription]=useState(String)
   const [problems,setProblems]=useState([])
   const { toast } = useToast()
   const [isSubmitting, setIsSubmitting] = useState(false)
     const [loading,setLoading]=useState(false)


  const form = useForm({
    
    defaultValues: {
      title: "",
      githubLink: "",
      youtubeLink: "",
      description: "",
    },
  })

  const fetchProblems=async()=>{
   try {
     setLoading(true)
     const res= await problemservice.getProblems(userData.data.user.college)
     
      setProblems(res.data)
      console.log(problems);
      setLoading(false)
      
   } catch (error) {
      setLoading(false)
      throw error
   }
    
    

  }
  useEffect(()=>{
    fetchProblems()
   
 },[])

  useEffect(()=>{
    problems.map((p)=>{
      if(p._id===id){
        setDescription(p.description)
        
        
      }
     })
  },[problems])
  
  const onSubmit=async(data)=>{
    try {
      setLoading(true)
      console.log(data);
      await problemservice.submitSolution(data,userData.data,{id})
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast({
        variant:"",
        title: "Failed to submit solution",
        description: "You have already submitted the solution",
        action:<ToastClose>X</ToastClose>
      })
    
      
      throw error
    }
  }
  



   
    return (
        
        <div className='w-full h-auto bg-slate-800 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 bg-slate-700 h-[99%] sm:m-4 mt-2 border md:m-2 border-slate-300 text-white rounded-md'>
         <div className='w-full bg-slate-800 h-9 flex gap-1 p-2 rounded-md'><BookText/>Problem Description</div>
         <div className='w-full h-[900px]'>
         <ScrollArea className="h-[900px] p-2 w-full overflow-y-auto ">
         {parse(description)}
            </ScrollArea>
         </div>
        
        </div>
        
      
     
     <Card className="border-slate-200 w-full md:w-1/2 sm:m-4 mt-2  md:m-2 bg-slate-700 text-white dark:border-slate-800">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input className="text-white" placeholder="Enter your project title" {...field} />
                  </FormControl>
                  <FormDescription className="text-black font-bold text-[15px]">A clear and concise title for your hackathon project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="githubLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Repository</FormLabel>
                  <FormControl>
                    <div className="relative">
                     
                      <Input className="pl-10 text-white"
                      placeholder="https://github.com/username/repository"
                      {...field} />
                    </div>
                  </FormControl>
                  <FormDescription className=" text-black font-bold text-[15px]">Link to your project's GitHub repository.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="youtubeLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Demo Video</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input className="pl-10  text-white" placeholder="https://youtube.com/watch?v=..." {...field} />
                    </div>
                  </FormControl>
                  <FormDescription className=" text-black font-bold text-[15px]">Link to your YouTube demo video showcasing your project.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your solution, the problem it solves, technologies used, and any challenges you faced..."
                      className="min-h-[150px]  text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    <div className="flex justify-between  text-black font-bold text-[15px]">
                      <span>Detailed description of your project and solution.</span>
                      <span className="text-muted-foreground">{field.value.length}/2000</span>
                    </div>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
             {loading ? (<><Spinner/></>): (<> Submit Project</>)}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
    
      </div>
          
       
    )
}

export default ProblemsPage;