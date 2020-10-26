import { HTTP_REQUEST_URL , HEADER, TOKENNAME} from '@/config/app';


/**
 * 发送请求
 */
function baseRequest(url, method, data)
{
	const header = HEADER;

  return new Promise((reslove, reject) => {
    uni.request({
      url: HTTP_REQUEST_URL + url,
      method: method || 'GET',
      header: HEADER,
      data: data || {},
      success: (res) => {
    //     if (res.data.status == 200)
    //       reslove(res.data, res);
    //     else if ([410000, 410001, 410002].indexOf(res.data.status) !== -1) {
		  // // toLogin();
    //       reject(res.data);
    //     } else
    //       reject(res.data.msg || '系统错误');
		reslove(res.data);
      },
      fail: (msg) => {
        reject('请求失败');
      }
    })
  });
}

const request = {};

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
  request[method] = (api, data, opt) => baseRequest(api, method, data, opt || {})
});



export default request;