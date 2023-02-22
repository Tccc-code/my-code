import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import { Menus } from '../menus';
import { PageRouters } from '../page-routers';
import './App.scss'


const { Header, Sider, Content } = Layout;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const ROUTES: any = [];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  // 菜单
  const generateMenu = (authMenu: any) => {
    authMenu.forEach((auth: any) => {
      if (auth) {
        auth.label = auth.type === 'menus' ? auth.label : <Link to={auth.path}>{auth.label}</Link>;
        if (auth.children) {
          generateMenu(auth.children);
        }
      }
    });
  }

  // 路由
  const generateRoute = (data: any) => {
    data.forEach((elm: any) => {
      if (elm.path) {
        ROUTES.push(
          <Route path={elm.path} key={elm.path} element={<elm.element />} />
        );
      }
      if (elm.children && elm.children.length > 0) {
        generateRoute(elm.children);
      }
    });
  }
  generateMenu(Menus)
  generateRoute(PageRouters)
  return (
    <Layout style={{ height: '100%' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src="https://gw.alicdn.com/imgextra/i3/O1CN0113o8Td1bCzJywZaxD_!!6000000003430-2-tps-1056-1216.png" alt="logo" />
          <div className='title'>Tccc-Code</div>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          items={Menus}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
        </Header>
        <Content>
          <Routes>
            {ROUTES}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;