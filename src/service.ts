import axios from 'axios';
// <script type='text/javascript'>
//     window.GlobalConfig = {
//       logoutUrl: '/',
//       env: 'daily',
//       baseURL: 'https://daily-deepvision-console.alibaba.netbaseURL',
//     }
//   </script>

const noBodyMethod = ['get', 'delete'];

async function buildRequest(method: string, url: string, params: any) {
  let param = {};
  let methods = method;
  let config = {};
  if (noBodyMethod.indexOf(method) >= 0) {
    param = {
      params: { ...params },
      // ...reqConfig
    };
    config = { headers: { 'Content-Type': 'application/json' } };
  } else {
    param = JSON.stringify(params);
    config = {
      // ...reqConfig,
      headers: { 'Content-Type': 'application/json', dataType: 'json' }
    };
  }
  return axios[methods](url, param, config)
    .then((response: any) => {
      const data = response.data;
      return data;
    }).catch((err: any) => {
      console.log(err)
    });
}

export const get = (url: string, params = {}) => buildRequest('get', url, params);

export const post = (url: string, params = {}) => buildRequest('post', url, params);
