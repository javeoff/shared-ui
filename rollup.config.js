const svgr = require('@svgr/rollup');
const css = require('rollup-plugin-css-only');
const { terser } = require('rollup-plugin-terser');
const url = require('rollup-plugin-url');
const { swc } = require('rollup-plugin-swc3');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');

module.exports = () => {
  const plugins = [
    css({
      output: 'dist/styles.css',
    }),
    swc({
      include: /\.[mc]?[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.build.json', // default
      jsc: {}
    }),
    url(),
    svgr(),
		peerDepsExternal(),
		typescript({
			tsconfig: 'tsconfig.build.json',
			exclude: [
				'*.test.tsx', 
				'*.stories.@(js|jsx|ts|tsx)'
			],
		}),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(
			terser(),
			nodeResolve(),
			commonjs(),
		);
  }

  return {
    input: 'src/index.ts',
		output: {
      format: 'esm',
      dir: 'dist',
      preserveModules: true,
    },
    plugins,
  };
};
