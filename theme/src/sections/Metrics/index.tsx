import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import * as classes from './style.module.css';

interface Metric {
    value: string;
    label: string;
}

interface MetricsSectionProps {
    sectionId: string;
    heading?: string;
    metrics: Metric[];
}

export function MetricsSection(props: MetricsSectionProps): React.ReactElement {
    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.Metrics}>
                    {props.metrics.map((metric, index) => (
                        <Animation key={index} className={classes.Metric} type="scaleIn" delay={index * 150}>
                            <span className={classes.Value}>{metric.value}</span>
                            <span className={classes.Label}>{metric.label}</span>
                        </Animation>
                    ))}
                </div>
            </Section>
        </Animation>
    );
}
