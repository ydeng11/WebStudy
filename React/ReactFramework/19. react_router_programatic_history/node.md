1. using `replace` in the `<Link>` to replace the value on the top of the history
    - e.g. `<Link replace to={`/home/message/detail/${item.id}/${item.title}`}>`
2. we could use `history` to programmatically change the history stack and use this to jump to the desired path
    - it is compatible with the three ways we pass the params via `Link`
    - but it must be consistent with `Route` so the routing would work correctly
        - when we want tp pass state using the `history` object like the `push` function, we could pass the state as a param in the `push` function
3. only `Router` component has history
4. Use `withRouter` to create a new component allowing regular component to get `history`