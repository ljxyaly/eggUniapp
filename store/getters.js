export default {
  token: state => state.app.token,
  token_expires_time: state => state.app.token_expires_time,
  login_code: state => state.app.login_code,
  login_back_route: state => state.app.login_back_route,
  login_back_options: state => state.app.login_back_options
};
