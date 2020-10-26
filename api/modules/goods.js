import request from "../request";

/**
 * 商品相关接口 
 */

/**
 * 获取分类 无需授权
 * 
*/
export function getCategoryList()
{
  return request.get("/api/getCategoryList",{},{ noAuth : true});
}