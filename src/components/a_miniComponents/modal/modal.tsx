import React, { useEffect, useRef } from "react";
import './modal.sass'
function Modal(
  { children, setModal, onDestroy, className }:
  { children?: any, setModal?: any, onDestroy?: any, className?: string }) {
  useEffect(()=>{
    const html:any = document.querySelector("html")
    if(!html)return;
    html.style.overflowY = "hidden"
    return () => {
    html.style.overflowY = "scroll"
    }
  },[])
  const modalRef: any = useRef()
  const contentRef: any = useRef()
  const removeModal = () => {
    modalRef.current.classList.add("fade-out")
    contentRef.current.classList.add("zoom-out")
    setTimeout(() => {
      onDestroy
        ? onDestroy()
        : setModal(false)
    }, 1000)
  }
  return (
    <div ref={modalRef} className="bg-transparent modalComponent flex" data-aos="fade">
      <div ref={contentRef} className={`content ${className}`} data-aos="zoom-in" data-aos-duration="1000">
        <i className="fas fa-times text-danger" onClick={removeModal} ></i>
        {children}
      </div>
    </div>
  )
}
export default Modal
