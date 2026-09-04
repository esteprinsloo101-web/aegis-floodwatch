window.AEGIS_DATA = {
  pricing: {
    rule: "Public map and Get me to safety are free. You only pay for the Science Desk.",
    rails: {
      paystack: "https://paystack.com/pay/aegis-science-desk"
    },
    tiers: [
      {
        id: "public",
        name: "Public watch",
        price: "Free",
        pay: false,
        includes: ["Live hazard map", "Get me to safety", "SAWS link"]
      },
      {
        id: "science",
        name: "Science Desk",
        price: "R89",
        pay: true,
        includes: ["Methods pack", "Lead-time table", "Planner workflow"]
      }
    ]
  }
};
