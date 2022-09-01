import Script from 'next/script'
import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from 'styled-components'

export default function Document() {
    let key = "";
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="preconnect"
                    as="font"
                    href="https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXjeu.woff2"
                    type="font/woff2"
                />
                <link
                    rel="preconnect"
                    as="font"
                    href="https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2"
                    type="font/woff2"
                />
                {key 
                    ? <Script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                        id="Adsense-id"
                        data-ad-client="ca-pub-987************676"
                        strategy="beforeInteractive"
                    />
                    : null
                }
                
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

