export function isMobile() {
  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile', 'mobile/', 'webos', 'kindle'];
  for (let i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;

  if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)) return true;

  if (sessionStorage.desktop) return false;
  else if (localStorage.mobile) return true;

  return false;
}
