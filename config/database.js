const path = require("path");

module.exports = ({ env }) => ({
  //   connection: {
  //     client: env("DATABASE_CLIENT", "postgres"),
  //     connection: {
  //         host: env("DATABASE_HOST", "127.0.0.1"),
  //         port: env.int("DATABASE_PORT", 5432),
  //         database: env("DATABASE_NAME", "strapi"),
  //         user: env("DATABASE_USERNAME", "strapi"),
  //         password: env("DATABASE_PASSWORD", "strapi")
  //     },
  // debug: false,

  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
