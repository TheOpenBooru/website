import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" as="font" href="https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXjeu.woff2" type="font/woff2" crossOrigin="anonymous"/>
                <link rel="preconnect" as="font" href="https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2" type="font/woff2" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
