import React from 'react';
import { Section } from '../../components/Section';
import { PageSection } from '../../types';
import { useLocalDataSource, ProjectData } from './data';
import * as classes from './style.module.css';

function IconArrow(): React.ReactElement {
    return (
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="9 7 17 7 17 15" />
        </svg>
    );
}

function IconExternal(): React.ReactElement {
    return (
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 4h6v6" />
            <path d="M10 14L20 4" />
            <path d="M20 14v6H4V4h6" />
        </svg>
    );
}

function IconGitHub(): React.ReactElement {
    return (
        <svg width={13} height={13} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.97 10.97 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.68.42.36.78 1.07.78 2.16v3.21c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
    );
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps): React.ReactElement {
    const glyph = project.glyph ?? project.title.substring(0, 2).toUpperCase();
    const liveLink = project.links?.find((l) => l.type === 'external');
    const githubLink = project.links?.find((l) => l.type === 'github');

    return (
        <article className={classes.ProjectCard}>
            {/* Left column: glyph + meta */}
            <div className={classes.ProjectSide}>
                <div className={classes.ProjectGlyph} aria-hidden="true">
                    <span className={classes.GlyphText}>{glyph}</span>
                    <span className={classes.GlyphCorner}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <dl className={classes.ProjectMeta}>
                    {project.role && (
                        <div>
                            <dt>Role</dt>
                            <dd>{project.role}</dd>
                        </div>
                    )}
                    {project.year && (
                        <div>
                            <dt>Year</dt>
                            <dd>{project.year}</dd>
                        </div>
                    )}
                </dl>
            </div>

            {/* Right column: content */}
            <div className={classes.ProjectBody}>
                <span className={classes.ProjectKicker}>{project.category}</span>
                <h3 className={classes.ProjectName}>{project.title}</h3>
                <p className={classes.ProjectBlurb}>{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                    <ul className={classes.ProjectTags}>
                        {project.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                )}
                <div className={classes.ProjectLinks}>
                    {project.confidential && (
                        <span className={classes.Confidential}>— Confidential, internal tool</span>
                    )}
                    {liveLink && (
                        <a href={liveLink.url} target="_blank" rel="noopener noreferrer">
                            Live <IconExternal />
                        </a>
                    )}
                    {githubLink && (
                        <a href={githubLink.url} target="_blank" rel="noopener noreferrer">
                            Source <IconGitHub />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export function ProjectsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allProjectsJson.sections[0];
    const visibleProjects = data.projects.filter((p) => p.visible);

    return (
        <Section anchor={props.sectionId}>
            <header className={classes.SecHead}>
                <span className={classes.SecNum}>03</span>
                <h2 className={classes.SecTitle}>Selected work</h2>
                <span className={classes.SecRule} aria-hidden="true" />
            </header>
            <div className={classes.Projects}>
                {visibleProjects.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>
        </Section>
    );
}
