import React from 'react';
import { Section } from '../../components/Section';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function HeroSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allHeroJson.sections[0];

    const location = data.location ?? 'Edinburgh, Scotland';
    const cityName = location.split(',')[0];

    return (
        <Section anchor={props.sectionId} additionalClasses={[classes.HeroSection]}>
            {/* Status bar */}
            <div className={classes.HeroMeta}>
                <span className={classes.Status}>
                    <span className={classes.StatusDot} aria-hidden="true" />
                    Available · Q3 2026
                </span>
                <span className={classes.MetaLoc}>{location}</span>
            </div>

            {/* Main heading */}
            <h1 className={classes.H1}>
                <span className={classes.H1Line}>full-stack developer</span>
                <span className={`${classes.H1Line} ${classes.H1Muted}`}>based in {cityName},</span>
                <span className={classes.H1Line}>building tools that ship.</span>
            </h1>

            {/* Bio */}
            <p className={classes.Bio}>{data.description}</p>

            {/* Credibility row */}
            {data.credibility && data.credibility.length > 0 && (
                <ul className={classes.CredRow} aria-label="Credibility">
                    {data.credibility.map((c) => (
                        <li key={c.k} className={classes.CredItem}>
                            <span className={classes.CredK}>{c.k}</span>
                            <span className={classes.CredV}>{c.v}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* CTAs */}
            <div className={classes.CtaRow}>
                <a className={classes.BtnPrimary} href="#work">
                    See selected work
                    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="9 7 17 7 17 15" />
                    </svg>
                </a>
                <a className={classes.BtnGhost} href="#contact">
                    Get in touch
                </a>
            </div>
        </Section>
    );
}
