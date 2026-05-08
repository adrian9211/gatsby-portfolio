import React from 'react';
import { Section } from '../../components/Section';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function AboutSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allAboutMarkdown.sections[0];

    return (
        <Section anchor={props.sectionId}>
            <header className={classes.SecHead}>
                <span className={classes.SecNum}>01</span>
                <h2 className={classes.SecTitle}>About</h2>
                <span className={classes.SecRule} aria-hidden="true" />
            </header>
            <div className={classes.AboutGrid}>
                <div className={classes.AboutLede}>
                    <p>Full-Stack Developer working in production at scale, with an academic record at the top of his cohort and a habit of building products from the bones up.</p>
                </div>
                <div
                    className={classes.AboutBody}
                    dangerouslySetInnerHTML={{ __html: data.html }}
                />
            </div>
        </Section>
    );
}
