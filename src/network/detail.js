import { request } from "./request";

export function get_detail_data(iid){
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}

export function recommends() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, shopInfo){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = shopInfo.services;
  }
}


export class Shop{
  constructor(shopInfo){
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods;
  }
}

export class Params {
  constructor(itemParams) {
    // this.tables = itemParams.rule.tables[0];
    // this.rule = itemParams.rule;
    this.tables = this.tableData(itemParams.rule.tables)
    this.key = itemParams.rule.key;
    this.disclaimer = itemParams.rule.disclaimer;
    this.set = itemParams.info.set;  
  }
  tableData(tables){
    if(tables.length > 1) {
      for (let i = 1; i < tables.length; i++) {
        for(let j = 0; j < tables[i].length; j++) {
          if(tables[0][j][0] == tables[i][j][0]) {
            for (let k = 1; k < tables[i][j].length; k++) {
              tables[0][j].push(tables[i][j][k])       
            }
          }
        }
      } 
    }
    // console.log(tables);
    return tables[0]
  }
}