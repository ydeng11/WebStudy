1. `Router` uses fuzzy match as the default option to match routes.
    - for `<Route path="/about" component={About} />` and `<MyNavLink to="/about/a/b">About</MyNavLink>`
        - it will work
2. `Router` uses `exact={true}` for exact match
    - this will prevent the match of secondary routes.
    - e.g. `<Route exact={true} path="/about" component={About} />`