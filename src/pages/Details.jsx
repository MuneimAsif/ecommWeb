import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Details(){
    const [singleData,setSingleData] = useState({}) 
    const navigate  = useNavigate()
    const params = useParams()
    const renderData = ()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res)=>{
          console.log(res.data);
          console.log(params.id);
          setSingleData({...res.data})
        }).catch((err)=>{
            console.log(err.data);
        })
    }
    return <>
    <div className="d-flex justify-content-center">
    <div className="text-center mt-5 w-50 border p-5 rounded">
      <button className="my-5 btn bg-primary text-white" onClick={renderData}>Show Data</button> 
      
      <p><b>Category:</b> {singleData.category?? ""}</p>
      <p><b>Title:</b> {singleData.title?? ""}</p>
      <p><b>Description:</b> {singleData.description?? ""}</p>
      <p><b>Price:</b> {singleData.price?? ""} $</p>
 

      </div>
      </div>
    </>
}