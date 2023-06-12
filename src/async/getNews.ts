interface GetNewsAttributes {
    q: string;
    page: number;
    pageSize: number;
}

export async function getNews({ q, page, pageSize }: GetNewsAttributes) {
    if (q.length > 0) {
        const url = "https://newsapi.org/v2/everything?";
        const params = new URLSearchParams({
            apiKey: String(process.env.REACT_APP_API_TOKEN),
            q,
            page: String(page),
            pageSize: String(pageSize),
        }).toString();

        return await fetch(url + params)
            .then((res) => res.json())
            .catch(() => null);
    }

    return null;
}
