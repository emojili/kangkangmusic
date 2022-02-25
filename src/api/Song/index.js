import request from "axios"

export const getAlbummid=async(albummid)=>await request.get('/getAlbumInfo?albummid=' + albummid)
// 歌曲详情
export const getSonginfo=(songmid)=>request.get('/getSongInfo?songmid=' + songmid)

// 歌词详情
export const getLyric=(songmid)=>request.get('/getLyric?songmid=' + songmid + '&isFormat=true')

// 播放链接
export const getMusicPlay=(songmid)=>request.get('/getMusicVKey?songmid=' + songmid)

// 专辑图片
export const getImageUrl=(albummid)=>request.get('/getImageUrl?id=' + albummid)
//   // 相似歌手
//   async getSimilarSinger(singermid) {
//     return await request.get('/getSimilarSinger?singermid=' + singermid)
//   },
//   // 获取评论
//   async getComments(albumid, pagesize) {
//     return await request.get('/getComments?id=' + albumid + '&pagesize=' + pagesize)
//   },
//   // 获取歌手照片
//   async getSingerimg(name) {
//     return await request.get('/getSearchByKey?key=' + name)
//   },
//   // 获取mv链接
//   async getMvPlay(mvid) {
//     return await request.get('/getMvPlay?vid=' + mvid)
//   },
//   // 获取歌手被关注数量
//   async getSingerStarNum(singermid) {
//     return await request.get('/getSingerStarNum?singermid=' + singermid)
//   },
//   // 获取歌手热歌
//   async getSingerHotsong(singermid) {
//     return await request.get('/getSingerHotsong?singermid=' + singermid)
//   },
//   // 获得歌手mv
//   async getSingerMV(singermid) {
//     return await request.get('/getSingerMV?singermid=' + singermid)
//   }

