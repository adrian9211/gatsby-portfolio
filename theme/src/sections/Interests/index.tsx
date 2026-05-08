import React from 'react';
import { Section } from '../../components/Section';
import { PageSection } from '../../types';
import { useLocalDataSource } from './data';
import * as classes from './style.module.css';

export function InterestsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const skills = response.allInterestsJson.sections[0].interests;

    // Group skills by category
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
                        <span className={classes.SkillGroup}>{group}</span>
                        <ul>
                            {items.map((s) => (
                                <li key={s.label} className={classes.SkillItem}>
                                    <span className={classes.SkillName}>{s.label}</span>
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
