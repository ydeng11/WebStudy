1. Do not use exact match when the app needs nested routes because we need match the route sequentially to get to the destination.
    - e.g. `<Route exact={true} path="/home/news" component={About} />`\
        - the app firstly match the route `/home` and get us to the `Home` component
        - then we need set up routing in home component as above to direct the request to the `About` component
        - the place of `<Switch>` block need be placed after the `<Link>` element