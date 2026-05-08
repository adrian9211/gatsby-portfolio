import { graphql, useStaticQuery } from 'gatsby';

interface ProjectLink {
    type: string;
    url: string;
}

export interface ProjectData {
    category: string;
    title: string;
    description: string;
    glyph?: string;
    confidential?: boolean;
    role?: string;
    year?: string;
    tags?: string[];
    links?: ProjectLink[];
    visible: boolean;
}

interface ProjectsSectionQueryResult {
    allProjectsJson: {
        sections: {
            button: {
                label: string;
                url: string;
                visible: boolean;
            };
            projects: ProjectData[];
        }[];
    };
}

export const useLocalDataSource = (): ProjectsSectionQueryResult => {
    return useStaticQuery(graphql`
        query ProjectsSectionQuery {
            allProjectsJson {
                sections: nodes {
                    button {
                        label
                        url
                        visible
                    }
                    projects {
                        category
                        title
                        description
                        glyph
                        confidential
                        role
                        year
                        tags
                        links {
                            type
                            url
                        }
                        visible
                    }
                }
            }
        }
    `);
};
