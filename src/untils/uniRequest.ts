import { config } from '@/untils/config';
const { whiteAPIList, baseUrl, base } = config;
// 检查 token 是否存在
const tokenCheck = (): boolean => {
  return !!uni.getStorageSync('token');
};
uni.addInterceptor('request', {
  invoke(options: any) {
    if (!whiteAPIList.includes(options.api) && !tokenCheck()) {
      // 请先登录
      return;
    }
    if (options.loading) {
      uni.showLoading({ title: '加载中' });
    }
    options.url = `${baseUrl}/${options.api}`;
  },
  success() {
    uni.hideLoading();
  },
  fail(err) {
    console.log('请求失败', err);
    uni.hideLoading();
  },
  complete() {
    uni.hideLoading();
  },
});

export const get = (url: string, data: any) => {
  return new Promise((resolve) => {
    uni.request({
      method: 'GET',
      url,
      data,
      ...base,
      success(data) {
        console.log(data, '请求成功返回数据');
        resolve(data);
      },
    });
  });
};
