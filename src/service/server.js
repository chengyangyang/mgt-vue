import {post,get,patch,put} from './http'

export const comData = data =>get("../static/data/shap.json",data);      //shap购物车
