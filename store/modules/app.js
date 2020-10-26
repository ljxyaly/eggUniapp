const state = {
	// token值
	token: uni.getStorageSync('TOKEN') || '',
	// token 缓存时间
	token_expires_time: uni.getStorageSync('TOKEN_EXPIRES_TIME') || 0,
	// 登录回调页面地址
	login_back_route: '',
	login_back_options: null,
	// 登录code
	login_code: uni.getStorageSync('code') || ''
};

const mutations = {
	// 更新token
	UPDATE_TOKEN(state, options){
		state.token = options.token;
		state.token_expires_time = options.time;
		uni.setStorageSync('TOKEN',options.token);
		uni.setStorageSync('TOKEN_EXPIRES_TIME',options.time);
	},
	// 更新登录回调地址
	UPDATE_LOGIN_BACK(state, opts) {
		state.login_back_route = opts.route;
		state.login_back_options = opts.options;
		uni.setStorageSync('login_back_route',opts.route);
		uni.setStorageSync('login_back_options',opts.options);
	},
	// 更新code值
	UPDATE_CODE(state,code){
		state.login_code = code;
		uni.setStorageSync('login_code',code);
	}
};

const actions = {
	
};

export default {
	state,
	mutations,
	actions
};
