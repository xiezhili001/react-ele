// expiresHours 过期时间

 export default function addCookie(name,value,expiresHours){
  let cookieString = `${name}=${escape(value)}`;
  // 判断是否设置过期时间，0代表关闭浏览器时失败
  if (expiresHours > 0 ){
    const date = new Date();
    date.setTime(date.getTime() + expiresHours * 1000);
    cookieString = `${cookieString};expires=${date.toUTCString()}`;
  }
  document.cookie = cookieString;
}




