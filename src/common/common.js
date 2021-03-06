// export function formatDate(a) {
//   var d = new Date() // 获取当前时间
//   // 构造对象o，里面存储当前时间对应的年、月、日、时、分、秒、季度、毫秒参数
//   var o = {
//     'M+': d.getMonth() + 1,
//     'd+': d.getDate(),
//     'h+': d.getHours(),
//     'm+': d.getMinutes(),
//     's+': d.getSeconds(),
//     'q+': Math.floor((d.getMonth() + 3) / 3),
//     S: d.getMilliseconds()
//   }
//   // 获取年份
//   if (/(y+)/.test(a))
//     a = a.replace(
//       RegExp.$1,
//       (d.getFullYear() + '').substr(4 - RegExp.$1.length)
//     )

//   // 获取其他
//   for (var k in o) {
//     if (new RegExp('(' + k + ')').test(a))
//       a = a.replace(
//         RegExp.$1,
//         RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
//       )
//   }
//   return a
// }

Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}
