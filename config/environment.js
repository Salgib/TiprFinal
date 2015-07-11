/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tipr-final',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      applicationId: 'xOg8q9zLN8eObYLlPn1ZP8he0ftTdBwlbZIwP2nB',
      restApiId:'xJtLC9ZPW2IfIDBGjVMRdLbVTHnpAkgdSY6mexkU'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' api.parse.com",
      'img-src': "'self' 'data'",
      'media-src': "'self'"
    },

    'simple-auth': {
    authorizer: 'authorizer:parse',
    crossOriginWhitelist: ['https://api.parse.com'],
    routeIfAlreadyAuthenticated: 'users.current',
    routeAfterAuthentication:'users.current'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
