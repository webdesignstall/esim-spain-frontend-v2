/* eslint-disable import/no-anonymous-default-export */
export default {
<<<<<<< HEAD
    DOMAIN: "https://www.piratemobile.gg",
    API_BASE_URL: "https://api.piratemobile.gg/graphql",
    GOOGLE_CLIENT_ID:
        process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET:
        process.env.GOOGLE_CLIENT_SECRET,
    PAYPAL_CLIENT_ID:"",
    PAYPAL_SECRET_CODE:"",
=======
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  PAYPAL_SECRET_CODE: process.env.NEXT_PUBLIC_PAYPAL_SECRET_CODE,
>>>>>>> 979d6bf (ENV issue fixed packages fetching error solved)
};
