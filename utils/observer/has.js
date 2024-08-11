import observers from '@/utils/observer/observers'

/**
 * 判断是否存在包含 topic 主题的订阅者信息
 * ==========================================================
 * @method has
 * @param {String} topic - （必须）主题名称
 * @returns {Boolean}
 */
const has = (topic) => {
  return !!observers[topic]
}

export default has
