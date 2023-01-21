const { v4: uuidv4 } = require("uuid");

// session is kind of like a cookie of sorts that is stored on server side. You have to match those values. Session: a single instance of a user being on a page. A cookie is stored inside the browser. The session id was stored in the users cookie, if you want a new one, need to delete the cookie.
// how do we store the session? In the cookie?
// session id maybe is always a new one that is created when the user enters the browser.
// understanding headers is important for the TA, but understanding authorization is not, or maybe its a bonus question
// this is not quite auth, it's more middleware
// in this sprint, each form is kind of its own process and needs to be validated one at a time. There is a next button after each form. You could store the information locally, then send to the server all at once, or do it piece by piece. Need to find a way to move from one form to the next.

// from Bolton:
// We will package our response with this cookie which contains the session id** and grant it to the client
// Also because of sessionHandler middleware, every request coming thru will have a session_id property. so once the client is registered as a user in our db, we should somehow relate the session_id to their user information in our db. that way, we can just check a request's session_id, reference our table(s), and be able to identify them as that user. benefits of this include:
// * not requiring client to log in every time they leave our website
// * being able to restore information (such as information on the forms they're filling) that we managed to save
// * being able to know what form the user is on by the amount of information they've given us (there's no shipping info yet, or no payment info yet, etc.)
module.exports = (req, res, next) => {

  /**
   *
   * Parse cookies in incoming request:
   *
   */

  let cookieString = req.get("Cookie") || ""; //if whoever sent the get request has a cookie already, this will get it

  // the server sets the cookie, the browser keeps the cookie. The cookie is per website. Here, we are responsible for making the cookie (or getting it if it's already there).

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
    res.cookie("s_id", req.session_id); // res.cookie is actually setting the cookie - there wasn't one before from whoever sent the get request, but there will be one after this. We are making up the property "session_id" and attaching it to the request.
  }

  console.log('cookieString: ', cookieString)
  console.log('parsedCookies: ', parsedCookies)


  next();
};
