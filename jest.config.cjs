module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.[jt]s?(x)',
    '!<rootDir>/src/**/{hotjar,bootstrap,apm,config,index}.[jt]s?(x)',
    '!<rootDir>/src/**/*.{test,spec,d}.[jt]s?(x)',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
