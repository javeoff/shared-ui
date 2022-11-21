import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  testMatch: ['<rootDir>/**/__tests__/*.test.(ts|tsx)'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

export default config;
