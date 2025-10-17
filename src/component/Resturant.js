import { resList } from "../utility/model";

 const ResturantCart=(props)=>{

const {resData}=props;
 const {name,cloudinaryImageId,locality,areaName,costForTwo,avgRating,}=resData?.info;
 
 
   return (
      <div className="res-cart">
    <img className="res-img" alt="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+cloudinaryImageId}></img>
   <h3>{name}</h3>
   <h4>{locality}</h4>
   <h4>{areaName}</h4>
   <h4>{avgRating}</h4>
   <h4>{costForTwo}</h4>
    </div>
);
};

export default ResturantCart;

  

