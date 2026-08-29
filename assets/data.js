window.AEGIS_DATA = {
  pricing: {
    rule: "Helping people is free. You only pay for the science desk.",
    rails: {
      paypalMe: "",
      payoneer: "https://link.payoneer.com/Token?t=A938DA53D50E464FB7E8C35081F7344F&src=pl",
      paypalGuide: "https://www.paypal.com/za/business/payments-without-a-website",
      payoneerGuide: "https://www.payoneer.com/get-paid-by-clients/"
    },
    stripe: { parked: true },
    tiers: [
      { id: "public", name: "Public Alert", price: "Free forever", pay: false, who: "Anyone in harm's way", includes: ["Public alert", "Get me to safety", "Hazard map"] },
      { id: "science", name: "Science Desk", price: "R89 / month", pay: true, who: "People who want the numbers", includes: ["RAS tables", "FWI", "Hydrographs", "Payoneer checkout"] },
      { id: "command", name: "Command Science", price: "R1 800 / month", pay: true, who: "Municipalities and NGOs", includes: ["Multi-basin desk", "Export queue"] }
    ]
  },
  cities: [
    { name: "Dhunche", lat: 28.111, lon: 85.303 },
    { name: "Kathmandu", lat: 27.717, lon: 85.324 },
    { name: "Stellenbosch", lat: -33.934, lon: 18.861 }
  ],
  zones: [
    { id: "himalaya-glof", name: "Rasuwa / Gyirong GLOF", lat: 28.2, lon: 85.35, level: "critical", note: "Barrier-lake watch after 26 Aug 2026 collapse." }
  ],
  safeZones: [
    { id: "dhunche-ridge", name: "Dhunche high ground", lat: 28.108, lon: 85.298, elev: 2050, why: "Climb off the Trishuli floor." }
  ]
};
