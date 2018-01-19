import buble    from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
// Please uncomment as necessary
// import node_resolve  from 'rollup-plugin-node-resolve'
// import multi_entry from 'rollup-plugin-multi-entry'


export default {
  entry: 'src/index.js',
  dest: 'build/bundle.js',
  format: 'es',
  // Please uncomment as necessary
  // sourceMap: true,
  plugins: [
    // Please uncomment as necessary
    // node_resolve({ jsnext: true }),
    // multi_entry(),
    commonjs(),
    buble()
  ]
}
