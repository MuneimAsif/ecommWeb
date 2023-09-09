import { useNavigate } from "react-router-dom"
export default function CardCom(props){
    const navigate = useNavigate();
    const sendData = (id)=>{
       navigate(`Details/${id}`)
    }
return <>
    <div className="container mt-5">
    <div className="row g-5">
        {props.data.map((x,i)=>
        <div className="col-lg-3 col-md-6 col-12">
            <div className="">
                <div className="card" key={i}>
                    <img class="cardImage" src= {x.image} className="card-img-top " width={'100%'} height={'300px'} alt="..." />
                    <div class="card-body text-center">
                      <a onClick={()=>sendData(x.id)} className="w-100 btn btn-primary">DETAILS</a>
                    </div>
                  </div>
            </div>
        </div>
        )}
</div>
</div>

    </>
}