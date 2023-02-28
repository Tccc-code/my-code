
export const Menus = [{
  key: 'homepage',
  label: '首页',
  path: '/homePage',
}, {
  key: 'demo',
  label: 'Code-Demo',
  children: [{
    key: 'card-demo',
    path: '/cardDemo',
    label: '卡牌翻转Demo'
  }, {
    key: 'spray-demo',
    path: '/sprayDemo',
    label: '粒子喷漆Demo'
  }]
}]