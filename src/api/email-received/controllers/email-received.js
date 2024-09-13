'use strict';

/**
 * email-received controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::email-received.email-received');
