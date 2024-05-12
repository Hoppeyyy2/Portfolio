module.exports = {
  debug: process.env.NODE_ENV === 'development',
  
  i18n:{
    defaultLocale:'en',
    locales:['zh-Hant','ja','en'],
    
  },
  
   /** To avoid issues when deploying to some paas (vercel...) */
   localePath:
   typeof window === 'undefined'
     ? require('path').resolve('./utils/locales')
     : '/locales',
  
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  
  };