module.exports = ({ env }) => ({
  'transfer': {
    enabled: true,
    config: {
      token: {s
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
  },
});
