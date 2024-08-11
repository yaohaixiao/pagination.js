import observers from '@/utils/observer/observers'
import has from '@/utils/observer/has'

/**
 * 取消订阅主题：如果仅传递 topic 则删除整个 topic 主题，如果还传递了
 * token，则仅删除 topic 主题下的相应 token 值的单个订阅信息
 * ==========================================================
 * @method unsubscribe
 * @param {String} topic - （必须）订阅的主题 topic 名称
 * @param {String} [token] - （可选）订阅主题的处理器函数或者唯一 Id 值
 */
const unsubscribe = (topic, token) => {
  let observer

  if (!has(topic)) {
    return false
  }

  observer = observers[topic]

  // 传递了 token
  if (token) {
    // 则仅删除 topic 主题下的相应 token 值的单个订阅信息
    observers[topic] = observer.filter(
      (subscription) => subscription.token !== token
    )
  } else {
    // 删除整个 topic 主题的订阅信息
    delete observers[topic]
  }
}

export default unsubscribe
