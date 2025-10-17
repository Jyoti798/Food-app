import  ResturantCart  from "./Resturant";
import { resList } from "../utility/model";
 const Body =()=>{
    return (
        <div className="body">
         <div className="search">
            <h1>search</h1>
            </div>    
        <div className="cart">

     {  resList.map((resturant)=>(    
    <ResturantCart key={resturant?.info?.id} resData={resturant} />
     ))
    }
       </div>
        </div>
    );
 };
 export default Body;