// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

var templats = [
  {id:1,image:'template1.png',form_structure:{
    
  }},
  {id:2,image:'template2.png',form_structure:{
    
  }},
  {id:3,image:'template3.png',form_structure:{
    
  }},
  {id:4,image:'template4.png',form_structure:{
    
  }},
  {id:5,image:'template5.png',form_structure:{
    
  }}
]

export default async(req:NextApiRequest,res:NextApiResponse)=>{
  let filteredTemplates:any = []
  if(req.query.id == undefined){
    res.status(200).json(templats)
  }else{
    templats.some(temp => {
      if(temp.id == +req.query.id){
        filteredTemplates.push(temp)
      }
    })
    res.status(200).json(filteredTemplates)
  }
}