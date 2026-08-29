(function () {
  const D = window.AEGIS_DATA || { pricing: { rails: { payoneer: "https://link.payoneer.com/Token?t=A938DA53D50E464FB7E8C35081F7344F&src=pl" }, tiers: [] }, safeZones: [], zones: [] };
  let map;
  function $(s) { return document.querySelector(s); }
  function sizeMap() {
    if (map) setTimeout(function () { map.invalidateSize(); }, 80);
  }
  function initMap() {
    const el = $("#map");
    if (!el || !window.L) return;
    map = L.map("map", { zoomControl: true, tap: true }).setView([28.15, 85.33], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap"
    }).addTo(map);
    (D.zones || []).forEach(function (z) {
      L.circle([z.lat, z.lon], { radius: 18000, color: "#ff4d6a", fillOpacity: 0.18, weight: 2 }).addTo(map).bindPopup(z.name || "Risk zone");
    });
    (D.safeZones || []).forEach(function (z) {
      L.circleMarker([z.lat, z.lon], { radius: 8, color: "#4ade80", fillColor: "#4ade80", fillOpacity: 0.9 }).addTo(map).bindPopup((z.name || "Safe ground") + " — go here");
    });
    window.addEventListener("resize", sizeMap);
    window.addEventListener("orientationchange", sizeMap);
    sizeMap();
    setTimeout(sizeMap, 400);
    setTimeout(sizeMap, 1200);
  }
  function locateAndGo() {
    if (!navigator.geolocation) { alert("Turn on location, then tap again."); return; }
    navigator.geolocation.getCurrentPosition(function (pos) {
      var lat = pos.coords.latitude, lon = pos.coords.longitude;
      if (map) {
        map.setView([lat, lon], 13);
        L.marker([lat, lon]).addTo(map).bindPopup("You are here").openPopup();
        var sz = (D.safeZones || [])[0];
        if (sz) {
          L.polyline([[lat, lon], [sz.lat, sz.lon]], { color: "#3ee0c6", weight: 4 }).addTo(map);
          map.fitBounds([[lat, lon], [sz.lat, sz.lon]], { padding: [30, 30] });
        }
        sizeMap();
      }
    }, function () { alert("Allow location so we can mark you on the map."); }, { enableHighAccuracy: true, timeout: 12000 });
  }
  function payVia(rail) {
    var url = rail === "payoneer" ? D.pricing.rails.payoneer : (D.pricing.rails.paypalMe || D.pricing.rails.paypalGuide);
    if (url) window.open(url, "_blank", "noopener");
  }
  function renderAccess() {
    var box = $("#access-body");
    if (!box) return;
    box.innerHTML = "<p class='lede'>" + D.pricing.rule + "</p>" + (D.pricing.tiers || []).map(function (t) {
      return "<div class='price-card'><h3>" + t.name + "</h3><div>" + t.price + "</div><p class='lede'>" + t.who + "</p>" + (t.pay ? "<button class='solid' onclick=\"AEGIS.payVia('payoneer')\">Payoneer</button>" : "<p class='lede'>No checkout.</p>") + "</div>";
    }).join("");
  }
  function openAccess() { renderAccess(); $("#access").classList.add("on"); }
  function closeAccess() { $("#access").classList.remove("on"); }
  function openScience() { var m = $("#science"); if (m) m.classList.add("on"); }
  function closeScience() { var m = $("#science"); if (m) m.classList.remove("on"); }
  function zoomWorld() { if (map) map.setView([20, 20], 2); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initMap);
  else initMap();
  window.AEGIS = { locateAndGo: locateAndGo, openAccess: openAccess, closeAccess: closeAccess, openScience: openScience, closeScience: closeScience, zoomWorld: zoomWorld, payVia: payVia, routeToId: function () {}, savePayLinks: function () {} };
})();
