const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}
