import React from 'react'

import Login from '../login/Login'
function GoogleAuth() {
  return (
    <>
    <GoogleOAuthProvider clientId='240081279258-kt049q821j0u1ah4mq8n86pdkv99voi5.apps.googleusercontent.com'>
     <Login/>
    </GoogleOAuthProvider>
    
    </>
  )
}

export default GoogleAuth           