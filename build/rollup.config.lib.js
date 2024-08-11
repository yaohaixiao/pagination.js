import PLUGINS_CONFIG from './rollup.plugins.config'

export default [
  {
    input: './pagination.js', // 你的入口文件
    output: {
      name: 'Pagination',
      file: 'pagination.min.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: PLUGINS_CONFIG
  }
]
