# NEXTJS_Full_Stack_Project

## Tips

- app/page.tsx is the file you will spend your time mostly.
- SSR vs CSR
- keep each component ssr until you need some browser interactivity.
- At which point you most likely to encounter an error
  make sure to add the following:-

```js
"use client";
```

- As for client side component without browser activity still considered as server-side
  since it's prerendered ...
- Routing
  - creating a new folder (/about)
  - create a file in that directory(page.tsx)
  - initialize the component
- When two route have same purpose
  - create a folder(The common purpose , e.g, dashboard)
  - Create all the required folder having the same purpose(user,analytics) in the created directory (dashboard)
  - in each directory create file(page.tsx) and add components accordingly
  - **router url**
    - /dashboard/user
    - /dashboard/analytics
- Dynamic route
  - url - e.g `dashboard/users/[user]` ....[user] is a dynamic part
- Layout.tsx :acts as a parent of all route
  - useful when rendering same header and footer for all pages
- if we want to integrate same dashboard feature into all the dashboard related route ,then create layout.tsx .It will act as parent for dashboard related route
- Route group
