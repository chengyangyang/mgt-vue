const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isPro ? 'http://cache.video.iqiyi.com/api/' : '/api/'
}
