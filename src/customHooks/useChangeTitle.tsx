import { useEffect, useState } from "react"

function useChangeTitle (ElementsIds:Array<string>,inSpanish:boolean){
  const [navTitle, setNavTitle] = useState("Home")
  useEffect(()=>{
    const obsCallback = (entries:any)=>{
      entries.forEach((entry:any)=>{
        if(!entry.isIntersecting)return;
        if(inSpanish === false){
          setNavTitle(entry.target.id)
        }else{
          if(entry.target.id === "Home" )setNavTitle("Home")
          if(entry.target.id === "About" )setNavTitle("Sobre mí")
          if(entry.target.id === "Skills" )setNavTitle("Habilidades")
          if(entry.target.id === "Experience")setNavTitle("Experiencia")
        }
      })
    }
    ElementsIds.forEach((el:string)=>{
      const observer = new IntersectionObserver(obsCallback,{threshold:0.7})
      const element:any = document.getElementById(el)
      observer.observe(element)
    })
  },[inSpanish,ElementsIds])
  return navTitle
}
export default useChangeTitle
