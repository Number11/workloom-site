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

  // Checkout links from GoHighLevel (Payments > Payment Links). Paste the full
  // link, starting with https://. Leave one "" and the thank-you page shows no pay
  // button for that item. With the website link blank, the page tells people
  // the checkout link will be emailed instead.
  payLinks: {
    site: "https://link.fastpaydirect.com/payment-link/6afe0c9b21a48a3872d274f5",     // Business Website, $799
    video: "https://link.fastpaydirect.com/payment-link/6afe0f5b906a8b62055d7acc",    // Owner Video, $799
    plan150: "https://link.fastpaydirect.com/payment-link/6afe0e93906a8b62055d7ac6",  // Lead Manager, $150 a month
    plan200: "https://link.fastpaydirect.com/payment-link/6afe0eb0906a8b62055d7ac8",  // Lead Manager + AI Assistant, $200 a month
    plan300: "https://link.fastpaydirect.com/payment-link/6afe0ed121a48a3872d27502"   // Lead Manager + AI Assistant + Phone, $300 a month
  },

  // ONE-CHECKOUT links. Each is a single GoHighLevel payment link that holds
  // every product in that combination, so the customer pays once. When the
  // link for a customer's combination is filled in, the thank-you page shows
  // one checkout button. When it is "", the page falls back to the separate
  // buttons above.
  comboLinks: {
    site: "",           // Website only
    siteVideo: "",      // Website + Owner Video
    site150: "",        // Website + Lead Manager ($150/mo)
    site200: "",        // Website + Lead Manager + AI Assistant ($200/mo)
    site300: "",        // Website + Lead Manager + AI Assistant + Phone ($300/mo)
    siteVideo150: "",   // Website + Owner Video + Lead Manager ($150/mo)
    siteVideo200: "https://link.fastpaydirect.com/payment-link/6afe28b421a48a3872d27588",   // Website + Owner Video + Lead Manager + AI Assistant ($200/mo)
    siteVideo300: ""    // Website + Owner Video + Lead Manager + AI Assistant + Phone ($300/mo)
  },

  // BOOK A CALL. Paste your scheduling link here (the full link, starting
  // with https://), for example a GoHighLevel calendar's "Permanent Link".
  // Leave "" and every "Book a call" link on the pages stays hidden.
  bookingUrl: "https://api.leadconnectorhq.com/widget/booking/88ZGLqJefPNHCaXmhOR5",

  // Where a paid customer uploads their logo and photos (a form or shared
  // folder link). Leave "" and the paid page says the link will be emailed.
  photoUploadUrl: "",

  // YouTube video IDs (the letters and numbers at the end of the video's
  // link, e.g. "AbC123xyz_0"). Leave "" and that video's spot stays hidden.
  videos: {
    offer: "",        // landing page: why I am making this offer
    leadManager: "",  // upsell 1: the lead manager and AI assistant
    ownerVideo: ""    // upsell 2: why I recommend the owner video
  }
};
