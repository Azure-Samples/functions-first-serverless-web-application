(function () {
  let authToken = ""

  if (window.location.hash) {
    const match = window.location.hash.match(/token=([^&]+)/)
    if (match[1]) {
      authToken = JSON.parse(decodeURIComponent(match[1])).authenticationToken
      sessionStorage.setItem('authToken', authToken)
    }
    history.pushState("", document.title, window.location.pathname + window.location.search)
  } else {
    authToken = sessionStorage.getItem('authToken')
  }

  window.auth = {
    token: authToken,
    loginUrl: window.apiBaseUrl +
      '/.auth/login/aad?session_mode=token&post_login_redirect_url=' +
      encodeURIComponent(window.location.href)
  }
}())
