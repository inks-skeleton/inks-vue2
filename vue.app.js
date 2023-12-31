/**
 * author: 林欣
 * describe: 项目易用配置
 * warning: 项目最常修改的配置（含编译配置及相关请求配置），请勿随意删除
 * @param {Map} PROXY_API 代理api列表
 * @param {String} AXIOS_BASE_URL 当前axios base url
 * @param {Array} SASS_GLOBAL_VAR 全局引用sass变量
 * @param {String} DEV_HOST devServer host
 * @param {Number} DEV_PORT devServer port
 * @param {String} APP_NAME 预备的站点名字
 * @param {String} PUBLIC_PATH 站点部署目录
 * @param {String} ICONFONT_URL 阿里图标Font Class 生成图标在线地址 www.iconfont.cn
 * @param {String} ICONFONT_OUT_PATH 自动生成阿里图标字体图标输出路径
 */
export const PROXY_API = new Map([
  [ 'prod', '/lxvueapi' ],
  [ 'dev', '/' ],
  [ 'mock', 'https://mock.lx.test.hcyan.cn/mock/5ea03a75f439060016f1744c/template' ]
])
export const AXIOS_BASE_URL = process.env.NODE_ENV === 'development' ? '/dev' : PROXY_API.get('prod')
export const SASS_GLOBAL_VAR = [
  './src/assets/sls/variable/setting.scss',
  './src/assets/sls/variable/mixins.scss'
]
export const DEV_HOST = '0.0.0.0'
export const DEV_PORT = 10086
export const APP_NAME = 'Lx Vue Template'
export const PUBLIC_PATH = process.env.BASE_URL
export const ICONFONT_URL = '//at.alicdn.com/t/font_1868794_g8i53mjlhlc.css'
export const ICONFONT_OUT_PATH = 'src/assets/iconfont'
