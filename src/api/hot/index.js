import request from "axios"

export const getSearch=async(data)=>await request.get(`/getSmartbox?key=${data}`)