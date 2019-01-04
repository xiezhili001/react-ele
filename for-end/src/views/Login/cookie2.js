export default function editCookie(name,value,expiresHours){
  let cookieString = `${name}=${escape(value)}`;
  if (expiresHours > 0) {
    const date = new Date();
    date.setTime(date.getTime() + expiresHours*1000);
    cookieString = `${cookieString};expires=${date.toGMTString()}`
  }
  document.cookie = cookieString;
}
