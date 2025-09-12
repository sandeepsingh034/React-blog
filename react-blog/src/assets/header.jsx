function Header() {
  return (
    <div>
      <h3><Work/></h3>
      <h1>This is a header file</h1>
      <ButtonWork/>
    </div>
  )
}

function Work (){
return(
  <h1> I am working over here </h1>
)
}

 export function ButtonWork (){
  return (
    <button onClick={()=> alert("yes you have clicked")}> CLick</button>
  )
}



export default Header;
