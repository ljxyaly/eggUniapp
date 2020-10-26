import request from "../request";

/**
 * 公共接口
 */


/**
 * 获取主页数据 无需授权
 * 
*/
export function getHome()
{
  return request.get("/api/product/list4phone",{},{ noAuth : true});
}





