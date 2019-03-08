function WxLogin() {
  var obj = new WxLoginme({
    self_redirect: true,
    id: 'login_container',
    appid: 'wx7d19061752e526e5',
    scope: 'snsapi_login',
    redirect_uri: 'http://www.rymaker.com',
    state: '',
    style: '',
    href: ''
  })
  return obj
}
module.exports = WxLogin()
