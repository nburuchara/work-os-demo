
const results = [

     //? - - H1 (TOP) HEADERS - - ?//

    {id: "999999", name: "User Management", category: "User Management", page: "Quick Start", lastCat: "top"},

    
    //? - - H1 (IN-TEXT) HEADERS - - ?//

    {id: "999998", name: "Introduction", category: "User Management", subCat1: "Quick Start", page: "Quick Start", lastCat: "Introduction"},
    {id: "999997", name: "Before getting started", category: "User Management", subCat1: "Quick Start", page: "Quick Start", lastCat: "Before getting started"},
    {id: "999996", name: "Configure your project", category: "User Management", subCat1: "Quick Start", page: "Quick Start", lastCat: "Configure your project"},
    {id: "999995", name: "Add AuthKit to your app", category: "User Management", subCat1: "Quick Start", page: "Quick Start", lastCat: "Add AuthKit to your app"},
    {id: "999994", name: "Handle the user session", category: "User Management", subCat1: "Quick Start", page: "Quick Start", lastCat: "Handle the user session"},


    //? - - H3 HEADERS - - ?//

    {id: "999993", name: "Install dependencies", category: "User Management", subCat1: "Quick Start", subCat2: "Configure your project", lastCat: "Install dependencies", page: "Quick Start"},
    {id: "999992", name: "Configure a redirect URI", category: "User Management", subCat1: "Quick Start", subCat2: "Configure your project", lastCat: "Configure a redirect URI", page: "Quick Start"},
    {id: "999991", name: "Set secrets", category: "User Management", subCat1: "Quick Start", subCat2: "Configure your project", page: "Quick Start", lastCat: "Set secrets"},
    {id: "999990", name: "Redirect users to AuthKit", category: "User Management", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", page: "Quick Start", lastCat: "Redirect users to AuthKit"},
    {id: "999989", name: "Add a callback endpoint", category: "User Management", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", page: "Quick Start", lastCat: "Add a callback endpoint"},
    {id: "999988", name: "Validate the authentication flow", category: "User Management", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", page: "Quick Start", lastCat: "Validate the authentication flow"},


    //? - - H3 LABELED HEADERS - - !?/

    {id: "999987", name: "Using authkit-nextjs", category: "User Management", subCat1: "Quick Start", subCat2: "Handle the user session", page: "Quick Start", lastCat: "Handle the user session"},
    {id: "999986", name: "Manually", category: "User Management", subCat1: "Quick Start", subCat2: "Handle the user session", page: "Quick Start", lastCat: "Handle the user session"},
    {id: "999985", name: "Create a session password", category: "User Management", subCat1: "Quick Start", subCat2: "Handle the user session", subCat3: "Manually", page: "Quick Start", lastCat: "Create a session password"},
    {id: "999984", name: "Save the encrypted session", category: "User Management", page: "Quick Start", subCat1: "Quick Start", subCat2: "Handle the user session", subCat3: "Manually", lastCat: "Save the encrypted session"},


    //? - - P TAGS - - ?//

    {id: "999983", name: "Easy to authenticate APIs designed to provide a flexible, secure, and fast integration.", category: "User Management", page: "Quick Start", lastCat: "top"},
    {id: "999982", name: "Integrating User Management features into your app is quick and easy. In this guide, we’ll take you through adding a hosted authentication flow to your application using AuthKit.", category: "User Management", subCat1: "Quick Start", subCat2: "Introduction", page: "Quick Start", lastCat: "Introduction"},
    {id: "999981", name: "To get the most out of this guide, you’ll need:", category: "User Management", subCat1: "Quick Start", subCat2: "Before getting started", page: "Quick Start", lastCat: "Before getting started"},
    {id: "999980", name: "A WorkOS account", category: "User Management", page: "User Management", subCat1: "Quick Start", subCat2: "Before getting started", lastCat: "Before getting started"},
    {id: "999979", name: "Your WorkOS API Key and Client ID.", category: "User Management", subCat1: "Quick Start", subCat2: "Before getting started", page: "User Management", lastCat: "Before getting started"},
    {id: "999978", name: "Let's add the necessary dependencies and configuration in your WorkOS Dashboard.", category: "User Management", subCat1: "Quick Start", subCat2: "Configure your project", page: "Quick Start", lastCat: "Configure your project"},
    {id: "999977", name: "If you're using Next.js, you can use the authkit-nextjs library. The Next.js library is the fastest way to get AuthKit and Impersonation working in your Next.js application with full session management.", category: "User Management", subCat1: "Quick Start", subCat2: "Install dependencies", page: "Quick Start", lastCat: "Install dependencies"},
    {id: "999976", name: "Alternatively you can use one of the several native SDKs that WorkOS provides. This guide will use the popular Node.js SDK.", category: "User Management", subCat1: "Quick Start", subCat2: "Install dependencies", page: "Quick Start", lastCat: "Install dependencies"},
    {id: "999975", name: "A redirect URI is a callback endpoint that WorkOS will redirect to after a user has authenticated. This endpoint will exchange the authorization code returned by WorkOS for an authenticated User object. We’ll be creating this endpoint in the next step.", category: "User Management", page: "Quick Start", subCat1: "Quick Start", subCat2: "Configure a redirect URI", lastCat: "Configure a redirect URI"},
    {id: "999974", name: "You can set a redirect URI in the Redirects section of the WorkOS Dashboard – be sure not to include wildcard subdomains or query parameters.", category: "User Management", subCat1: "Quick Start", subCat2: "Configure a redirect URI", page: "Quick Start", lastCat: "Configure a redirect URI"},
    {id: "999973", name: "To make calls to WorkOS, provide the API key and the client ID. Store these values as managed secrets and pass them to the SDKs either as environment variables or directly in your app's configuration depending on your preferences.", category: "User Management", subCat1: "Quick Start", subCat2: "Set secrets", page: "Quick Start", lastCat: "Set secrets" },
    {id: "999972", name: "The code examples use your staging API keys when signed in", category: "User Management", subCat1: "Quick Start", subCat2: "Set secrets", page: "Quick Start", lastCat: "Set secrets"},
    {id: "999971", name: "Let's integrate the hosted authentication flow into your app.", category: "User Management", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", page: "Quick Start", lastCat: "Add AuthKit to your app"},
    {id: "999970", name: "First, we'll need to direct users to sign in (or sign up) using AuthKit before redirecting them back to your application. We'll do this by generating an AuthKit authorization URL server side and redirecting the user to it.", category: "User Management", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", subCat3: "Redirect users to AuthKit", page: "Quick Start", lastCat: "Redirect users to AuthKit"},
    {id: "999969", name: "You can use the optional state parameter to encode arbitrary information to help restore application state between redirects.", category: "User Management", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", subCat3: "Redirect users to AuthKit", page: "Quick Start", lastCat: "Redirect users to AuthKit",},

    {id: "999968", name: "WorkOS will redirect to your Redirect URI if there is an issue generating an authorization URL. Read our API Reference for more details.", category: "User Management", page: "Quick Start", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", subCat3: "Redirect users to AuthKit", lastCat: "You can use the optional state"},

    {id: "999967", name: "Next, let’s add the callback endpoint (referenced in Configure a redirect URI) which will exchange the authorization code (valid for 10 minutes) for an authenticated User object.", category: "User Management", page: "Quick Start", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", subCat3: "Add a callback endpoint", lastCat: "WorkOS will redirect"},

    {id: "999966", name: "Navigate to the authentication endpoint we created and sign up for an account. You can then sign in with the newly created credentials and see the user listed in the Users section of the WorkOS Dashboard", category: "User Management", subCat1: "Quick Start", subCat2: "Add AuthKit to your app", subCat3: "Validate the authentication flow", page: "Quick Start", lastCat: "WorkOS will redirect"},

    {id: "999965", name: "There are two ways to integrate session management with WorkOS:", category: "User Management", subCat1: "Quick Start", subCat2: "Handle the user session", page: "Quick Start", lastCat: "Handle the user session"},

    {id: "999964", name: "If using the authkit-nextjs library, session management is handled for you. No further integration is required.", category: "User Management", subCat1: "Quick Start", subCat2: "Handle the user session", subCat3: "Using authkit-nextjs", page: "Quick Start", lastCat: "For illustration purposes"},

    {id: "999963", name: "In order to persist the authenticated state of the user in the application, we need to store and access a session.", category: "User Management", subCat1: "Quick Start", subCat2: "Handle the user session", subCat3: "Manually", page: "Quick Start", lastCat: "For illustration purposes" },

    {id: "999962", name: "For illustration purposes we’ll be using a JSON Web Token (JWT) to store the authenticated user in a short lived cookie, though your approach may differ depending on the application's specific requirements.", category: "User Management", subCat1: "Quick Start", subCat2: "Handle the user session", subCat3: "Manually", page: "Quick Start", lastCat: "For illustration purposes"},

    {id: "999961", name: "First, generate a unique password to seal the session with.", category: "User Management", subCat1: "Quick Start", subCat2: "Create a session password", page: "Quick Start", lastCat: "Create a session password"},

    {id: "999960", name: "Then add it to the environment variables file.", category: "User Management", subCat1: "Quick Start", subCat2: "Create a session password", page: "Quick Start", lastCat: "Create a session password"},

    {id: "999959", name: "Next, update the callback to seal the access and refresh token. The access token is a JWT which is used to check if the session is still valid. If it isn't, the refresh token is used to attempt to retrieve a new access token.", category: "User Management", subCat1: "Quick Start", subCat2: "Save the encrypted session", page: "Quick Start", lastCat: "Save the encrypted session"},

    {id: "999958", name: "Then, use middleware to specify which routes should be protected. If the session has expired, use the refresh token to attempt to generate a new one.", category: "User Management", subCat1: "Quick Start", subCat2: "Save the encrypted session", page: "Quick Start", lastCat: "Save the encrypted session"},

    {id: "999957", name: "Finally, add the middleware to the route that should only be accessible to logged in users.", category: "User Management", subCat1: "Quick Start", subCat2: "Save the encrypted session", page: "Quick Start", lastCat: "Save the encrypted session"},

]

export default results;