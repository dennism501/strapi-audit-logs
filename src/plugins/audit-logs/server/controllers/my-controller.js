'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('audit-logs')
      .service('myService')
      .getWelcomeMessage();
  },
};
