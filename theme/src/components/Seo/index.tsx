import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

interface SeoProps {
    title: string;
    useTitleTemplate?: boolean;
    noIndex?: boolean;
    description?: string;
}

export function Seo(props: SeoProps): React.ReactElement {
    const location = useLocation();
    const siteMetadata = { ...useSiteMetadata(), ...props };

    const thumbnailUrl = siteMetadata.thumbnail
        ? (siteMetadata.siteUrl + siteMetadata.thumbnail.childImageSharp.original.src).replace(/([^:]\/)\/+/g, '$1')
        : undefined;

    return (
        <Helmet
            title={siteMetadata.title}
            titleTemplate={props.useTitleTemplate ? siteMetadata.titleTemplate : undefined}
            htmlAttributes={{ lang: siteMetadata.language }}
        >
            {props.noIndex && <meta name="robots" content="noindex" />}
            <meta name="description" content={siteMetadata.description} />
            <meta property="og:title" content={siteMetadata.title} />
            <meta property="og:site_name" content={siteMetadata.title} />
            <meta property="og:url" content={siteMetadata.siteUrl + location.pathname} />
            {thumbnailUrl && <meta property="og:image" content={thumbnailUrl} />}
            <meta property="og:description" content={siteMetadata.description} />
            <meta property="og:type" content="website" />
            <meta property="twitter:card" content="summary" />
            <meta property="twitter:creator" content={siteMetadata.author} />
            <meta property="twitter:title" content={siteMetadata.title} />
            <meta property="twitter:description" content={siteMetadata.description} />
            <meta name="google-site-verification" content="oaS0Flklqp6676pI9tHJwwZLCU2NSJlSOygIfdcDKzo" />
            <meta name="msvalidate.01" content="E5233491FF0A4E30270C1E4578B1602E" />
            <meta name="robots" content="index" />
        </Helmet>
    );
}
