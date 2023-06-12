import { useState, createContext, Dispatch, SetStateAction } from "react";
import { SearchResult } from "../interfaces/news";

interface childrenProps {
    children: JSX.Element | JSX.Element[];
}

interface NewsStore {
    q: string;
    setQ: Dispatch<SetStateAction<string>>;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    pageSize: number;
    setPageSize: Dispatch<SetStateAction<number>>;
    data: SearchResult | null;
    setData: Dispatch<SetStateAction<SearchResult | null>>;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const NewsContext = createContext<NewsStore>({
    q: "",
    setQ: () => {},
    page: 1,
    setPage: () => {},
    pageSize: PAGE_SIZE,
    setPageSize: () => {},
    data: null,
    setData: () => {},
});

function NewsProvider({ children }: childrenProps) {
    const [q, setQ] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(PAGE_SIZE);
    const [data, setData] = useState<SearchResult | null>(null);

    const store: NewsStore = {
        q,
        setQ,
        page,
        setPage,
        pageSize,
        setPageSize,
        data,
        setData,
    };

    return (
        <NewsContext.Provider value={store}>{children}</NewsContext.Provider>
    );
}

export { NewsProvider, NewsContext };
