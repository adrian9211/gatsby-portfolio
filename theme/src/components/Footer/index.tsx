import React from 'react';
import { Link } from 'gatsby';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import * as classes from './style.module.css';

export function Footer(): React.ReactElement {
    const siteConfiguration = useSiteConfiguration();

    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterRow}>
                <span>© {new Date().getFullYear()} Adrian Nykiel</span>
                <span className={classes.FooterMid}>Built with Gatsby · Edinburgh, Scotland</span>
                <div className={classes.FooterLinks}>
                    {siteConfiguration.navigation.footer.map((link, key) => (
                        <Link key={key} to={link.url}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
