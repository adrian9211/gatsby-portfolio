module.exports = {
    plugins: [
        {
            resolve: 'theme',
            options: {
                siteUrl: "https://adrianswebdev.com", // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/favicon.png', // Path is relative to the root
                    siteName: 'Adrian Nykiel — Full-Stack Developer, Edinburgh', // Used in manifest.json
                    shortName: 'Adrian Nykiel', // Used in manifest.json
                    startUrl: '/', // Used in manifest.json
                    backgroundColor: '#FFFFFF', // Used in manifest.json
                    themeColor: '#000000', // Used in manifest.json
                    display: 'minimal-ui', // Used in manifest.json
                },
                contentDirectory: './content',
                blogSettings: {
                    path: '/blog', // Defines the slug for the blog listing page
                    usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
                },
                plausibleAnalytics: {
                    domain: 'adrianswebdev.com',
                },
                googleAnalytics: {
                    trackingId: "G-6VL8R267QM",
                    head: true, // Default false
                    anonymize: false, // Default true
                    environments: ["production", "development"] // Default ["production"]
                }
            }},
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://adrianswebdev.com',
                sitemap: 'https://adrianswebdev.com/sitemap-index.xml',
                policy: [{userAgent: '*', allow: '/'}]
            },

        },

    ],
};
