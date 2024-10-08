// 导入request.js
import request from '@/utils/request.js'


//文章分类列表查询
export const articleCategoryListService = () => {
    //获取token状态
    // const tokenStore = useTokenStore()
    //通过请求头Authorization携带token
    return request.get('/category')
}

//添加文章分类
export const articleCategoryAddService = (categoryDialog) => {
    return request.post('/category', categoryDialog)
}

//更新文章分类
export const articleCategoryUpdateService = (categoryDialog)=>{
    return request.put('/category',categoryDialog)
}

//删除文章分类
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id='+id)
}

//文章列表查询
//params是指的分页参数
export const articleListService = (params) => {
    return request.get('/article/list', { params: params })
}

//添加文章
export const articleAddService = (articleModel)=>{
    return request.post('/article',articleModel)
}