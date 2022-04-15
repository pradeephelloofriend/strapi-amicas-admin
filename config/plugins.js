module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: "amicas",
        },
        delete: {},
      },

    },
    navigation: {
      additionalFields: ['audience'],
      allowedLevels: 2,
      relatedContentTypes: [
        'application::pages.pages'
      ],
      contentTypesNameFields: {
        'Services': ['Name'],
        'pages': ['title'],
      },
     
    },    
  });