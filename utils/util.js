const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 补零
 * @param {*} val type: int
 */
const zeroFill = val => {
  return val < 10 ? '0' + val : val;
}
/**
 * 获取当前时间并转换格式
 * @param {*} 
 */
const fromateTime = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = zeroFill(date.getMonth());
  let day = zeroFill(date.getDate());
  let hours = zeroFill(date.getHours());
  let minutes = zeroFill(date.getMinutes());
  let second = zeroFill(date.getSeconds());
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + second;
}

/**
 * 随机一个id
 */
const randomId = () => {
  return 'a' + random(1000000,10000000);
}

/**
 * 随机数
 * @param {number} min 最小值 
 * @param {number} max 最大值
 */
const random = (min,max) => {
  return Math.floor(Math.random() * max + min);
}

module.exports = {
  formatTime: formatTime,
  fromateTime: fromateTime,
  random: random,
  randomId: randomId
}
