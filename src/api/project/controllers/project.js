'use strict';

/**
 * project controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::project.project', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      const sanitizedArray = sanitizeArray(data);

      return sanitizedArray.map((item) => {
        return {
          ...item,
          img: sanitizeObject(item?.img?.data),
          slides: sanitizeArray(item?.slides?.data),
        }
      })
    } catch(e) {
      return e;
    }
  },
}));
