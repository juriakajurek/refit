module.exports = ({ env }) => ({
  host: env("HOST", "135.125.235.24"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "261b3695db315d913ee76781d6f22f48"),
    },
  },
});
