import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { NewsItem } from "./NewsItem";
import { Item, SearchResult } from "../interfaces/news";
import { NewsContext } from "../store/NewsContext";
import { getNews } from "../async/getNews";

export function NewsList() {
    const { q, setData, page, pageSize } = useContext(NewsContext);

    async function queryFn() {
        let data;
        if (q.length > 0) {
            data = await getNews({ q, page, pageSize });
        } else {
            data = null;
        }

        setData(data);
        return data;
    }

    const queryResult: UseQueryResult<SearchResult, Error> = useQuery(
        ["news", q, page],
        queryFn,
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            initialData: { data: null },
        }
    );

    if (!q) {
        return null;
    }

    if (queryResult.isLoading) {
        return (
            <div className="container">
                <div
                    className="spinner-border"
                    role="status"
                />
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    if (queryResult.error) {
        return <div className="alert alert-danger">Failed to fetch data.</div>;
    }

    if (
        !queryResult.data ||
        !queryResult.data?.articles ||
        queryResult.data?.articles.length === 0
    ) {
        return <div className="alert alert-dark">No data in the response.</div>;
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center w-75">
            {queryResult.data.articles.map((item: Item, key: number) => (
                <NewsItem
                    {...item}
                    key={key}
                />
            ))}
        </div>
    );
}
