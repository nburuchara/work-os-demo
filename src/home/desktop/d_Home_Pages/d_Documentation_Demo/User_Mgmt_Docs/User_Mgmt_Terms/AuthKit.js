
const results = [

    //? - - H1 (TOP) HEADERS - - ?//

         //! - AUTHKIT - !//

    {id: "999953", name: "AuthKit", category: "User Management", subCat1: "AuthKit",  page: "AuthKit", lastCat: "top"},

     //? - - H1 (IN-TEXT) HEADERS - - ?//

         //! - AUTHKIT - !//

    {id: "999952", name: "Introduction", category: "User Management", subCat1: "AuthKit",  page: "AuthKit", lastCat: "Introduction"},
    {id: "999951", name: "Authentication Flow", category: "User Management", subCat1: "AuthKit",  page: "AuthKit", lastCat: "img3"},
    {id: "999950", name: "Authentication Methods", category: "User Management", subCat1: "AuthKit",  page: "AuthKit", lastCat: "Authentication Methods"},
    {id: "999949", name: "Integrating", category: "User Management", subCat1: "AuthKit",  page: "AuthKit", lastCat: "Integrating"},

    //? - - H3 LABELED HEADERS - - !?/

       //! - AUTHKIT - !//

    {id: "999948", name: "Integrate with AuthKit", category: "User Management", subCat1: "AuthKit", subCat2: "Integrating", page: "AuthKit", lastCat: "Integrating"},
    {id: "999947", name: "Build your own authentication flows", category: "User Management", subCat1: "AuthKit", subCat2: "Integrating",  page: "AuthKit", lastCat: "Integrating"},

    //? - - P TAGS - - ?//

        //! - AUTHKIT - !//

    {id: "999946", name: "Customizable sign-in UI that abstracts away all of the complexity associated with building secure authentication flows.", category: "User Management", page: "AuthKit", lastCat: "AuthKit"},
    {id: "999945", name: "Implementing authentication flows that handle every possible error state and edge case across multiple identity providers can be a daunting task. AuthKit makes this easy by providing a hosted, pre-built, customizable authentication UI with automatic handling of:", subCat1: "AuthKit", subCat2: "Introduction", category: "User Management", page: "AuthKit", lastCat: "Introduction"},
    {id: "999944", name: "Sign up, sign in, password reset, and email verification flows.", subCat1: "AuthKit", subCat2: "Introduction", category: "User Management", page: "AuthKit", lastCat: "Introduction"},
    {id: "999943", name: "Enterprise SSO routing and MFA enrollment.", subCat1: "AuthKit", subCat2: "Introduction", category: "User Management", page: "AuthKit", lastCat: "Introduction"},
    {id: "999942", name: "Automatic bot detection and blocking, to protect against brute force attacks.", subCat1: "AuthKit", subCat2: "Introduction", category: "User Management", page: "AuthKit", lastCat: "Introduction"},
    {id: "999941", name: "Customizable domains and branding.", subCat1: "AuthKit", subCat2: "Introduction", category: "User Management", page: "AuthKit", lastCat: "Introduction"},

    {id: "999940", name: "AuthKit is conceptually similar to a Social Login (OAuth) experience, but with the added benefit of being able to authenticate users with any identity provider.", subCat1: "AuthKit", subCat2: "Authentication Flow", category: "User Management", page: "AuthKit", lastCat: "img3"},
    {id: "999939", name: "AuthKit sits outside of your application code. When a user initiates a sign-in request, your application redirects them to the AuthKit URL. The user then completes the authentication process with WorkOS before being returned to the application.", subCat1: "AuthKit", subCat2: "Authentication Flow", category: "User Management", page: "AuthKit", lastCat: "img3"},
    {id: "999938", name: "Your application will exchange the resulting authorization code to retrieve an authenticated User object and handle the session.", subCat1: "AuthKit", subCat2: "Authentication Flow", category: "User Management", page: "AuthKit", lastCat: "img3"},
    {id: "999937", name: "The AuthKit flow abstracts away many of the UX and WorkOS API calling concerns automatically, for more guidance on integrating with AuthKit, see the Quick Start guide.", subCat1: "AuthKit", subCat2: "Authentication Flow", category: "User Management", page: "AuthKit", lastCat: "img4"},
    {id: "999936", name: "AuthKit also provides a sign-up flow for creating users. Available options are determined by the configured authentication methods. If a user’s email address is associated with an SSO connection, they will automatically be redirected to sign up via their IdP.", subCat1: "AuthKit", subCat2: "Authentication Flow", category: "User Management", page: "AuthKit", lastCat: "img4"},

    {id: "999935", name: "AuthKit supports all of the authentication methods available in WorkOS User Management and will automatically adjust the available options depending on the configured methods in the Authentication section of the WorkOS Dashboard", subCat1: "AuthKit", subCat2: "Authentication Methods", category: "User Management", page: "AuthKit", lastCat: "Authentication Methods"},
    {id: "999934", name: "Email + Password authentication is enabled by default, though set up may be required to enable additional methods. See the relevant feature section for more information:", subCat1: "AuthKit", subCat2: "Authentication Methods", category: "User Management", page: "AuthKit", lastCat: "Authentication Methods"},
    {id: "999933", name: "Single Sign-On", subCat1: "AuthKit", subCat2: "Authentication Methods", category: "User Management", page: "AuthKit", lastCat: "Authentication Methods"},
    {id: "999932", name: "Email + Password", subCat1: "AuthKit", subCat2: "Authentication Methods", category: "User Management", page: "AuthKit", lastCat: "Authentication Methods"},
    {id: "999931", name: "Social Login", subCat1: "AuthKit", subCat2: "Authentication Methods", category: "User Management", page: "AuthKit", lastCat: "Authentication Methods"},
    {id: "999930", name: "Multi-Factor Auth", subCat1: "AuthKit", subCat2: "Authentication Methods", category: "User Management", page: "AuthKit", lastCat: "Authentication Methods"},
    {id: "999929", name: "Magic Auth", subCat1: "AuthKit", subCat2: "Authentication Methods", category: "User Management", page: "AuthKit", lastCat: "Authentication Methods"},
    
    {id: "999929", name: "Integration into your app is quick and easy, though the route you choose varies depending on your specific requirements:", subCat1: "AuthKit", subCat2: "Integrating", category: "User Management", page: "AuthKit", lastCat: "Integrating"},
    {id: "999928", name: "In just a few lines of code, you can add AuthKit to your app and start authenticating users. See the quick start guide for more information.", subCat1: "AuthKit", subCat2: "Integrating", subcat3: "Integrate with AuthKit", category: "User Management", page: "AuthKit", lastCat: "Integrating"},
    {id: "999927", name: "While the hosted solution is the fastest way to get started, if you’d prefer to build and manage your own authentication UI, you can do so via the User Management API.", subCat1: "AuthKit", subCat2: "Integrating", subcat3: "Build your own authentication flows", category: "User Management", page: "AuthKit", lastCat: "Integrating"},
    {id: "999926", name: "Examples of building custom UI are available on GitHub", subCat1: "AuthKit", subCat2: "Integrating", subcat3: "Build your own authentication flows", category: "User Management", page: "AuthKit", lastCat: "Integrating"},


];

export default results;