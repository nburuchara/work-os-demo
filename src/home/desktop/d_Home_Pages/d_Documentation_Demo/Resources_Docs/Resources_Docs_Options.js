const docs_sidebar_options = [
    {
        id: 0,
        levelName: "API Reference",
        sections: [
            { 
                id: 0,
                levelName: "Overview",
                sections: [
                    {   
                        id: 0, 
                        levelName: 'Overview',
                    },
                    {
                        id: 1, 
                        levelName: 'Client libraries',
                    },
                    {
                        id: 2, 
                        levelName: 'Testing',
                    },
                    {
                        id: 3, 
                        levelName: 'API Keys',
                    },
                    {
                        id: 4, 
                        levelName: 'Errors',
                    },
                    {
                        id: 5, 
                        levelName: 'Pagination',
                    },
                    {
                        id: 6, 
                        levelName: 'Idempotency',
                    },
                    {
                        id: 7, 
                        levelName: 'Rate limits',
                    },
                ]
            },
            {
                id: 1,
                levelName: "Events",
                sections: [
                    {
                        id: 0,
                        levelName: "Overview",
                    },
                    {
                        id: 1,
                        levelName: "List events",
                    }
                ]
            },
            {
                id: 2,
                levelName: "Organizations",
                sections: [
                    {
                        id: 0,
                        levelName: "Organization",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get an Organizations",
                            },
                            {
                                id: 1,
                                levelName: "List Organizations",
                            },
                            {
                                id: 2,
                                levelName: "Create an Organization",
                            },
                            {
                                id: 3,
                                levelName: "Update an Organization",
                            },
                            {
                                id: 4,
                                levelName: "Delete an Organization",
                            },
                        ]
                    },
                    {
                        id: 1,
                        levelName: "Organization Domain",
                    }
                ]
            },
            {
                id: 3,
                levelName: "User Management",
                sections: [
                    {
                        id: 0,
                        levelName: 'Overview',
                    },
                    {
                        id: 1,
                        levelName: 'User',
                        sections: [
                            {
                                id: 0,
                                levelName: "Get a User",
                            },
                            {
                                id: 1,
                                levelName: "List Users",
                            },
                            {
                                id: 2,
                                levelName: "Create a User",
                            },
                            {
                                id: 3,
                                levelName: "Update a User",
                            },
                            {
                                id: 4,
                                levelName: "Delete a User",
                            },
                        ]
                    },
                    {
                        id: 2,
                        levelName: "Identity",
                        sections: [
                            {
                                id: 0,
                                levelName: 'List identities',
                            }
                        ]
                    },
                    {
                        id: 3,
                        levelName: "Authentication",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get authorization URL",
                                sections: [
                                    {
                                        id: 0,
                                        levelName: "Redirect URI",
                                    },
                                    {
                                        id: 1,
                                        levelName: "Error codes",
                                    }
                                ]
                            },
                            {
                                id: 1,
                                levelName: "Authkit, OAuth, SSO",
                            },
                            {
                                id: 2,
                                levelName: "Password",
                            },
                            {
                                id: 3,
                                levelName: "Magic Auth",
                            },
                            {
                                id: 4,
                                levelName: "Refresh token",
                            },
                            {
                                id: 5,
                                levelName: "Email verification code",
                            },
                            {
                                id: 6,
                                levelName: "TOTP code",
                            },
                            {
                                id: 7,
                                levelName: "Organization selection",
                            }
                        ]
                    },
                    {
                        id: 4,
                        levelName: "Session tokens",
                        sections: [
                            {
                                id: 0,
                                levelName: "JWKS",
                            },
                            {
                                id: 1,
                                levelName: "Access token",
                            },
                            {
                                id: 2,
                                levelName: "Refresh token",
                            }
                        ]
                    },
                    {
                        id: 5,
                        levelName: "Authentication errors",
                        sections: [
                            {
                                id: 0,
                                levelName: "Email verification",
                            },
                            {
                                id: 1,
                                levelName: "MFA enrollments",
                            },
                            {
                                id: 2,
                                levelName: "MFA challenge",
                            },
                            {
                                id: 3,
                                levelName: "SSO required",
                            },
                            {
                                id: 4,
                                levelName: "Organization auth. required",
                            }
                        ]
                    },
                    {
                        id: 6,
                        levelName: "Magic Auth",
                        sections: [
                            {
                                id: 0, 
                                levelName: "Get a Magic Auth code",
                            },
                            {
                                id: 1,
                                levelName: "Create a Magic Auth code",
                            },
                            {
                                id: 2,
                                levelName: "Send Magic Auth code",
                            }
                        ]
                    },
                    {
                        id: 7,
                        levelName: "Multi-Factor Auth",
                        sections: [
                            {
                                id: 0,
                                levelName: "Authentication factor",
                            }, 
                            {
                                id: 1,
                                levelName: "Authentication challenge",
                            },
                            {
                                id: 2,
                                levelName: "Enroll an auth factor",
                            },
                            {
                                id: 3,
                                levelName: "List auth factors",
                            }
                        ]
                    },
                    {
                        id: 8,
                        levelName: "Password reset",
                        sections: [
                            {
                                id: 0,
                                levelName: "Send email",
                            },
                            {
                                id: 1, 
                                levelName: "Reset password",
                            }
                        ]
                    },
                    {
                        id: 9,
                        levelName: "Organization membership",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get membership",
                            },
                            {
                                id: 1,
                                levelName: "List memberships",
                            },
                            {
                                id: 2,
                                levelName: "Create membership",
                            },
                            {
                                id: 3,
                                levelName: "Update membership",
                            },
                            {
                                id: 4,
                                levelName: "Delete membership",
                            },
                        ]
                    },
                    {
                        id: 10,
                        levelName: "Invitation",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get an invitation",
                            },
                            {
                                id: 1,
                                levelName: "List invitations",
                            },
                            {
                                id: 2,
                                levelName: "Send an invitation",
                            },
                            {
                                id: 3,
                                levelName: "Revoke an invitation",
                            },
                        ]
                    },
                    {
                        id: 11,
                        levelName: "Logout",
                    }
                ]
            },
            {
                id: 4,
                levelName: "Single Sign-On",
                sections: [
                    {
                        id: 0,
                        levelName: "Overview",
                    },
                    {
                        id: 1,
                        levelName: "Get authorization URL",
                        sections: [
                            {
                                id: 0,
                                levelName: "Redirect URI",
                            },
                            {
                                id: 1,
                                levelName: "Error codes",
                            }
                        ]
                    },
                    {
                        id: 2,
                        levelName: "Profile",
                        sections: [
                            {
                                id: 0, 
                                levelName: "Get a Profile and Token",
                            },
                            {
                                id: 1,
                                levelName: "Get a User Profile",
                            }
                        ]
                    },
                    {
                        id: 3,
                        levelName: "Connections",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get a Connection",
                            },
                            {
                                id: 1,
                                levelName: "List Connections",
                            },
                            {
                                id: 2,
                                levelName: "Delete a Connection",
                            }
                        ]
                    },
                ]
            },
            {
                id: 5,
                levelName: "Directory Sync",
                sections: [
                    {
                        id: 0,
                        levelName: "Overview",
                    },
                    {
                        id: 1,
                        levelName: "Directory",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get a Directory",
                            },
                            {
                                id: 1,
                                levelName: "List Directories",
                            },
                            {
                                id: 2,
                                levelName: "Delete directories",
                            }
                        ]
                    },
                    {
                        id: 2,
                        levelName: "Directory User",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get a Directory User",
                            },
                            {
                                id: 1,
                                levelName: "List Directory Users",
                            }
                        ]
                    },
                    {
                        id: 3,
                        levelName: "Directory Group",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get a Directory Group",
                            },
                            {
                                id: 1,
                                levelName: "List Directory Groups",
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                levelName: "Admin Portal",
                sections: [
                    {
                        id: 0,
                        levelName: "Overview",
                    },
                    {
                        id: 1,
                        levelName: "Portal Link",
                    },
                    {
                        id: 2,
                        levelName: "Generate a Portal Link",
                    }
                ]
            },
            {
                id: 7,
                levelName: "Audit Logs",
                sections: [
                    {
                        id: 0,
                        levelName: "Overview",
                    }, 
                    {
                        id: 1,
                        levelName: "Create Event",
                    },
                    {
                        id: 2,
                        levelName: "Create Schema",
                    },
                    {
                        id: 3,
                        levelName: "List Schemas",
                    },
                    {
                        id: 4,
                        levelName: "List Actions",
                    },
                    {
                        id: 5,
                        levelName: "Audit Log Export",
                    },
                    {
                        id: 6,
                        levelName: "Create Export",
                    },
                    {
                        id: 7,
                        levelName: "Get Export",
                    },
                    {
                        id: 8,
                        levelName: "Get Retention",
                    },
                    {
                        id: 9,
                        levelName: "Set Retention",
                    }
                ]
            },
            {
                id: 8,
                levelName: "Domain Verification",
                sections: [
                    {
                        id: 0,
                        levelName: "Organization Domain",
                        sections: [
                            {
                                id: 0,
                                levelName: "Get",
                            },
                            {
                                id: 1,
                                levelName: "Create",
                            },
                            {
                                id: 2,
                                levelName: "Verify",
                            },
                        ]
                    }
                ]
            },
            {
                id: 9,
                levelName: "Multi-Factor Auth",
                sections: [
                    {
                        id: 0,
                        levelName: "Authentication Factor",
                    },
                    {
                        id: 1,
                        levelName: "Authentication Challenge",
                    },
                    {
                        id: 2,
                        levelName: "Enroll Factor",
                    },
                    {
                        id: 3,
                        levelName: "Challenge Factor",
                    },
                    {
                        id: 4,
                        levelName: "Verify Challenge",
                    },
                    {
                        id: 5,
                        levelName: "Get Authentication Factor",
                    },
                    {
                        id: 6,
                        levelName: "Delete Authentication Factor",
                    },
                ]
            },
            {
                id: 10,
                levelName: "Deprecated APIs",
                sections: [
                    {
                        id: 0,
                        levelName: "Magic Link",
                        sections: [
                            {
                                id: 0,
                                levelName: "Passwordless Session",
                            },
                            {
                                id: 1,
                                levelName: "Create Passwordless Sessions",
                            },
                            {
                                id: 2,
                                levelName: "Email a Magic Link"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        levelName: "Integrations",
        sections: [
            {
                id: 0,
                levelName: "SAML",
            },
            {
                id: 1,
                levelName: "SCIM"
            },
            {
                id: 2,
                levelName: "SFTP"
            },
            {
                id: 3,
                levelName: "OpenID Connect"
            },
            {
                id: 4,
                levelName: "Access People HR",
            },
            {
                id: 5,
                levelName: "ADP OpenID Connect"
            },
            {
                id: 6,
                levelName: "AuthO"
            },
            {
                id: 7,
                levelName: "AWS Cognito"
            },
            {
                id: 8,
                levelNamee: "Bamboo HR"
            },
            {
                id: 9,
                levelName: "Breathe HR"
            },
            {
                id: 10,
                levelName: "Bubble Plugin"
            },
            {
                id: 11,
                levelName: "CAS SAML"
            },
            {
                id: 12,
                levelName: "Cezanne HR"
            },
            {
                id: 13,
                levelName: "ClassLink"
            },
            {
                id: 14,
                levelName: "Cloudflare"
            },
            {
                id: 15,
                levelName: "CyberArk SAML"
            },
            {
                id: 16,
                levelName: "CyberArk SCIM"
            },
            {
                id: 17,
                levelName: "Duo"
            },
            {
                id: 18,
                levelName: "Entra ID SAML (fka Azure AD)"
            },
            {
                id: 19,
                levelName: "Entra ID SCIM (fka Azure AD)"
            },
            {
                id: 20,
                levelName: "Firebase"
            },
            {
                id: 21,
                levelName: "Fourth"
            },
            {
                id: 22,
                levelName: "GitHub OAuth"
            },
            {
                id: 23,
                levelName: "Google Directory Sync"
            },
            {
                id: 24,
                levelName: "Google OAuth"
            },
            {
                id: 25,
                levelName: "Google SAML"
            },
            {
                id: 26,
                levelName: "HiBob"
            },
            {
                id: 27,
                levelName: "JumpCloud SAML"
            },
            {
                id: 28,
                levelName: "JumpCloud SCIM"
            },
            {
                id: 29,
                levelName: "Keycloak"
            },
            {
                id: 30,
                levelName: "Last Pass"
            },
            {
                id: 31,
                levelName: "Login.gov OpenID Connect"
            },
            {
                id: 32,
                levelName: "Microsoft AD FS SAML"
            },
            {
                id: 33,
                levelName: "Microsoft OAuth"
            },
            {
                id: 34,
                levelName: "miniOrange"
            },
            {
                id: 35,
                levelName: "NetIQ"
            },
            {
                id: 36,
                levelName: "NextAuth.js"
            },
            {
                id: 37,
                levelName: "Okta SAML"
            },
            {
                id: 38,
                levelName: "Okta SCIM"
            },
            {
                id: 39,
                levelName: "OneLogin SAML"
            },
            {
                id: 40,
                levelName: "OneLogin SCIM"
            },
            {
                id: 41,
                levelName: "Oracle SAML"
            },
            {
                id: 42,
                levelName: "PingFederate SAML"
            },
            {
                id: 43,
                levelName: "PingFederate SCIM"
            },
            {
                id: 44,
                levelName: "PingOne SAML"
            },
            {
                id: 45,
                levelName: "React Native Expo"
            },
            {
                id: 46,
                levelName: "Rippling SAML"
            },
            {
                id: 47,
                levelName: "Rippling SCIM"
            },
            {
                id: 48,
                levelName: "Salesforce"
            },
            {
                id: 49,
                levelName: "Shibboleth Generic SAML"
            },
            {
                id: 50,
                levelName: "Shibboleth Unsolicited SAML"
            },
            {
                id: 51,
                levelName: "SimpleSAMLphp"
            },
            {
                id: 52,
                levelName: "Supabase"
            },
            {
                id: 53,
                levelName: "VMWare"
            },
            {
                id: 54,
                levelName: "Workday"
            },
        ]
    },
    {
        id: 2,
        levelName: "Migrate to WorkOS",
        sections: [
            {
                id: 0,
                levelName: "AuthO"
            },
            {
                id: 1,
                levelName: "AWS Cognito"
            },
            {
                id: 2,
                levelName: "Firebase"
            },
            {
                id: 3,
                levelName: "Other Services"
            },
            {
                id: 4,
                levelName: "Single Sign-On"
            }
        ]
    },
    {
        id: 3,
        levelName: "SDKs",
        sections: [
            {
                id: 0,
                levelName: "Node.js"
            },
            {
                id: 1,
                levelName: "Go",
            },
            {
                id: 2,
                levelName: "Ruby"
            },
            {
                id: 3,
                levelName: "Python"
            },
            {
                id: 4,
                levelName: "PHP"
            },
            {
                id: 5,
                levelName: "Laravel"
            },
            {
                id: 6,
                levelName: "Java"
            },
            {
                id: 7,
                levelName: ".NET"
            },
            {
                id: 8,
                levelName: "Elixir"
            },
            {
                id: 9,
                levelName: "Django"
            },
            {
                id: 10,
                levelName: "OmniAuth"
            },
            {
                id: 11,
                levelName: "Ueberauth"
            }
        ]
    },
    {
        id: 4,
        levelName: "Dashboard"
    },
    {
        id: 5,
        levelName: "Glossary"
    },
    {
        id: 6,
        levelName: "Changelog"
    }
]

export default docs_sidebar_options;