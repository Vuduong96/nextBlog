import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(){
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link 
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,300&family=Poppins:wght@700&
                family=Rouge+Script&display=swap" rel="stylesheet" />
                
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}