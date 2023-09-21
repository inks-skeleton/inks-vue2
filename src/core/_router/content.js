/**
 * author: 林欣
 * date: 2020.5.15
 * describe: 内容模块路由
 * options:
 *  - path       路由路径（必须）
 *  - redirect   路由重定向地址（可选）
 *  - name       路由名称
 *  - meta       路由自定义参数 { title:string [路由视图标题名称], auth:array [权限字段数组] }
 *  - component  路由引用视图组件
 *  - children   嵌套子路由
 */
export default [
  // 内容页
  {
    path: '/content',
    name: 'content',
    meta: {auth: ['logged']},
    component: () => import('@/views/content/index.vue')
  },
  // 内容详情页
  {
    path: '/content/item/:id',
    name: 'content_item',
    meta: {auth: ['logged']},
    component: () => import('@/views/content/item.vue')
  }
]
