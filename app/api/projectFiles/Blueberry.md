title: Blueberry
descriptiveTitle: Blueberry: A backend framework
description: Simple, modern, extensible, written in Rust
tags: rust

---

# Blueberry

Create quick backend with a performant framework.

## Overview

I love rust and I also enjoy backend work. I do not get to use rust to do backend work at my job so I wanted to embark on a journey to combine the two in a simple homegrown framework.

## The Basic Design

I started with two simple structs. One being a router with routes:

```
pub struct Router {
    pub routes: Vec<Route>,
    middleware: Vec<Middleware>,
    not_found: Route,
}

pub struct Route {
    pub path: String,
    pub method: Method,
    pub handler: RouteHandler,
}
```

And the other being a request that would be handled by the router after you register a ```Route``` matching that path that the request has:

```
pub struct Request {
    pub method: Method,
    pub path: String,
    pub headers: HashMap<String, String>,
    pub body: String,
}
```

This simple pattern means that you can interact with the router in simple ways. I am proud of the ergonomics of this approach. Here is a quick example of attaching a route to the root of a ```Router``` struct that simply returns a 200 OK response:

```
router.add_route("/", Method::GET, |stream, request, _, _| {
    request.send_message(stream, "HTTP/1.1 200 OK\r\n\r\n");
});
```

Pretty simple, right?

You can consume the 4 parameters in order to access any data you might need from a request. In order this is: the stream (to send bytes back to the client), the request (to access the raw request), the headers (this is useful for things like custom authentication), the params (I added a way to automatically parse the query params since this is a common problem). With just these 4 parameters, lots of use cases for this framework are covered. But wait, there's more!

## Advanced Features

### Middleware

Middleware can be added and is a function that is applied to all requests. It is very similar to a route handler but instead of returning a response to the client, it can run some code and modify the underlying request that the client sends. Remember how I mentioned authentication before? This is the way that I implemented that in my own tests - a simple authentication middleware! You can apply any arbitrary amount of middleware that are processed in the order that you applied them.

### File Serving

You can register a directory that will serve files, for example a directory of HTML files! You can also serve image assets. All you need to do is register the folder like this:

```
router.load_file_routes(path.unwrap_or(&"./src/pages".to_string()))?;
```

And then all of those file names become routes that the router will serve! (You will need to restart the server to see new files - I plan to implement hot reloading)

## Future Roadmap

There are a few things that I want to implement in this project.
First of all is the ability to automatically parse query params into structs using serde. Currently I provide the user with a map of params, all of which are optional.
Secondly, I would then like to implement hot reloading on file serving. This would mean you could add a protected endpoint and upload files and have the server automatically serve them (I could replace this website).
Finally, I would like to implement nested routers. This would allow users to do things like have a /v1/* and /v2/* endpoint when migrating their API.

I look forward to expanding this more.

## Resources

[Github](https://github.com/allends/blueberry)