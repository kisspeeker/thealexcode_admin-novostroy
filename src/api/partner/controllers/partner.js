'use strict';

/**
 * partner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::partner.partner', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      const sanitizedObject = sanitizeObject(data);
      const sanitizedImgs = sanitizeArray(sanitizedObject.imgs?.data);

      return {
        ...sanitizedObject,
        imgs: sanitizedImgs,
      }
    } catch(e) {
      return e;
    }
  },
}));