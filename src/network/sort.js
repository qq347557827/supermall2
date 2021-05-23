import { request } from "./request";

export function getCategoryData() {
  return request({
    url: "/category"
  })
}

export function getCategoryItemData(maitKey){
  return request({
    url: 'subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryItemGoodsData(miniWallkey){
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey
    }
  })
}