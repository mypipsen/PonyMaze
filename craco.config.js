const path = require('path')

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'util': path.resolve(__dirname, 'src/util'),
      'img': path.resolve(__dirname, 'src/img'),
      'scss': path.resolve(__dirname, 'src/scss'),
    }
  }
}