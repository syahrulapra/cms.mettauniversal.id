'use strict';

/**
 * term-of-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::term-of-service.term-of-service');
