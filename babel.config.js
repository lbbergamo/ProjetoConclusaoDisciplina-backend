module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@core': './src/common/core'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
