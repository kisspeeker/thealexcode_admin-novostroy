'use strict';

/**
 * team controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::team.team', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      const sanitizedObject = sanitizeObject(data);
      const sanitizedImg = sanitizeObject(sanitizedObject.img?.data);
      const sanitizedAlterImg = sanitizeObject(sanitizedObject.alterImg?.data);

      return {
        ...sanitizedObject,
        img: sanitizedImg,
        alterImg: sanitizedAlterImg,
      }
    } catch(e) {
      return e;
    }
  },
}));