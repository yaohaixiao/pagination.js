import isFunction from '@/utils/types/isFunction'
import guid from '@/utils/lang/guid'
import observers from '@/utils/observer/observers'

/**
 * 订阅主题，并给出处理器函数
 * ==========================================================
 * @method subscribe
 * @param {String} topic - （必须）主题名称
 * @param {Function} handler - （必须）主题的处理器函数
 * @param {Object} [context] - （可选）指定 this 执行上下文
 * @return {String|Boolean} - 唯一的 token 字符串，例如：'guid-1'。
 */
const subscribe = (topic, handler, context) => {
  const token = guid()

  // handler 不是函数类型则不执行
  if (!isFunction(handler)) {
    return false
  }

  // 如果还没有 topic 主题，则创建一个 topic 主题
  if (!observers[topic]) {
    observers[topic] = []
  }

  // 往 topic 主题添加订阅信息
  observers[topic].push({
    handler,
    token,
    context
  })

  return token
}

export default subscribe
