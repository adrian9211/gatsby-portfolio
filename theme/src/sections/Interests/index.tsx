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
    const skills = response.allInterestsJson.sections[0].interests;

    const groups = skills.reduce<Record<string, typeof skills>>((acc, s) => {
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
                                        {s.note && <span className={classes.SkillNote}>{s.note}</span>}
                                    </span>
                                    <span className={classes.SkillYears}>{s.years} yrs</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
