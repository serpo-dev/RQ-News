export interface Item {
    source: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SearchResult {
    status: string;
    totalResults: number;
    articles: NewsItem[];
}
