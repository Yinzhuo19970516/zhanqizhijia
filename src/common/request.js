import { toast } from './tool'

let requestNum = 0

const addLoading = () => {
    // 增加loading 如果pending请求数量等于1，弹出loading, 防止重复弹出
    requestNum++
    if (requestNum === 1) uni.showLoading({
        mask: true
    })
}
const cancelLoading = () => {
    // 取消loading 如果pending请求数量等于0，关闭loading
    requestNum--
    if (requestNum === 0)  uni.hideLoading()
}

export default async function(params) {
    return new Promise((resolve ,reject)=>{
        addLoading()
        uni.request({
            url:''+params.url,
            header:{
                'Content-Type': params.contentType || 'application/x-www-form-urlencoded',
            },
            data: params.data,
            timeout: 60000,
            method: params.method || 'POST',
            success: (res) => {
                resolve(res.data)
            },
            fail (err) {
                setTimeout(() => {
                    toast('网络不给力啊，请您检查一下网络再试试吧')
                }, 10)
                reject(err)
            },
            complete () {
                cancelLoading()
            }
        })
    })
}