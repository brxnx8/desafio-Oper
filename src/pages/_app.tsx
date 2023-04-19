import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Header } from "../styles/header";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header>
                <a href="/">
                    Oper<span>Blog</span>
                </a>
            </Header>
            <Component {...pageProps} />
        </>
    );
}
