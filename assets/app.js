(function () {
  const D = window.AEGIS_DATA || { pricing: { rails: { payoneer: "https://link.payoneer.com/Token?t=A938DA53D50E464FB7E8C35081F7344F&src=pl" }, tiers: [] }, safeZones: [], zones: [] };
  let map;
  function $(s) { return document.querySelector(s); }
  function initMap() {
    const el = $("#map");
    if (!el || !window.L) return;
    map = L.map("map").setView([28.15, 85.33], 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "© OSM" }).addTo(map);
    (D.zones || []).forEach(z => L.circle([z.lat, z.lon], { radius: 18000, color: "#ff4d6a", fillOpacity: 0.15 }).addTo(map).bindPopup(z.name || "zone"));
    (D.safeZones || []).forEach(z => L.circleMarker([z.lat, z.lon], { radius: 7, color: "#4ade80" }).addTo(map).bindPopup(z.name));
    setTimeout(() => map.invalidateSize(), 250);
  }
  function locateAndGo() {
    if (!navigator.geolocation) { alert("Turn on location, then tap again."); return; }
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude, lon = pos.coords.longitude;
      if (map) map.setView([lat, lon], 12);
      const sz = (D.safeZones || [])[0];
      if (sz && map) {
        L.marker([lat, lon]).addTo(map);
        L.polyline([[lat, lon], [sz.lat, sz.lon]], { color: "#3ee0c6" }).addTo(map);
        map.fitBounds([[lat, lon], [sz.lat, sz.lon]], { padding: [40, 40] });
      }
      const go = $("#go-body");
      if (go) go.innerHTML = "<h2 class='pane-title'>GO</h2><p class='lede'>You are at " + lat.toFixed(3) + ", " + lon.toFixed(3) + ". Move to marked high ground. Public alerts stay free.</p>";
    }, () => alert("Allow location so we can route you off the floodplain."));
  }
  function payVia(rail) {
    const url = rail === "payoneer" ? (D.pricing.rails.payoneer) : (D.pricing.rails.paypalMe || D.pricing.rails.paypalGuide);
    if (url) window.open(url, "_blank", "noopener");
  }
  function renderAccess() {
    const box = $("#access-body");
    if (!box) return;
    box.innerHTML = "<p class='lede'>" + D.pricing.rule + "</p>" + (D.pricing.tiers || []).map(t => "<div class='price-card'><h3>" + t.name + "</h3><div>" + t.price + "</div><p class='lede'>" + t.who + "</p>" + (t.pay ? "<button class='solid' onclick=\"AEGIS.payVia('payoneer')\">Payoneer</button>" : "<p class='lede'>No checkout.</p>") + "</div>").join("");
  }
  function openAccess() { renderAccess(); $("#access").classList.add("on"); }
  function closeAccess() { $("#access").classList.remove("on"); }
  function openScience() { const m = $("#science"); if (m) m.classList.add("on"); }
  function closeScience() { const m = $("#science"); if (m) m.classList.remove("on"); }
  function zoomWorld() { if (map) map.setView([20, 20], 2); }
  document.addEventListener("DOMContentLoaded", initMap);
  window.AEGIS = { locateAndGo, openAccess, closeAccess, openScience, closeScience, zoomWorld, payVia, routeToId: function () {}, savePayLinks: function () {} };
})();
