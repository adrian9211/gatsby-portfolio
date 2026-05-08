import React from 'react';
import { Link } from 'gatsby';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import * as classes from './style.module.css';

export function Header(): React.ReactElement {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const siteConfiguration = useSiteConfiguration();

    const navLinks = siteConfiguration.navigation.header;
    const cta = siteConfiguration.navigation.ctaButton;

    return (
        <header className={classes.Header}>
            <nav className={classes.Nav}>
                <Link to="/" className={classes.NavMark} aria-label="home">
                    <span className={classes.MarkDot} aria-hidden="true" />
                    <span>Adrian Nykiel</span>
                </Link>

                {/* Desktop nav */}
                <div className={classes.NavLinks}>
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.url} className={classes.NavLink}>
                            {link.label}
                        </Link>
                    ))}
                    {cta?.url && cta?.label && (
                        <a
                            href={cta.url}
                            target={cta.openNewTab ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={classes.NavCta}
                        >
                            {cta.label}
                            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="9 7 17 7 17 15" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* Mobile burger */}
                <button
                    className={classes.Burger}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span className={`${classes.BurgerLine} ${mobileOpen ? classes.BurgerLine1Open : ''}`} />
                    <span className={`${classes.BurgerLine} ${mobileOpen ? classes.BurgerLine2Open : ''}`} />
                    <span className={`${classes.BurgerLine} ${mobileOpen ? classes.BurgerLine3Open : ''}`} />
                </button>
            </nav>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className={classes.MobileMenu} onClick={() => setMobileOpen(false)}>
                    {navLinks.map((link, i) => (
                        <Link key={i} to={link.url} className={classes.MobileLink}>
                            {link.label}
                        </Link>
                    ))}
                    {cta?.url && cta?.label && (
                        <a
                            href={cta.url}
                            target={cta.openNewTab ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={classes.MobileCtaLink}
                        >
                            {cta.label}
                        </a>
                    )}
                </div>
            )}
        </header>
    );
}
