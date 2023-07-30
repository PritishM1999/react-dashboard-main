// // Function to get the value of a cookie by name
// export const getCookie = (name) => {
//     const cookies = document.cookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       const cookie = cookies[i].trim();
//       if (cookie.startsWith(name + '=')) {
//         return cookie.substring(name.length + 1);
//       }
//     }
//     return null;
//   };
  
//   // Function to set a cookie
//   export const setCookie = (name, value, options = {}) => {
//     const { expires, path, domain, secure } = options;
  
//     let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
//     if (expires) {
//       if (expires instanceof Date) {
//         cookieString += `; expires=${expires.toUTCString()}`;
//       } else {
//         throw new Error('Invalid expiration date');
//       }
//     }
  
//     if (path) {
//       cookieString += `; path=${path}`;
//     }
  
//     if (domain) {
//       cookieString += `; domain=${domain}`;
//     }
  
//     if (secure) {
//       cookieString += '; secure';
//     }
  
//     document.cookie = cookieString;
//   };
  