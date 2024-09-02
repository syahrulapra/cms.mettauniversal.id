import strapi from '@strapi/strapi'

if (process.env.NODE_ENV == "development")
    // @ts-ignore
    strapi({"autoReload": { "enabled": true }}).start();
else
    // @ts-ignore
    strapi().start();
