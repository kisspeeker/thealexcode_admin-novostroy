'use strict';

/**
 * about controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::about.about', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      const sanitizedObject = sanitizeObject(data);
      const sanitizedAlterImg = sanitizeObject(sanitizedObject.alterImg?.data);

      return {
        ...sanitizedObject,
        alterImg: sanitizedAlterImg,
      }
    } catch(e) {
      return e;
    }
  },
}));