/**
 * author: 林欣
 * date: 2020.5.15
 * describe: 用户模块路由
 * options:
 *  - path       路由路径（必须）
 *  - redirect   路由重定向地址（可选）
 *  - name       路由名称
 *  - meta       路由自定义参数 { title:string [路由视图标题名称], auth:array [权限字段数组] }
 *  - component  路由引用视图组件
 *  - children   嵌套子路由
 */
export default [
  // 用户登录页
  {
    path: '/login',
    name: 'user_login',
    component: () => import('@/views/user/login.vue')
  },
  // 用户中心
  {
    path: '/user',
    name: 'user',
    meta: {auth: ['logged']},
    component: () => import('@/views/user/index.vue')
  }
]
