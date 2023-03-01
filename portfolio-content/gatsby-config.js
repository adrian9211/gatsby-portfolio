module.exports = {
    plugins: [
        {
            resolve: 'theme',
            options: {
                siteUrl: "https://edinburghwebdeveloper.netlify.app/", // Used for sitemap generation
                manifestSettings: {
                    favicon: './content/images/favicon.png', // Path is relative to the root
                    siteName: 'My Portfolio', // Used in manifest.json
                    shortName: 'Portfolio', // Used in manifest.json
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
                // plausibleAnalytics: {
                //     domain: 'https://edinburghwebdeveloper.netlify.app/',
                // },
                googleAnalytics: {
                    trackingId: "UA-171132178-1",
                    head: true, // Default false
                    anonymize: false, // Default true
                    environments: ["production", "development"] // Default ["production"]
                }
            },
        },
    ],
};
