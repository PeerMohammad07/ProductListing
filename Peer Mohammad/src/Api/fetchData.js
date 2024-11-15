import Api from "./axios"

export const fetchData = async ()=>{
  return await Api.get("/products")
}