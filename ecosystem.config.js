module.exports = {
  apps: [
    {
      name: 'amicas-server',
      cwd: '/home/ec2-user/strapi/strapi-amicas-admin',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_HOST: '15.207.67.236', // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: '3306',
        DATABASE_NAME: 'strapi_amicas', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'strapi_amicas', // default username
        DATABASE_PASSWORD: 'snnr(eLi-rwDmNS]',
      },
    },
  ],
};
