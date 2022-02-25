export const secondFromat=(second)=>{
    let minutes = parseInt(second/60%60)
    let seconds = parseInt(second%60)
    // console.log(minutes+":"+seconds);
    return numberOf(minutes)+":"+numberOf(seconds)
}
//小于10前面补零的方法
 const numberOf = (number)=>{
    if(number<10){
        return "0"+number
    }
        return number
}
