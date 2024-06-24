1. We could build custom components as a wrapper around the native components so we could have default element attributes set up.
2. For `<NavLink>`, we could use `activeClassName` to set the css style when we highlight the link
3. The element value is also a key-value in props and the key is `children`
    e.g. `<NavLink>Demo</NavLink>` will pass a props containing `children: Demo` to the component `NavLink`
4. We could use `...` to destructure the props and pass to the native component