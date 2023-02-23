import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import Moment from 'moment';
import { Menus } from '../menus';
import { PageRouters } from '../page-routers';
import { get } from './service'

import HomePage from './contents/HomePage/HomePage';

import './App.scss'


const { Header, Sider, Content } = Layout;
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const ROUTES: any = [
  <Route path="/" key="homepage" element={<HomePage />} />
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [weatherInfo, setWeatherInfo] = useState<any>([]);

  useEffect(() => {
    const getWeather = get('https://devapi.qweather.com/v7/weather/3d?location=101210106&key=147b70e4c794494a8c4aed130058685c');
    getWeather.then((res: any) => {
      if (res && res.code === '200') {
        setWeatherInfo(res)
      }
    })
  }, []);

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
          defaultSelectedKeys={['homepage']}
          items={Menus}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 12, background: colorBgContainer }}>
          <div className='weather'>
            <div className='weather-time right'>{weatherInfo?.updateTime ? Moment(weatherInfo?.updateTime).format('YYYY-MM-DD hh:mm:ss') : null}</div>
            <div className='weather-title right'>
              <div className='weather-label'>
                空气湿度:
              </div>
              <div className='weather-value'>
                {weatherInfo?.daily?.[0]?.humidity}%
              </div>
            </div>
            <div className='temp-max right'>
              <div className='weather-label'>
                最高温度:
              </div>
              <div className='weather-value'>
                {weatherInfo?.daily?.[0]?.tempMax}℃
              </div>
            </div>
            <div className='temp-min right'>
              <div className='weather-label'>
                最低温度:
              </div>
              <div className='weather-value'>
                {weatherInfo?.daily?.[0]?.tempMin}℃
              </div>
            </div>
            <div className='weather-vis right'>
              <div className='weather-label'>
                能见度:
              </div>
              <div className='weather-value'>
                {weatherInfo?.daily?.[0]?.vis}公里
              </div>
            </div>
            <div className='weather-tips'>本数据来自和风天气</div>
          </div>
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