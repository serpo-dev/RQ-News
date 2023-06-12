export function Header() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <h1 className="font-weight-bold text-uppercase mt-5">
                <a
                    href="/"
                    className="text-decoration-none"
                >
                    react-query-newslist
                </a>
            </h1>
            <h6 className="mt-3">
                Created by{" "}
                <a
                    href="https://github.com/yphwd"
                    target="_blank"
                    rel="noreferrer"
                >
                    lav2u
                </a>
                <i> (aka yphwd)</i>.
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
