export default publish;
/**
 * 发布主题信息
 * ==========================================================
 * @method publish
 * @param {String} topic - （必须）主题名称
 * @param {Object} data - （必须）需要传递给订阅者的数据
 */
declare function publish(topic: string, data: any): boolean;
