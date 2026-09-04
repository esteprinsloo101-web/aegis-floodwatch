# AEGIS Floodwatch

Standalone **flood / disaster science** product: global hazard watch and flood risk screening for scientists, emergency planners, and serious public users.

## Free vs paid

| Tier | What you get |
|------|----------------|
| **Free live map** (`index.html`) | Leaflet OSM world map, NASA EONET open events, USGS M4.5+ week, optional GDACS, event list, Get me to safety (SAWS + higher ground). |
| **Science Desk R89** (`desk.html`) | Screening methods (Manning, WSE, wet cell, GLOF volume/time, Omori–Utsu, √(gH), FWI), lead-time table, planner workflow, sources. |

Payment: **Paystack only** — https://paystack.com/pay/aegis-science-desk

Product explainer: `preview.html`

## Sources

- [NASA EONET](https://eonet.gsfc.nasa.gov/)
- [USGS earthquakes](https://earthquake.usgs.gov/)
- [GloFAS](https://www.globalfloods.eu/) / [Open-Meteo Flood](https://open-meteo.com/en/docs/flood-api)
- [GDACS](https://www.gdacs.org/) (browser CORS may block)
- [SAWS](https://www.weathersa.co.za/) — official SA weather warnings

## Not an official warning service

AEGIS is a **screening** product. It is not SAWS, USGS, PTWC, or any national authority. **Official warnings beat AEGIS.** Never invent disasters or earthquake/fire start times. Escape / Get-me-to-safety is never paywalled.

## Pricing data

Optional thin config: `assets/data.js` (`pricing.rails.paystack` only).
