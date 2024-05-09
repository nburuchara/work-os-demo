const docs_sidebar_options = [
    {
        id: 0,
        levelName: 'Resources',
        sections: [
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
                                sections: []
                            },
                            {
                                id: 1, 
                                levelName: 'Client libraries',
                                sections: []
                            },
                            {
                                id: 2, 
                                levelName: 'Testing',
                                sections: []
                            },
                            {
                                id: 3, 
                                levelName: 'API Keys',
                                sections: []
                            },
                            {
                                id: 4, 
                                levelName: 'Errors',
                                sections: []
                            },
                            {
                                id: 5, 
                                levelName: 'Pagination',
                                sections: []
                            },
                            {
                                id: 6, 
                                levelName: 'Idempotency',
                                sections: []
                            },
                            {
                                id: 7, 
                                levelName: 'Rate limits',
                                sections: []
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
                                sections: []
                            },
                            {
                                id: 1,
                                levelName: "List events",
                                sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "List Organizations",
                                        sections: [],
                                    },
                                    {
                                        id: 2,
                                        levelName: "Create an Organization",
                                        sections: []
                                    },
                                    {
                                        id: 3,
                                        levelName: "Update an Organization",
                                        sections: []
                                    },
                                    {
                                        id: 4,
                                        levelName: "Delete an Organization",
                                        sections: []
                                    },
                                ]
                            },
                            {
                                id: 1,
                                levelName: "Organization Domain",
                                sections: []
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
                                sections: []
                            },
                            {
                                id: 1,
                                levelName: 'User',
                                sections: [
                                    {
                                        id: 0,
                                        levelName: "Get a User",
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "List Users",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Create a User",
                                        sections: []
                                    },
                                    {
                                        id: 3,
                                        levelName: "Update a User",
                                        sections: []
                                    },
                                    {
                                        id: 4,
                                        levelName: "Delete a User",
                                        sections: []
                                    },
                                ]
                            },
                            {
                                id: 2,
                                levelName: "Identity",
                                sections: [
                                    {
                                        levelName: "List identities",
                                        sections: []
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
                                                sections: []
                                            },
                                            {
                                                id: 1,
                                                levelName: "Error codes",
                                                sections: []
                                            }
                                        ]
                                    },
                                    {
                                        id: 1,
                                        levelName: "Authkit, OAuth, SSO",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Password",
                                        sections: []
                                    },
                                    {
                                        id: 3,
                                        levelName: "Magic Auth",
                                        sections: []
                                    },
                                    {
                                        id: 4,
                                        levelName: "Refresh token",
                                        sections: []
                                    },
                                    {
                                        id: 5,
                                        levelName: "Email verification code",
                                        sections: []
                                    },
                                    {
                                        id: 6,
                                        levelName: "TOTP code",
                                        sections: []
                                    },
                                    {
                                        id: 7,
                                        levelName: "Organization selection",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "Access token",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Refresh token",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "MFA enrollments",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "MFA challenge",
                                        sections: []
                                    },
                                    {
                                        id: 3,
                                        levelName: "SSO required",
                                        sections: []
                                    },
                                    {
                                        id: 4,
                                        levelName: "Organization authentication required",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "Create a Magic Auth code",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Send Magic Auth code",
                                        sections: []
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
                                        sections: []
                                    }, 
                                    {
                                        id: 1,
                                        levelName: "Authentication challenge",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Enroll an auth factor",
                                        sections: []
                                    },
                                    {
                                        id: 3,
                                        levelName: "List auth factors",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1, 
                                        levelName: "Reset password",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "List memberships",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Create membership",
                                        sections: []
                                    },
                                    {
                                        id: 3,
                                        levelName: "Update membership",
                                        sections: []
                                    },
                                    {
                                        id: 4,
                                        levelName: "Delete membership",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "List invitations",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Send an invitation",
                                        sections: []
                                    },
                                    {
                                        id: 3,
                                        levelName: "Revoke an invitation",
                                        sections: []
                                    },
                                ]
                            },
                            {
                                id: 11,
                                levelName: "Logout",
                                sections: []
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
                                sections: []
                            },
                            {
                                id: 1,
                                levelName: "Get authorization URL",
                                sections: [
                                    {
                                        id: 0,
                                        levelName: "Redirect URI",
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "Error codes",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "Get a User Profile",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "List Connections",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Delete a Connection",
                                        sections: []
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
                                sections: []
                            },
                            {
                                id: 1,
                                levelName: "Directory",
                                sections: [
                                    {
                                        id: 0,
                                        levelName: "Get a Directory",
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "List Directories",
                                        sections: []
                                    },
                                    {
                                        id: 2,
                                        levelName: "Delete directories",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 0,
                                        levelName: "List Directory Users",
                                        sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "List Directory Groups",
                                        sections: []
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
                                sections: []
                            },
                            {
                                id: 1,
                                levelName: "Portal Link",
                                sections: []
                            },
                            {
                                id: 2,
                                levelName: "Generate a Portal Link",
                                sections: []
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
                                sections: []
                            }, 
                            {
                                id: 1,
                                levelName: "Create Event",
                                sections: []
                            },
                            {
                                id: 2,
                                levelName: "Create Schema",
                                sections: [],
                            },
                            {
                                id: 3,
                                levelName: "List Schemas",
                                sections: []
                            },
                            {
                                id: 4,
                                levelName: "List Actions",
                                sections: []
                            },
                            {
                                id: 5,
                                levelName: "Audit Log Export",
                                sections: []
                            },
                            {
                                id: 6,
                                levelName: "Create Export",
                                sections: []
                            },
                            {
                                id: 7,
                                levelName: "Get Export",
                                sections: []
                            },
                            {
                                id: 8,
                                levelName: "Get Retention",
                                sections: []
                            },
                            {
                                id: 9,
                                levelName: "Set Retention",
                                sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "Create",
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "Verify",
                                        sections: []
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
                                sections: []
                            },
                            {
                                id: 1,
                                levelName: "Authentication Challenge",
                                sections: []
                            },
                            {
                                id: 2,
                                levelName: "Enroll Factor",
                                sections: []
                            },
                            {
                                id: 3,
                                levelName: "Challenge Factor",
                                sections: []
                            },
                            {
                                id: 4,
                                levelName: "Verify Challenge",
                                sections: []
                            },
                            {
                                id: 5,
                                levelName: "Get Authentication Factor",
                                sections: []
                            },
                            {
                                id: 6,
                                levelName: "Delete Authentication Factor",
                                sections: []
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
                                        sections: []
                                    },
                                    {
                                        id: 1,
                                        levelName: "Create Passwordless Sessions",
                                        sections: []
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
            }
        ]
    }
]

export default docs_sidebar_options;