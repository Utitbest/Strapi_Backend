module.exports = ({ env }) => ({
  'transfer': {
    enabled: true,
    config: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
  },
});
