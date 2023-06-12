import { Item } from "../interfaces/news";
import defaultImage from "../assets/defaultImage.jpg";

export function NewsItem({
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
}: Item) {
    const date: string = new Date(publishedAt).toLocaleString();

    return (
        <a
            className="card my-2 btn btn primary w-100"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <img
                className="card-img-top"
                style={{ height: "300px", width: "100%", objectFit: "cover" }}
                src={urlToImage || defaultImage}
                alt={title}
                onError={(e) => {
                    e.currentTarget.src = defaultImage;
                }}
            />
            <div className="card-body">
                <h5 className="card-title mb-3">{title}</h5>
                <time>
                    <i>{date}</i>
                </time>
                <p className="card-text mt-3">
                    {description.length > 150
                        ? description.slice(0, 150)
                        : description}
                    ...
                </p>
            </div>
        </a>
    );
}
