import React, { useEffect } from "react";

import './HomePage.scss'

const HomePage: React.FC<{}> = () => {
  return (
    <div className="home-page">
      <div>开发小技巧&前端小组件</div>
      <div style={{ width: 20, height: 12 }} />
      <div>谷歌允许跨域</div>
      <div>在cmd中打开"C:\Program Files\Google\Chrome\Application\chrome.exe"</div>
      <div>然后输入以下命令</div>
      <div>--args --disable-web-security --user-data-dir</div>
      <div>mac下chrome浏览器关闭跨域命令</div>
      <div>open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/电脑账户名称/Documents/MyChromeDevUserData</div>
      <div style={{ width: 20, height: 12 }} />
      <div>encodeURIComponent函数</div>
      <div>encodeURIComponent（）在url带图片链接之类的参数时包一下 可以防止被转义</div>
      <div style={{ width: 20, height: 12 }} />
      <div>视频播放组件</div>
      <div> <a href="https://www.npmjs.com/package/react-player" target='_blank'>https://www.npmjs.com/package/react-player"</a> 支持视频从那一秒跳转播放 具体api有demo</div>
      <div style={{ width: 20, height: 12 }} />
      <div> 阿里tnpm安装</div>
      <div>npm i -g tnpm --registry=http://registry.npm.alibaba-inc.com</div>
      <div>npm i npminstall -g --registry=https://registry.npm.alibaba-inc.com</div>
      <div>或者npm install tnpm -g --registry=https://registry.npm.alibaba-inc.com</div>
      <div style={{ width: 20, height: 12 }} />
      <div>可编辑Table</div>
      <div><a href="https://procomponents.ant.design/components/editable-table#renderformitem-%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BC%96%E8%BE%91%E7%BB%84%E4%BB%B6" target='_blank'>https://procomponents.ant.design/components/editable-table#renderformitem-%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BC%96%E8%BE%91%E7%BB%84%E4%BB%B6</a></div>
      <div style={{ width: 20, height: 12 }} />
      <div>react代码编辑器</div>
      <div><a href="https://github.com/scniro/react-codemirror2" target='_blank'>https://github.com/scniro/react-codemirror2</a></div>
      <div><a href="https://github.com/react-monaco-editor/react-monaco-editor" target='_blank'>https://github.com/react-monaco-editor/react-monaco-editor</a></div>
      <div style={{ width: 20, height: 12 }} />
      <div>vscode安装太慢解决方法</div>
      <div>将下载地址中的az764295.vo.msecnd.net 更换为  vscode.cdn.azure.cn 使用国内的镜像加速</div>
      <div style={{ width: 20, height: 12 }} />
      <div>cnpm安装</div>
      <div>npm install -g cnpm -registry=https://registry.npm.taobao.org</div>
      <div style={{ width: 20, height: 12 }} />
      <div>读取电子表格(excel等)</div>
      <div><a href="https://gitcode.net/mirrors/rockboom/sheetjs-docs-zh-cn?utm_source=csdn_github_accelerator" target='_blank'>https://gitcode.net/mirrors/rockboom/sheetjs-docs-zh-cn?utm_source=csdn_github_accelerator</a></div>
      <div className="icp">
        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023003826号</a>
      </div>
    </div>
  );
}

export default HomePage;