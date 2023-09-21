/**
 * author: 林欣
 * date: 2020.5.15
 * describe: 首页模块路由
 * options:
 *  - path       路由路径（必须）
 *  - redirect   路由重定向地址（可选）
 *  - name       路由名称
 *  - meta       路由自定义参数 { title:string [路由视图标题名称], auth:array [权限字段数组] }
 *  - component  路由引用视图组件
 *  - children   嵌套子路由
 */
export default [
  // 重定向
  {path: '*', redirect: '/error', replace: true},
  {path: '/', redirect: '/home', replace: true},
  // 首页
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  // 错误页
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/home/error.vue')
  }
]
