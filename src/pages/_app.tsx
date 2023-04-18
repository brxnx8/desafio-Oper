import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Header } from "../styles/header";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header>
                <p>
                    Oper<span>Blog</span>
                </p>
            </Header>
            <Component {...pageProps} />
        </>
    );
}
