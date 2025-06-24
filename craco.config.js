module.exports = {
  webpack: {
    configure: webpackConfig => {
      // Disable React Refresh
      const reactRefreshPlugin = webpackConfig.plugins.find(
        plugin => plugin.constructor.name === 'ReactRefreshPlugin'
      );
      if (reactRefreshPlugin) {
        webpackConfig.plugins = webpackConfig.plugins.filter(
          plugin => plugin.constructor.name !== 'ReactRefreshPlugin'
        );
      }

      // Remove React Refresh babel plugin
      const babelRule = webpackConfig.module.rules.find(
        rule => rule.test && rule.test.toString().includes('jsx')
      );
      if (babelRule && babelRule.use) {
        babelRule.use.forEach(use => {
          if (use.loader && use.loader.includes('babel-loader')) {
            if (use.options && use.options.plugins) {
              use.options.plugins = use.options.plugins.filter(
                plugin =>
                  !plugin.includes('react-refresh') &&
                  !plugin.includes('@pmmmwh/react-refresh-webpack-plugin')
              );
            }
          }
        });
      }

      return webpackConfig;
    },
  },
  devServer: {
    // Disable hot reloading to prevent React Refresh issues
    hot: false,
    liveReload: true,
  },
};
