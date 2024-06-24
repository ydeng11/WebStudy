# Router Component vs. Regular Component
1. Router components are put under `pages` folder; Regular components are put under `components`folder
2. Router components is used with `<Link>` and `<Route>`
    - e.g. `<Link to="/home" className="list-group-item">Home</Link>` and `<Route path="/home" component={Home} />`
    - but regular components is used directly under html elements like `<div><Home /></div>`
3. Regular components doesn't have any props if we don't pass any props to it, but router components will get props from `Router`
    - history
        - go: fcn
        - goBack: fcn
        - goForward: fcn
        - push: fcn
        - replace: fcn
    - location
        - pathname 
        - search
        - state
    - match
        - params: {}
        - path
        - url
