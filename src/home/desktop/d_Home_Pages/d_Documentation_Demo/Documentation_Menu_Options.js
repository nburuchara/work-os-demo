const docs_menu_options = [
    {
        id: 0,
        levelName: 'Resources',
        sections: {
            id: 0,
            levelName: "apiReference",
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
                    title: "Events",
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
                    title: "Organizations",
                    sections: [
                        {
                            id: 0,
                            levelName: "Organization",
                            sections: [
                                {
                                    levelName: "Get an Organizations",
                                    sections: []
                                },
                                {
                                    levelName: "List Organizations",
                                    sections: [],
                                },
                                {
                                    levelName: "Create an Organization",
                                    sections: []
                                },
                                {
                                    levelName: "Update an Organization",
                                    sections: []
                                },
                                {
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
                    title: "User Management",
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
                                    levelName: "Get a User",
                                    sections: []
                                },
                                {
                                    levelName: "List Users",
                                    sections: []
                                },
                                {
                                    levelName: "Create a User",
                                    sections: []
                                },
                                {
                                    levelName: "Update a User",
                                    sections: []
                                },
                                {
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
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
]

export default docs_menu_options;