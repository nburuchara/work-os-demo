const docs_sidebar_options = [
    {
        id: 0,
        levelName: "API Reference",
        sections: [
            { 
                id: 1,
                levelName: "Introduction",
                sections: [
                    {   
                        id: 2, 
                        levelName: 'Overview',
                    },
                    {
                        id: 3, 
                        levelName: 'Client libraries',
                    },
                    {
                        id: 4, 
                        levelName: 'Testing',
                    },
                    {
                        id: 5, 
                        levelName: 'API Keys',
                    },
                    {
                        id: 6, 
                        levelName: 'Errors',
                    },
                    {
                        id: 7, 
                        levelName: 'Pagination',
                    },
                    {
                        id: 8, 
                        levelName: 'Idempotency',
                    },
                    {
                        id: 9, 
                        levelName: 'Rate limits',
                    },
                ]
            },
            {
                id: 10,
                levelName: "Events",
                sections: [
                    {
                        id: 11,
                        levelName: "Overview (Events)",
                    },
                    {
                        id: 12,
                        levelName: "List events",
                    }
                ]
            },
            {
                id: 13,
                levelName: "Organizations",
                sections: [
                    {
                        id: 14,
                        levelName: "Organization",
                        sections: [
                            {
                                id: 15,
                                levelName: "Get an Organization",
                            },
                            {
                                id: 16,
                                levelName: "List Organizations",
                            },
                            {
                                id: 17,
                                levelName: "Create an Organization",
                            },
                            {
                                id: 18,
                                levelName: "Update an Organization",
                            },
                            {
                                id: 19,
                                levelName: "Delete an Organization",
                            },
                        ]
                    },
                    {
                        id: 20,
                        levelName: "Organization Domain",
                    }
                ]
            },
            {
                id: 21,
                levelName: "User Management",
                sections: [
                    {
                        id: 22,
                        levelName: 'Overview (UM)',
                    },
                    {
                        id: 23,
                        levelName: 'User',
                        sections: [
                            {
                                id: 24,
                                levelName: "Get a User",
                            },
                            {
                                id: 25,
                                levelName: "List Users",
                            },
                            {
                                id: 26,
                                levelName: "Create a User",
                            },
                            {
                                id: 27,
                                levelName: "Update a User",
                            },
                            {
                                id: 28,
                                levelName: "Delete a User",
                            },
                        ]
                    },
                    {
                        id: 29,
                        levelName: "Identity",
                        sections: [
                            {
                                id: 30,
                                levelName: 'List identities',
                            }
                        ]
                    },
                    {
                        id: 31,
                        levelName: "Authentication",
                        sections: [
                            {
                                id: 32,
                                levelName: "Get authorization URL",
                                sections: [
                                    {
                                        id: 33,
                                        levelName: "Redirect URI",
                                    },
                                    {
                                        id: 34,
                                        levelName: "Error codes",
                                    }
                                ]
                            },
                            {
                                id: 35,
                                levelName: "Authkit, OAuth, SSO",
                            },
                            {
                                id: 36,
                                levelName: "Password",
                            },
                            {
                                id: 37,
                                levelName: "Magic Auth (Auth)",
                            },
                            {
                                id: 38,
                                levelName: "Refresh token",
                            },
                            {
                                id: 39,
                                levelName: "Email verification code",
                            },
                            {
                                id: 40,
                                levelName: "TOTP code",
                            },
                            {
                                id: 41,
                                levelName: "Organization selection",
                            }
                        ]
                    },
                    {
                        id: 42,
                        levelName: "Session tokens",
                        sections: [
                            {
                                id: 43,
                                levelName: "JWKS",
                            },
                            {
                                id: 44,
                                levelName: "Access token",
                            },
                            {
                                id: 45,
                                levelName: "Refresh token",
                            }
                        ]
                    },
                    {
                        id: 46,
                        levelName: "Authentication errors",
                        sections: [
                            {
                                id: 47,
                                levelName: "Email verification",
                            },
                            {
                                id: 48,
                                levelName: "MFA enrollments",
                            },
                            {
                                id: 49,
                                levelName: "MFA challenge",
                            },
                            {
                                id: 50,
                                levelName: "SSO required",
                            },
                            {
                                id: 51,
                                levelName: "Organization auth. required",
                            }
                        ]
                    },
                    {
                        id: 52,
                        levelName: "Magic Auth",
                        sections: [
                            {
                                id: 53, 
                                levelName: "Get a Magic Auth code",
                            },
                            {
                                id: 54,
                                levelName: "Create a Magic Auth code",
                            },
                            {
                                id: 55,
                                levelName: "Send Magic Auth code",
                            }
                        ]
                    },
                    {
                        id: 56,
                        levelName: "Multi-Factor Auth (UM)",
                        sections: [
                            {
                                id: 57,
                                levelName: "Authentication factor (UM)",
                            }, 
                            {
                                id: 58,
                                levelName: "Authentication challenge (UM)",
                            },
                            {
                                id: 59,
                                levelName: "Enroll an auth factor (UM)",
                            },
                            {
                                id: 60,
                                levelName: "List auth factors (UM)",
                            }
                        ]
                    },
                    {
                        id: 61,
                        levelName: "Password reset",
                        sections: [
                            {
                                id: 62,
                                levelName: "Send email",
                            },
                            {
                                id: 63, 
                                levelName: "Reset password",
                            }
                        ]
                    },
                    {
                        id: 64,
                        levelName: "Organization membership",
                        sections: [
                            {
                                id: 65,
                                levelName: "Get membership",
                            },
                            {
                                id: 66,
                                levelName: "List memberships",
                            },
                            {
                                id: 67,
                                levelName: "Create membership",
                            },
                            {
                                id: 68,
                                levelName: "Update membership",
                            },
                            {
                                id: 69,
                                levelName: "Delete membership",
                            },
                        ]
                    },
                    {
                        id: 70,
                        levelName: "Invitation",
                        sections: [
                            {
                                id: 71,
                                levelName: "Get an invitation",
                            },
                            {
                                id: 72,
                                levelName: "List invitations",
                            },
                            {
                                id: 73,
                                levelName: "Send an invitation",
                            },
                            {
                                id: 74,
                                levelName: "Revoke an invitation",
                            },
                        ]
                    },
                    {
                        id: 75,
                        levelName: "Logout",
                    }
                ]
            },
            {
                id: 76,
                levelName: "Single Sign-On",
                sections: [
                    {
                        id: 77,
                        levelName: "Overview (SSO)",
                    },
                    {
                        id: 78,
                        levelName: "Get authorization URL (SSO)",
                        sections: [
                            {
                                id: 79,
                                levelName: "Redirect URI (SSO)",
                            },
                            {
                                id: 80,
                                levelName: "Error codes (SSO)",
                            }
                        ]
                    },
                    {
                        id: 81,
                        levelName: "Profile",
                        sections: [
                            {
                                id: 82, 
                                levelName: "Get a Profile and Token",
                            },
                            {
                                id: 83,
                                levelName: "Get a User Profile",
                            }
                        ]
                    },
                    {
                        id: 84,
                        levelName: "Connections",
                        sections: [
                            {
                                id: 85,
                                levelName: "Get a Connection",
                            },
                            {
                                id: 86,
                                levelName: "List Connections",
                            },
                            {
                                id: 87,
                                levelName: "Delete a Connection",
                            }
                        ]
                    },
                ]
            },
            {
                id: 88,
                levelName: "Directory Sync",
                sections: [
                    {
                        id: 89,
                        levelName: "Overview (DS)",
                    },
                    {
                        id: 90,
                        levelName: "Directory",
                        sections: [
                            {
                                id: 91,
                                levelName: "Get a Directory",
                            },
                            {
                                id: 92,
                                levelName: "List Directories",
                            },
                            {
                                id: 93,
                                levelName: "Delete directories",
                            }
                        ]
                    },
                    {
                        id: 94,
                        levelName: "Directory User",
                        sections: [
                            {
                                id: 95,
                                levelName: "Get a Directory User",
                            },
                            {
                                id: 96,
                                levelName: "List Directory Users",
                            }
                        ]
                    },
                    {
                        id: 97,
                        levelName: "Directory Group",
                        sections: [
                            {
                                id: 98,
                                levelName: "Get a Directory Group",
                            },
                            {
                                id: 99,
                                levelName: "List Directory Groups",
                            }
                        ]
                    }
                ]
            },
            {
                id: 100,
                levelName: "Admin Portal",
                sections: [
                    {
                        id: 101,
                        levelName: "Overview (AP)",
                    },
                    {
                        id: 102,
                        levelName: "Portal Link",
                    },
                    {
                        id: 103,
                        levelName: "Generate a Portal Link",
                    }
                ]
            },
            {
                id: 104,
                levelName: "Audit Logs",
                sections: [
                    {
                        id: 105,
                        levelName: "Overview (AL)",
                    }, 
                    {
                        id: 106,
                        levelName: "Create Event",
                    },
                    {
                        id: 107,
                        levelName: "Create Schema",
                    },
                    {
                        id: 108,
                        levelName: "List Schemas",
                    },
                    {
                        id: 109,
                        levelName: "List Actions",
                    },
                    {
                        id: 110,
                        levelName: "Audit Log Export",
                    },
                    {
                        id: 111,
                        levelName: "Create Export",
                    },
                    {
                        id: 112,
                        levelName: "Get Export",
                    },
                    {
                        id: 113,
                        levelName: "Get Retention",
                    },
                    {
                        id: 114,
                        levelName: "Set Retention",
                    }
                ]
            },
            {
                id: 115,
                levelName: "Domain Verification",
                sections: [
                    {
                        id: 116,
                        levelName: "Organization Domain",
                        sections: [
                            {
                                id: 117,
                                levelName: "Get",
                            },
                            {
                                id: 118,
                                levelName: "Create",
                            },
                            {
                                id: 119,
                                levelName: "Verify",
                            },
                        ]
                    }
                ]
            },
            {
                id: 120,
                levelName: "Multi-Factor Auth",
                sections: [
                    {
                        id: 121,
                        levelName: "Authentication Factor",
                    },
                    {
                        id: 122,
                        levelName: "Authentication Challenge",
                    },
                    {
                        id: 123,
                        levelName: "Enroll Factor",
                    },
                    {
                        id: 124,
                        levelName: "Challenge Factor",
                    },
                    {
                        id: 125,
                        levelName: "Verify Challenge",
                    },
                    {
                        id: 126,
                        levelName: "Get Authentication Factor",
                    },
                    {
                        id: 127,
                        levelName: "Delete Authentication Factor",
                    },
                ]
            },
            {
                id: 128,
                levelName: "Deprecated APIs",
                sections: [
                    {
                        id: 129,
                        levelName: "Magic Link",
                        sections: [
                            {
                                id: 130,
                                levelName: "Passwordless Session",
                            },
                            {
                                id: 131,
                                levelName: "Create Passwordless Sessions",
                            },
                            {
                                id: 132,
                                levelName: "Email a Magic Link"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 133,
        levelName: "Integrations",
        sections: [
            {
                id: 134,
                levelName: "SAML",
            },
            {
                id: 135,
                levelName: "SCIM"
            },
            {
                id: 136,
                levelName: "SFTP"
            },
            {
                id: 137,
                levelName: "OpenID Connect"
            },
            {
                id: 138,
                levelName: "Access People HR",
            },
            {
                id: 139,
                levelName: "ADP OpenID Connect"
            },
            {
                id: 1390,
                levelName: "Apple",
            },
            {
                id: 140,
                levelName: "Auth0"
            },
            {
                id: 141,
                levelName: "AWS Cognito"
            },
            {
                id: 142,
                levelName: "BambooHR"
            },
            {
                id: 143,
                levelName: "Breathe HR"
            },
            {
                id: 144,
                levelName: "Bubble Plugin"
            },
            {
                id: 145,
                levelName: "CAS SAML"
            },
            {
                id: 146,
                levelName: "Cezanne HR"
            },
            {
                id: 147,
                levelName: "ClassLink"
            },
            {
                id: 148,
                levelName: "Cloudflare"
            },
            {
                id: 149,
                levelName: "CyberArk SAML"
            },
            {
                id: 150,
                levelName: "CyberArk SCIM"
            },
            {
                id: 151,
                levelName: "Duo"
            },
            {
                id: 152,
                levelName: "Entra ID SAML (fka Azure AD)"
            },
            {
                id: 153,
                levelName: "Entra ID SCIM (fka Azure AD)"
            },
            {
                id: 154,
                levelName: "Firebase"
            },
            {
                id: 155,
                levelName: "Fourth"
            },
            {
                id: 156,
                levelName: "GitHub OAuth"
            },
            {
                id: 157,
                levelName: "Google Directory Sync"
            },
            {
                id: 158,
                levelName: "Google OAuth"
            },
            {
                id: 159,
                levelName: "Google SAML"
            },
            {
                id: 160,
                levelName: "HiBob"
            },
            {
                id: 161,
                levelName: "JumpCloud SAML"
            },
            {
                id: 162,
                levelName: "JumpCloud SCIM"
            },
            {
                id: 163,
                levelName: "Keycloak"
            },
            {
                id: 164,
                levelName: "LastPass"
            },
            {
                id: 165,
                levelName: "Login.gov OpenID Connect"
            },
            {
                id: 166,
                levelName: "Microsoft AD FS SAML"
            },
            {
                id: 167,
                levelName: "Microsoft OAuth"
            },
            {
                id: 168,
                levelName: "miniOrange"
            },
            {
                id: 169,
                levelName: "NetIQ"
            },
            {
                id: 170,
                levelName: "NextAuth.js"
            },
            {
                id: 171,
                levelName: "Okta SAML"
            },
            {
                id: 172,
                levelName: "Okta SCIM"
            },
            {
                id: 173,
                levelName: "OneLogin SAML"
            },
            {
                id: 174,
                levelName: "OneLogin SCIM"
            },
            {
                id: 175,
                levelName: "Oracle SAML"
            },
            {
                id: 176,
                levelName: "PingFederate SAML"
            },
            {
                id: 177,
                levelName: "PingFederate SCIM"
            },
            {
                id: 178,
                levelName: "PingOne SAML"
            },
            {
                id: 179,
                levelName: "React Native Expo"
            },
            {
                id: 180,
                levelName: "Rippling SAML"
            },
            {
                id: 181,
                levelName: "Rippling SCIM"
            },
            {
                id: 182,
                levelName: "Salesforce"
            },
            {
                id: 183,
                levelName: "Shibboleth Generic SAML"
            },
            {
                id: 184,
                levelName: "Shibboleth Unsolicited SAML"
            },
            {
                id: 185,
                levelName: "SimpleSAMLphp"
            },
            {
                id: 186,
                levelName: "Supabase"
            },
            {
                id: 187,
                levelName: "VMWare"
            },
            {
                id: 188,
                levelName: "Workday"
            },
        ]
    },
    {
        id: 189,
        levelName: "Migrate to WorkOS",
        sections: [
            {
                id: 190,
                levelName: "AuthO"
            },
            {
                id: 191,
                levelName: "AWS Cognito"
            },
            {
                id: 192,
                levelName: "Firebase"
            },
            {
                id: 193,
                levelName: "Other Services"
            },
            {
                id: 194,
                levelName: "Single Sign-On"
            }
        ]
    },
    {
        id: 195,
        levelName: "SDKs",
        sections: [
            {
                id: 196,
                levelName: "Node.js"
            },
            {
                id: 197,
                levelName: "Go",
            },
            {
                id: 198,
                levelName: "Ruby"
            },
            {
                id: 199,
                levelName: "Python"
            },
            {
                id: 200,
                levelName: "PHP"
            },
            {
                id: 201,
                levelName: "Laravel"
            },
            {
                id: 202,
                levelName: "Java"
            },
            {
                id: 203,
                levelName: ".NET"
            },
            {
                id: 204,
                levelName: "Elixir"
            },
            {
                id: 205,
                levelName: "Django"
            },
            {
                id: 206,
                levelName: "OmniAuth"
            },
            {
                id: 207,
                levelName: "Ueberauth"
            }
        ]
    },
    {
        id: 208,
        levelName: "Email delivery"
    },
    {
        id: 209,
        levelName: "Dashboard"
    },
    {
        id: 210,
        levelName: "Glossary"
    },
    {
        id: 211,
        levelName: "Changelog"
    }
]

export default docs_sidebar_options;