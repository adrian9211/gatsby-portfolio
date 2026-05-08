import { graphql, useStaticQuery } from 'gatsby';

interface Skill {
    label: string;
    category: string;
    years: string;
    note?: string;
}

interface InterestsSectionQueryResult {
    allInterestsJson: {
        sections: {
            interests: Skill[];
        }[];
    };
}

export const useLocalDataSource = (): InterestsSectionQueryResult => {
    return useStaticQuery(graphql`
        query InterestsSectionQuery {
            allInterestsJson {
                sections: nodes {
                    interests {
                        label
                        category
                        years
                    }
                }
            }
        }
    `);
};
