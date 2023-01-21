const { v4: uuidv4 } = require("uuid");

// session is kind of like a cookie of sorts that is stored on server side. You have to match those values. Session: a single instance of a user being on a page. A cookie is stored inside the browser. The session id was stored in the users cookie, if you want a new one, need to delete the cookie.
// how do we store the session? In the cookie?
// session id maybe is always a new one that is created when the user enters the browser.
// understanding headers is important for the TA, but understanding authorization is not, or maybe its a bonus question
// this is not quite auth, it's more middleware
// in this sprint, each form is kind of its own process and needs to be validated one at a time. There is a next button after each form. You could store the information locally, then send to the server all at once, or do it piece by piece. Need to find a way to move from one form to the next.
module.exports = (req, res, next) => {
  /**
   *
   * Parse cookies in incoming request:
   *
   */

  let cookieString = req.get("Cookie") || "";

  parsedCookies = cookieString.split("; ").reduce((cookies, cookie) => {
    if (cookie.length) {
      let index = cookie.indexOf("=");
      let key = cookie.slice(0, index);
      let token = cookie.slice(index + 1);
      cookies[key] = token;
    }
    return cookies;
  }, {});

  if (parsedCookies.s_id) {
    req.session_id = parsedCookies.s_id;
  } else {
    req.session_id = uuidv4();
    res.cookie("s_id", req.session_id);
  }

  next();
};
