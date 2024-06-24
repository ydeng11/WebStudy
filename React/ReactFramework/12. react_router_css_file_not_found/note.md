- With multi-level routing, the css file could be lost
    - given the import of css file in index.html `<link href="./css/bootstrap.css" rel="stylesheet" />`, it uses relative address to locate the css file
    - after using multi-level routing like `<Link to='/test/demo'>Demo</Link>`, the path in address bar changes to `http://url/test/demo` and the browser will try to find the css file in `http://url/test/css/bootstrap.css` which is empty. Thus the returned file will be `index.html` under public folder
    - to solve it, we can
        1. use absolute address `<link href="/css/bootstrap.css" rel="stylesheet" />` to request css file which is at the root of the server
        2. use `<link href="%PUBLIC_URL%/css/bootstrap.css" rel="stylesheet" />` to request css files which is at the public folder
        3. use `HashRouter` instead of `BrowserRouter`