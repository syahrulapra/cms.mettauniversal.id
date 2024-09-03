'use strict';

/**
 * term-of-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::term-of-service.term-of-service');
