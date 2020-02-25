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