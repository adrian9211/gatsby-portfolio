import React from 'react';
import { Section } from '../../components/Section';
import { PageSection } from '../../types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

function abbrev(label: string): string {
    const parts = label.split(/[\s/]+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return label.slice(0, 2).toUpperCase();
}

export function InterestsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const { coreLanguages, interests } = response.allInterestsJson.sections[0];

    const groups = interests.reduce<Record<string, typeof interests>>((acc, s) => {
        const cat = s.category ?? 'Other';
        (acc[cat] = acc[cat] || []).push(s);
        return acc;
    }, {});

    return (
        <Section anchor={props.sectionId}>
            <header className={classes.SecHead}>
                <span className={classes.SecNum}>02</span>
                <h2 className={classes.SecTitle}>Toolkit</h2>
                <span className={classes.SecRule} aria-hidden="true" />
            </header>

            {/* Section A — Core languages */}
            <div className={classes.CoreStrip} aria-label="Core languages">
                <span className={classes.CoreLabel}>
                    <span className={classes.CoreLabelNum}>A</span>
                    <span className={classes.CoreLabelText}>Core</span>
                </span>
                <ul className={classes.CoreList}>
                    {coreLanguages.map((c) => (
                        <li key={c.name} className={classes.CoreItem}>
                            <span className={classes.CoreIcon} aria-hidden="true">
                                {abbrev(c.name)}
                            </span>
                            <span className={classes.CoreText}>
                                <span className={classes.CoreName}>{c.name}</span>
                                <span className={classes.CoreNote}>{c.note}</span>
                            </span>
                            <span className={classes.CoreYears}>{c.years} yrs</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Section B — Frameworks & Infrastructure */}
            <div className={classes.SkillsSub}>
                <span className={classes.CoreLabelNum}>B</span>
                <span className={classes.CoreLabelText}>Frameworks &amp; Infrastructure</span>
                <span className={classes.SecRule} aria-hidden="true" />
            </div>

            <div className={classes.SkillsGrid}>
                {Object.entries(groups).map(([group, items]) => (
                    <div className={classes.SkillCol} key={group}>
                        <div className={classes.SkillColHead}>
                            <span className={classes.SkillGroup}>{group}</span>
                            <span className={classes.SkillCount}>{String(items.length).padStart(2, '0')}</span>
                        </div>
                        <ul>
                            {items.map((s) => (
                                <li key={s.label} className={classes.SkillItem}>
                                    <span className={classes.SkillIcon} aria-hidden="true">
                                        {abbrev(s.label)}
                                    </span>
                                    <span className={classes.SkillText}>
                                        <span className={classes.SkillName}>{s.label}</span>
                                        <span className={classes.SkillNote}>{s.note}</span>
                                    </span>
                                    <span className={classes.SkillYears}>{s.years}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
