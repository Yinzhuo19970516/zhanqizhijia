import request from '../common/request.js'
export function getCompanyGame(){
    return request({
        url:'/company/game',
        method:'GET'
    })
}
export function getModelByGame(params){
    return request({
        url:'/game/'+`${params.id}`+'/model',
        method:'GET',
        data:params
    })
}
export function getModelById(params){
    return request({
        url:'/model',
        method:'GET',
        data:params
    })
}