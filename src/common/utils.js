

//防抖
export function debounce(fn,delay){
  let timer = null;
  return function(){
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,arguments)
    }, delay);
  }
}

// 节流
export function throttle(fn,delay){
  let timer,last;
  return function(){
    let now = +new Date();
    if(last && now < last + delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this,arguments)
      }, delay);
    } else {
      last = now
      fn.apply(this,arguments)
      clearTimeout(timer)
    }
  }
}

export function toTestShow(callback,delay) {
  let timer
  let flg
  // boolean = true
  // console.log(boolean);
  timer = setTimeout( () => {
    flg = false
    callback(flg)
  }, delay)
}
 
// 时间戳转换
  // Date.prototype.Format = function (fmt) {
  //   var o = {
  //           "M+": this.getMonth() + 1, // 月份
  //           "d+": this.getDate(), // 日
  //           "h+": this.getHours(), // 小时
  //           "m+": this.getMinutes(), // 分
  //           "s+": this.getSeconds(), // 秒
  //           "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
  //           "S": this.getMilliseconds() // 毫秒
  //   };
  //   if (/(y+)/.test(fmt))
  //       fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
  //   for (var k in o)
  //       if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  //   return fmt;
  // }
  // // new Date(1542274800000).Format('yy-MM-dd hh:mm:ss'); //"2018-11-15 17:40:00"


// export function Format(date,fmt) {
//   let dates = new Date(date)
//   var o = {
//     "M+": dates.getMonth() + 1, // 月份
//     "d+": dates.getDate(), // 日
//     "h+": dates.getHours(), // 小时
//     "m+": dates.getMinutes(), // 分
//     "s+": dates.getSeconds(), // 秒
//     "q+": Math.floor((dates.getMonth() + 3) / 3), // 季度
//     "S": dates.getMilliseconds() // 毫秒
//   };
//   // console.log(this);
//   if (/(y+)/.test(fmt))
//     fmt = fmt.replace(RegExp.$1, (dates.getFullYear() + ""));
//   for (var k in o)
//     if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//   return fmt; 
// }

export function Format(date) {
  return function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, // 月份
      "d+": this.getDate(), // 日
      "h+": this.getHours(), // 小时
      "m+": this.getMinutes(), // 分
      "s+": this.getSeconds(), // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
      "S": this.getMilliseconds() // 毫秒
    };
    // console.log(this);
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }.bind(new Date(date))
}