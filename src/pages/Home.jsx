import axios from "axios"
import { useState } from "react"
import CardCom from "../component/CardCom"

// import { useNavigate } from "react-router-dom"

export default function Home(){
    const [listData,setListData] = useState([])
    // const navigate = useNavigate()
    const getData = ()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
    console.log(res.data);
    setListData([...res.data])
        }).catch((err)=>{
   console.log(err.data);
        })
    } 
    return <>
        {/* <!-- NAVBAR START --> */}
    <div>
    {/* <nav className="navbar navbar-expand-lg bg-white sticky-top">
        <div className="container">
        <img className="mt-3" src="https://preview.colorlib.com/theme/ogani/img/logo.png" alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNav">
            <ul className="ms-auto navbar-nav fw-bold me-5">
              <li className="mx-3 mt-3 nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="mx-3 mt-3 nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li className="mx-3 mt-3 nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li>
              <li className="mx-3 mt-3 nav-item">
                <a className="nav-link disabled">Discount</a>
              </li>
            </ul>
          </div>
        </div>  
      </nav> */}
    </div>
    {/* <!-- NAVBAR END --> */}

    {/* <!-- CONTAINER START --> */}
 <div className="container-fluid">
    <img className="w-100 h-50" src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
 </div>
    {/* <!-- CONTAINER END --> */}

    {/* <!-- CARD START --> */}
     
    <div className="products text-center my-5" id="products"><h1>PRODUCTS</h1></div>
    <div className="text-center">
    <button className="btn bg-primary text-white" onClick={getData}>Show Products</button>
    </div>
    <CardCom data = {listData} />
    

{/* 
    // <!-- CARD END -->
 
    // <!-- BLOG START --> */}
    <div className="blog text-center my-5" id="blog"><h1>BLOG</h1></div>
    <div className="container mt-5">
        <div className="row g-5">
            <div className="col-lg-6 col-md-6 col-12">
                <div>
                    <img className="w-100" src="https://images.unsplash.com/photo-1549037173-e3b717902c57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/> 
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <div>
                    <img className="w-100" src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- BLOG END --> */}

   {/* <!-- FOOTER START --> */}
   <div className="footerParent mt-5">
    <div className="footerChild bg-dark text-center p-3">
        <p className="text-white">This Simple And Basic Website Is Made by <a class="text-white" href="mailto:">abc@gmail.com</a> For Nested Routing Practise</p>
    </div>
   </div>
   {/* <!-- FOOTER END --> */}

 
    </>
}