import { graphql, useStaticQuery } from 'gatsby';

interface Credential {
    k: string;
    v: string;
}

interface HeroSectionQueryResult {
    allHeroJson: {
        sections: {
            description: string;
            location: string;
            credibility: Credential[];
            subtitle: {
                prefix: string;
                suffix: string;
            };
            title: string;
        }[];
    };
}

export const useLocalDataSource = (): HeroSectionQueryResult => {
    return useStaticQuery(graphql`
        query HeroSectionQuery {
            allHeroJson {
                sections: nodes {
                    description
                    location
                    credibility {
                        k
                        v
                    }
                    subtitle {
                        prefix
                        suffix
                    }
                    title
                }
            }
        }
    `);
};
