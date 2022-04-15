module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1342),
  production: true,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3e0d8344309870a0f8343bc92c2a380f'),
    },
  },
});
// 3e0d8344309470a0f8343bc92c2a280f