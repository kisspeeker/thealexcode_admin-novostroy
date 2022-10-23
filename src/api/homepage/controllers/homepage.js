'use strict';

/**
 * homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::homepage.homepage', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      const sanitizedObject = sanitizeObject(data);
      const sanitizedContacts = sanitizeArray(sanitizedObject.contacts?.data);
      const sanitizedAddresses = sanitizeArray(sanitizedObject.addresses?.data);
      const sanitizedSeoImage = sanitizeObject(sanitizedObject.seoImage?.data);

      return {
        ...sanitizedObject,
        contacts: sanitizedContacts,
        addresses: sanitizedAddresses,
        seoImage: sanitizedSeoImage,
      }
    } catch(e) {
      return e;
    }
  },
}));
