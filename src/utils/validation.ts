export function isValidUrl(string: string) {
  // Regex Source: https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)" + // validate protocol
      "((([a-z\u0600-\u065F\u066E-\u06D5\\d]([a-z\u0600-\u065F\u066E-\u06D5\\d-]*[a-z\u0600-\u065F\u066E-\u06D5\\d])*)\\.)+[a-z\u0600-\u065F\u066E-\u06D5]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return urlPattern.test(string);
}

export function isValidEmail(string: string) {
  // Regex Source: https://www.dotnettricks.com/learn/javascript/javascript-email-address-validation-using-regular-expression
  var emailPattern = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  return emailPattern.test(string);
}
