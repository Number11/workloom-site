// EDIT THIS FILE to set up the $799 website pages.
// Open it, change the values between the quotes, save, then commit and push.
// Leads go through the site's own /api/website-signup route to GoHighLevel,
// so there is no webhook address to paste here.
window.WL_CONFIG = {
  // Meta (Facebook) Pixel ID, numbers only. Leave "" to load no pixel.
  metaPixelId: "",

  // Shown in the footer and on the thank-you page. Leave "" to hide.
  phone: "",
  email: "andy@workloom.ai",

  // YouTube video IDs (the letters and numbers at the end of the video's
  // link, e.g. "AbC123xyz_0"). Leave "" and that video's spot stays hidden.
  videos: {
    offer: "",        // landing page: why I am making this offer
    leadManager: "",  // upsell 1: the lead manager and AI assistant
    ownerVideo: ""    // upsell 2: why I recommend the owner video
  }
};
