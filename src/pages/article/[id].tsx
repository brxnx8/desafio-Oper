import { useRouter } from "next/router";

export default function Post() {
    const { query } = useRouter();

    return <h1>post {JSON.stringify(query)}</h1>;
}
