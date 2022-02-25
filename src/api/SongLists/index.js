import axios from "axios"
export const getSongLists=(params)=>axios.get("/getSongLists",{params})
// http://localhost:3200/getSongListDetail?disstid=77107736470
export const getSongListDetail=(id)=>axios.get(`/getSongListDetail?disstid=${id}`)

export const getSearch=async(data)=>await axios.get(`/getSmartbox?key=${data}`)
export const getSongListDetail1=(id)=>axios.get(`/getAlbumInfo?albummid=${id}`)