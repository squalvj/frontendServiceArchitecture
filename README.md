# Service Architecture For Frontend With Axios

This is the architecuture for a better service calling flow for large application.

Error Handling ✅
Custom Error Handling ✅
Header Injector ✅
Service Request Interceptor ✅
Service Response Interceptor ✅
Custom Data Injector ✅
Custom Parameter Injector ✅

# Folder Structure
```
project
│   README.md
│   package.json
└───service
│   │   index.js
│   │   list.js -> list of api
└───module
│   |	User.js
|   |   Other Module...
```

 - Service -> index.js -> Construct architecture of your api call here, showing loader, hide loader here, intercept request & response here, canceling request here, but keep in mind, **this is for handling generic error & intercept generic exception**.
 - Service -> list.js -> List of api
 - module -> [any module] -> This is the getter selector of your api