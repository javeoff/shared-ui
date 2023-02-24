const packageJson = require('./package.json');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { babel } = require('@rollup/plugin-babel');
const svgr = require('@svgr/rollup');
const css = require('rollup-plugin-css-only');
const { terser } = require('rollup-plugin-terser');
const typescript = require('rollup-plugin-typescript2');
const commonjs = require('@rollup/plugin-commonjs');
const url = require('rollup-plugin-url');
const customTypescript = require('ttypescript');
const nodeResolve = require('@rollup/plugin-node-resolve');

module.exports = () => {
  const plugins = [
		peerDepsExternal(),
    typescript({
      tsconfig: 'tsconfig.build.json',
      typescript: customTypescript,
      exclude: ['src/**/*.stories.mdx'],
    }),
    css({
      output: 'dist/styles.css',
    }),
    /* babel({
      exclude: /node_modules/,
      extensions: ['.js', '.ts', '.tsx'],
    }), */
		nodeResolve(),
		commonjs(),
    url(),
    svgr(),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(terser());
  }

  return {
    input: 'src/index.ts',
		output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins,
    external: [
			'react/jsx-runtime',
		],
  };
};
