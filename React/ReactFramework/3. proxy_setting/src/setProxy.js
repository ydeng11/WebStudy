const proxy = require("http-proxy-middleware");

/*
1. when sending request to http://localhost:5000/user, we need to send request to http://localhost:3000/api/user
and the '/api' will be replaced with empty string by `pathRewrite`

2. If we have multiple proxies, we just add it to the below function using the same format

*/
module.exports = function (app) {
  app.use(
    // the proxy will be used when the request path starts with '/api'
    proxy("/api", {
      target: "http://localhost:5000", // target url
      changeOrigin: true, // Control the value of Host key in the request Headers
      // rewrite the request path (see #1 above)
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
