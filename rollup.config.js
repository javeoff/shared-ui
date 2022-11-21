const { babel } = require('@rollup/plugin-babel');
const svgr = require('@svgr/rollup');
const css = require('rollup-plugin-css-only');
const { terser } = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const url = require('rollup-plugin-url');
const customTypescript = require('ttypescript');

module.exports = () => {
  const plugins = [
    typescript({
      tsconfig: 'tsconfig.build.json',
      typescript: customTypescript,
      exclude: ['src/**/*.stories.mdx'],
    }),
    css({
      output: 'dist/styles.css',
    }),
    babel({
      exclude: /node_modules/,
      extensions: ['.js', '.ts', '.tsx'],
    }),
    url(),
    svgr(),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(terser());
  }

  return {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      dir: 'dist',
      preserveModules: true,
    },
    plugins,
    external: ['react/jsx-runtime'],
  };
};
