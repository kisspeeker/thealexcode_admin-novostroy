'use strict';

/**
 * feedback controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::feedback.feedback', () => ({
  async create(ctx) {
    ctx.request.body = {
      data: {
        ...ctx.request.body
      }
    }
    const response = await super.create(ctx);
    
    return response
  },
}));

