import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
import customTypescript from 'ttypescript';
import css from 'rollup-plugin-css-only';
import url from 'rollup-plugin-url';
import { swc } from 'rollup-plugin-swc3';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const loadConfig = () => {
  const plugins = [
    css({
      output: 'dist/styles.css',
    }),
		typescript({
      tsconfig: 'tsconfig.build.json',
      typescript: customTypescript,
      exclude: ['src/**/*.stories.mdx', '.storybook'],
    }),
    /* swc({
      include: /\.[mc]?[jt]sx?$/, // default
      exclude: /node_modules/, // default
      tsconfig: 'tsconfig.build.json', // default
    }), */
    url(),
    svgr(),
		peerDepsExternal(),
		// commonjs(),
		// resolve(),
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
	}
};

export default loadConfig