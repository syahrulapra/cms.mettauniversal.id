'use strict';

/**
 * email-received service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-received.email-received');
