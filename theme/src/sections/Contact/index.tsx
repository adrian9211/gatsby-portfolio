import React from 'react';
import { Section } from '../../components/Section';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function ContactSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allContactJson.sections[0];

    return (
        <Section anchor={props.sectionId}>
            <header className={classes.SecHead}>
                <span className={classes.SecNum}>04</span>
                <h2 className={classes.SecTitle}>Get in touch</h2>
                <span className={classes.SecRule} aria-hidden="true" />
            </header>
            <div className={classes.ContactBlock}>
                <p className={classes.ContactLede}>
                    Open to <em>full-stack</em> and <em>AI-product</em> work.{' '}
                    Best reached by email — I respond within a day.
                </p>
                <a className={classes.ContactMail} href={`mailto:${data.email}`}>
                    <span>{data.email}</span>
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="9 7 17 7 17 15" />
                    </svg>
                </a>
                <ul className={classes.ContactLinks}>
                    <li>
                        <a href="https://www.linkedin.com/in/adrian-nykiel-1015201a7/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                            <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M14 4h6v6" /><path d="M10 14L20 4" /><path d="M20 14v6H4V4h6" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/adrian9211" target="_blank" rel="noopener noreferrer">
                            GitHub
                            <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M14 4h6v6" /><path d="M10 14L20 4" /><path d="M20 14v6H4V4h6" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/14360434/adrian" target="_blank" rel="noopener noreferrer">
                            StackOverflow
                            <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M14 4h6v6" /><path d="M10 14L20 4" /><path d="M20 14v6H4V4h6" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </Section>
    );
}
