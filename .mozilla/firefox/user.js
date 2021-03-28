// [START] Main Document Requirements
// Prevent IP address leak
user_pref("media.navigator.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("intl.accept_languages", "en-US, en");
user_pref("browser.urlbar.ctrlCanonizesURLs", false);
user_pref("privacy.trackingprotection.enabled", true);
// Additional disable for WEBRTC
user_pref("media.peerconnection.identity.timeout", 1);

// Disable Data Collection
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("services.sync.clients.lastSync", "0");
user_pref("services.sync.declinedEngines", "");
user_pref("services.sync.globalScore", 0);
user_pref("services.sync.nextSync", 0);
user_pref("services.sync.tabs.lastSync", "0");

// Disable Deceptive Content
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("urlclassifier.malwareTable", "goog-malware-proto,moztest-harmful-simple,moztest-malware-simple");

// Enable HTTPS Only
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);

// Disable Location/Camera/Notification/GEO/Microphone/VR Permissions
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("goe.enabled", false);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);

// [END] Main Document Requirements

// ---

// [START] PrivacyTools Configurations

// Disables all browser identifiers
user_pref("privacy.firstparty.isolate",true);

// Disable Hardware Accelerationo
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("layers.acceleration.disabled", true);

// Deletes 3rd party cookies and fingerprinting
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("browser.send_pings", false);

// Browser URLBAR  preload autocompletion
//browser.urlbar.speculativeConnect.enabled = false

// Disable DRM
user_pref("media.eme.enabled", false);
user_pref("media.gmp-widevinecdm.enabled", false);

// Block 3rd party cookies
/*
*0 = Accept all cookies by default
*1 = Only accept from the originating site (block third-party cookies)
*2 = Block all cookies by default
*/
user_pref("network.cookie.cookieBehavior", 1);

// Disable WebGL
user_pref("webgl.disabled", true);

// Disable additional session contents
/*
*    This preference controls when to store extra information about
*    a session: contents of forms, scrollbar positions, cookies, and
*    POST data. Details
*
*     0 = Store extra session data for any site. (Default starting with
*     Firefox 4.) 1 = Store extra session data for unencrypted
*     (non-HTTPS) sites only. (Default before Firefox 4.) 2 = Never
*     store extra session data.
*/
user_pref("browser.sessionstore.privacy_level", 2);

// Disable beacons ( Attackers can beacon themselfs )
//beacon.enabled = false

// Stop Google Safe Browsing Database
//browser.safebrowsing.downloads.remote.enabled = false

// Disable Prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.prefetch-next", false);

// Disable similar characters in URL
user_pref("network.IDN_show_punycode", true);

// [END] PrivacyTools Configurations

// ---

// [START] Extras

// Disable Captive Portal
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// Disable Save Password
user_pref("services.sync.prefs.sync.signon.rememberSignons", false);
user_pref("signon.rememberSignons", false);

// Don't recommend extensions & features as I browse
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// Prevent scheme FP
// https://schemeflood.com/
// CAUTION! New windows will be open in tab
user_pref("browser.link.open_newwindow", 1);
user_pref("browser.link.open_newwindow.override.external", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

// [END] Extras
