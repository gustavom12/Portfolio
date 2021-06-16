import React,{} from "react";
import './modalImage.sass'
// import x from "../../../assets/gustavo_mercado.pdf"
function ModalImage ({src}:{src:string}){
  return(
    <div className="trasnparentBg">
      <img src={src}  alt="" />
    </div>
  )
}
export default ModalImage
