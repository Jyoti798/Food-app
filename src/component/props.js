  const Child=(props)=>{
    console.log(props);
    console.log(props.xyz);
  }
const App=()=>{
return (
    <Child xyz="abc" pqr="ABC" />
   
);
};