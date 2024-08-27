import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@api/*': path.resolve(__dirname, 'src/api'),
      '@hooks/*': path.resolve(__dirname, 'src/hooks'),
      '@utils/*': path.resolve(__dirname, 'src/utils'),
      '@store/*': path.resolve(__dirname, 'src/store'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants/*': path.resolve(__dirname, 'src/constants'),
      '@containers/*': path.resolve(__dirname, 'src/containers'),
    },
  },
};
