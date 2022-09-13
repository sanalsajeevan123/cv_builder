// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

var templats = [
  {id:1,image:'template1.png'},
  {id:2,image:'template2.png'},
  {id:3,image:'template3.png'},
  {id:4,image:'template4.png'},
  {id:5,image:'template5.png'}
]

export default async(req:NextApiRequest,res:NextApiResponse)=>{
  res.status(200).json(templats)
}