/* ClipsJudge tracking codes. Paste your IDs between the quotes, save, and upload this file to
   GitHub again. Leave them empty to turn tracking off.
     GA4_ID:   a Google tag: Google Ads (AW-...) or Google Analytics "Measurement ID" (G-XXXXXXX)
     PIXEL_ID: Meta Events Manager > your pixel > the number (15-16 digits)              */
var GA4_ID = "AW-18569273343";   // v68: Google Ads (counts visits from ads)
var PIXEL_ID = "";

(function () {
  if (GA4_ID) {
    var g = document.createElement("script"); g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID; document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date()); gtag("config", GA4_ID);
  }
  if (PIXEL_ID) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", PIXEL_ID); fbq("track", "PageView");
  }
  // count clicks on "Start free trial" / "Sign up free" as sign-up intent
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest('a[href*="/app/signup"]');
    if (!a) return;
    if (window.gtag) gtag("event", "sign_up_click");
    if (window.fbq) fbq("track", "Lead");
  });
})();
