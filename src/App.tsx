import { NewsList } from "./components/NewsList";
import "bootstrap/dist/css/bootstrap.css";
import { NewsProvider } from "./store/NewsContext";
import { Search } from "./components/SearchInput";
import { Pagination } from "./components/Pagination";
import { Header } from "./components/Header";
import "./index.css";

export default function App() {
    const containerStyle =
        "container d-flex flex-column align-items-center w-75";

    return (
        <NewsProvider>
            <div className={containerStyle}>
                <Header />
                <Search />
                <Pagination />
                <NewsList />
            </div>
        </NewsProvider>
    );
}
