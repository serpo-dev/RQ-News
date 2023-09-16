export function Header() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="font-weight-bold text-uppercase mt-5">
                <a
                    href={
                        window.location.href.includes("github.io")
                            ? "/rq-news"
                            : "/"
                    }
                    className="text-decoration-none"
                >
                    rq-news
                </a>
            </h1>
            <h6 className="mt-3">
                Created by{" "}
                <a
                    href="https://github.com/serpo-dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    serpo-dev
                </a>
            </h6>
            <h6 className="mb-5">
                Search powered by{" "}
                <a
                    href="https://newsapi.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    News API
                </a>
            </h6>
        </div>
    );
}
