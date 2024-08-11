// 所有的订阅者信息
import observers from '@/utils/observer/observers'

/**
 * 发布主题信息
 * ==========================================================
 * @method publish
 * @param {String} topic - （必须）主题名称
 * @param {Object} data - （必须）需要传递给订阅者的数据
 */
const publish = (topic, data) => {
  // 获取 topic 对应的订阅者信息
  const observer = observers[topic]

  // 没有找到主题，或者主题没有任何订阅者信息，则不执行
  if (!observer || observer.length < 1) {
    return false
  }

  // 一个 topic 会有多个订阅者订阅，
  // 所以需要遍历执行所有的订阅者信息。
  observer.forEach((subscription) => {
    return subscription.handler.call(subscription.context || subscription, data)
  })
}

export default publish
