export function setUserDetails(key,value) {
    localStorage.setItem(key, btoa(JSON.stringify(value)));
  }
  
  export function clearUserDetails(key) {
    localStorage.setItem(key, null);
  }
  
  export const getUserDetails = (key) => {
    if (localStorage.getItem(key) === null) {
      return "";
    }
    try {
      const userData = JSON.parse(atob(localStorage.getItem(key)));
      return userData;
    } catch (e) {
      return;
    }
  };
  

  