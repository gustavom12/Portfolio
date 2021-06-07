import { useEffect, useState } from "react"


function useFetch ({url, body}:{url:string, body?:any}){
  const data = useState(null)
  const loading = useState(false)
  const error = useState(null)
  useEffect(()=>{

  },[url])
}
export default useFetch
