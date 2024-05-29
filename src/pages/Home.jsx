import axios from "axios"
import { useState } from "react"
import CardCom from "../component/CardCom"
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoIosAddCircle } from "react-icons/io";
import { FaTruck } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa6";
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
    
    {/* <!-- NAVBAR END --> */}

    {/* <!-- BANNER START --> */}
 <div className="">
 <div className="backgroundImage">

    <nav class="navbar navbar-expand-lg  main_box">
<div class="navContainer container mt-5 bg-white p-2 rounded-1">
<a class="navbar-brand logo_h" href=""><img className="ms-5 " src="assets/logo.webp" alt="" /></a>


<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
<ul class="nav navbar-nav menu_nav ms-auto me-2">
<li class="nav-item active" className="me-4 fw-bold"><a class="nav-link home" href="">HOME</a></li>
<li class="nav-item active" className="me-4 fw-bold"><a class="nav-link shop" href="">SHOP</a></li>
<li class="nav-item active" className="me-4 fw-bold"><a class="nav-link blogs" href="">BLOGS</a></li>
<li class="nav-item active" className="me-4 fw-bold"><a class="nav-link contact" href="">CONTACT</a></li>
<LiaShoppingBagSolid id="LiaShoppingBagSolid"  className="mt-1 fs-3 me-5"/>
</ul>


</div>
</div>
</nav>
   
   <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-8 col-12">
        <div className="p-5">
               <h1 className=" h1a  fw-bold"><b>Nike New Collection!</b></h1>
               <p className="my-4" style={{color:'#aca7a7'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente tempora, doloremque sint quas, voluptatem eligendi qui ea vitae natus nihil, beatae veritatis corporis asperiores laudantium! Labore consequuntur harum quam.</p>
              <p class='addToCart' style={{fontSize:'0.8rem',fontWeight:'bold'}}> <IoIosAddCircle style={{color:'#ffa500',fontSize:'3.5rem'}} className="me-2" />ADD TO CART</p>
        </div>
      </div>
      
      <div className="col-lg-6 col-md-8 col-12">
        <div className="p-3">
         <img src="assets/bannerShoe.webp" alt="" className="mt-3" width={'105%'}  />
        </div>
      </div>
      
    </div>
   </div>

    </div>
 </div>
    {/* <!-- BANNER END --> */}

    {/* SERVICES START */}
    <div className="servicesContainer container" style={{color:'#ffffff',marginTop:'8%'}}>
        <div className="row p-5">

            <div className="col-lg-3 col-md-6 col-12">
                <div className="text-center">
                    <FaTruck className="fs-1 text-dark" />
                    <p className="mt-3 text-dark fw-bold">FREE DELIVERY</p>
                    <p style={{marginTop:'-15px', color:'grey'}}>Free Shipping On All Orders</p>
                </div>
                </div>
      
            <div className="col-lg-3 col-md-6 col-12">
                <div className="text-center">
                    <GiReturnArrow className="fs-1 text-dark" />
                    <p className="mt-3 text-dark fw-bold">RETURN POLICY</p>
                    <p style={{marginTop:'-15px', color:'grey'}}>Return Policy Available (Conditional)</p>
                </div>
                </div>
      
            <div className="col-lg-3 col-md-6 col-12">
                <div className="text-center">
                    <RiCustomerService2Fill className="fs-1 text-dark" />
                    <p className="mt-3 text-dark fw-bold">24/7 Support</p>
                    <p style={{marginTop:'-15px', color:'grey'}}>Always Available For You</p>
                </div>
                </div>
      
            <div className="col-lg-3 col-md-6 col-12">
                <div className="text-center">
                    <FaCoins className="fs-1 text-dark" />
                    <p className="mt-3 text-dark fw-bold">Secure Payment</p>
                    <p style={{marginTop:'-15px', color:'grey'}}>Secure Methods For Payment</p>
                </div>
                </div>
      
        </div>
    </div>
    {/* SERVICES END */}







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