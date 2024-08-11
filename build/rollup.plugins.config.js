import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import path from 'path'
import less from 'less'

const PLUGINS_CONFIG = [
  alias({
    entries: [{ find: '@', replacement: path.resolve(__dirname, '../') }]
  }),
  postcss({
    extract: true,
    // 将 CSS 提取到一个单独的文件
    extensions: ['.less'],
    process: (context) => {
      return new Promise((resolve, reject) => {
        less.render(context, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result.css)
          }
        })
      })
    }
  }),
  nodeResolve({
    mainFields: ['module', 'jsnext', 'main', 'browser']
  }),
  commonjs(),
  terser()
]

export default PLUGINS_CONFIG
