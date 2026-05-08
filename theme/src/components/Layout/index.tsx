import '../../globalStyles/global.css';
import '../../globalStyles/theme.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Theme, useGlobalState } from '../../context';
import { SplashScreen } from '../SplashScreen';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { CookieBar } from '../CookieBar';
import * as classes from './style.module.css';

interface LayoutProps {
    children: React.ReactElement;
    useSplashScreenAnimation: boolean;
    useCookieBar: boolean;
}

const GOOGLE_FONTS =
    'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';

export function Layout(props: LayoutProps): React.ReactElement {
    const { globalState } = useGlobalState();
    const showSplashScreen = props.useSplashScreenAnimation && !globalState.splashScreenDone;

    const fontHelmet = (
        <Helmet bodyAttributes={{ 'data-theme': Theme.Dark }}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="stylesheet" href={GOOGLE_FONTS} />
        </Helmet>
    );

    if (showSplashScreen) {
        return (
            <>
                {fontHelmet}
                <SplashScreen />
            </>
        );
    }

    return (
        <>
            {fontHelmet}
            <div className={classes.Layout}>
                <Header />
                <main>{props.children}</main>
                <Footer />
                {props.useCookieBar && <CookieBar />}
            </div>
        </>
    );
}
