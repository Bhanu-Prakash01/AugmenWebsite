const CONSTANTS = {
    REGEX: {
      // EMAIL: new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"),
      NUMBER: /^\d+$/,
      PHONE: /^[0-9]{10,13}$/,
      MOBILE: /^[0-9]{10}$/,
      MOBILE_FIXED: /^\+91[0-9]{10}$/,
      ADDRESS: new RegExp("^[a-zA-Z0-9\\s\\-\\,\\&\\/\\(\\)]{0,100}$"),
      COUNTRY_CODE: /^(\+?\d{1,3}|\d{1,4})$/,
      NAME:/^[a-zA-Z0-9 ._/&@-]+$/,
      PINCODE:  /^[1-9][0-9]{5}$/,
      PERSON_NAME:/^[a-zA-Z .]+$/,
    },
  
    COMPANY_DETAILS :{
      CONTACT_NO : "+91-9810113654",
      ADDRESS : "Noida, Uttar Pradesh - 201304",
      HELPLINE_NO : "+91-9810113654",
      SUPPORT_MAIL_ID: "support@opdsure.com",
      FULL_ADDRESS:"OPDSure Altf Tower, Sector 142, Noida, Uttar Pradesh - 201304",
      LINKEDIN :"https://www.linkedin.com",
      FACEBOOK:"https://www.facebook.com",
      INSTAGRAM:"https://www.instagram.com",
      YOUTUBE:"https://www.youtube.com",
      TWITTER:"https://x.com/",
      TUMBLUR:"https://x.com/e",
      PLAY_STORE:"https://play.google.com/store/apps/",
      APP_STORE:"https://play.google.com/store/apps/",
    },
   
  };
  
  export default CONSTANTS;
  