# Routing in a React Application Demo
This starter provides a small react application with a basic routing implementation. We will walk through the code in the starter to review the implementation of react-router. After we have a basic understanding of how the routing is implemented we will work together to implement some more advanced features.

* Create a new route that renders the `<Welcome/>` component.
    * The URL path should be /welcome/:name. **:name** represents dynamic data passed in via the URL.
        * This data gets added to a `match.params` object that is passed as a prop to the component the Route renders
        * You would access the route with a URL like **/welcome/eric**. You can access the variable with `props.match.params.name` within the component.
    * If the `<Welcome/>` component is accessed through this URL it should display the dynamic name from the URL
    * If the `<Welcome/>` component is accessed through "/" route it should maintain its original behavior and display the value passed in with the "name" prop
* Update the Router functionality to show a 404 component when there is no matching route for the URL specified
    * [Switch Reference](https://reacttraining.com/react-router/web/api/Switch)

## Related Canvas Lessons
- [Using Multiple Components](https://my.kenzie.academy/courses/91/pages/using-multiple-components?module_item_id=15138)
- [Routing In React](https://my.kenzie.academy/courses/91/pages/routing-in-react?module_item_id=15166)
- [Routing Exercise](https://my.kenzie.academy/courses/91/pages/routing-exercise?module_item_id=15167)
- [Routing Exercise Solutions](https://my.kenzie.academy/courses/91/pages/routing-exercise-solutions?module_item_id=15168)

## Additional Resources
- [React Router Dom Docs](https://reacttraining.com/react-router/web/guides/quick-start)  
- [Nested Routing](https://tylermcginnis.com/react-router-nested-routes/)  
- [Another Nested Routing Resource](https://itnext.io/react-router-how-to-add-child-routes-62e23d1a0c5e)
