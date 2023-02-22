import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import AppLayout from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <AppLayout />
    </Router>
  </ConfigProvider>
)