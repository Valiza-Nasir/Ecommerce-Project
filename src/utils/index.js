export const setTokenInLocal=(token)=>{
localStorage.setItem('token',JSON.stringify(token))
}
export const getTokenFromLocal=()=>{
return JSON.parse(localStorage.getItem('token'))
}
export const reomoveTokenFromLocal=()=>{
localStorage.removeItem('token')
}

// GET EMAIL FOR AVATAR FROM LOCAL STORAGE
export const setEmailInLocal=(email)=>{
  localStorage.setItem('email',JSON.stringify(email))
  }
  export const getEmailFromLocal=()=>{
  return JSON.parse(localStorage.getItem('email'))
  }
  export const reomoveEmailFromLocal=()=>{
  localStorage.removeItem('email')
  }