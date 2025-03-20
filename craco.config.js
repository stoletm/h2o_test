module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        const svgRuleIndex = webpackConfig.module.rules.findIndex((rule) =>
          rule.test && rule.test.toString().includes('svg')
        );
  
        if (svgRuleIndex >= 0) {
          webpackConfig.module.rules[svgRuleIndex] = {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
          };
        }
  
        return webpackConfig;
      },
    },
  };