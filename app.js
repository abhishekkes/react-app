import React from "react"
import ReactDOM from "react-dom"

const parent=document.getElementById("parent");
const root=ReactDOM.createRoot(parent);


const Msg=()=>{
  return <h1>Hello From Raect JS</h1>

}

root.render(<Msg/>);