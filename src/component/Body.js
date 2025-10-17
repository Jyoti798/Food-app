import  ResturantCart  from "./Resturant";

import { useEffect, useState } from "react";
 const Body =()=>{
   
const [ListOfResturant,SetListOfResturant]=useState([]);

useEffect(()=>{
fetchData();
},[])

const fetchData=async ()=>{
   const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.7314295&lng=83.4331276&carousel=true&third_party_vendor=1");
   const json=await data.json();
   console.log(json);
   const resData=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   console.log(resData);
   SetListOfResturant(resData);
}
   const filterResturant=()=>{
            const filterRes=ListOfResturant.filter(res=>res.info.avgRating>4)
                SetListOfResturant( filterRes);
           }
            
    return (
        <div className="body">
         <div className="search">
           <button onClick={filterResturant}>Top Rated Resturant</button>
            </div>    
        <div className="cart">

     {  ListOfResturant.map((resturant)=>(    
    <ResturantCart key={resturant?.info?.id} resData={resturant} />
     ))
    }
       </div>
        </div>
    );
 };
 export default Body;