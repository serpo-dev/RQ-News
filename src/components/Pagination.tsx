import { useContext } from "react";
import { NewsContext } from "../store/NewsContext";
import { PaginationButton } from "./PaginationButton";

export function Pagination() {
    const { data, page, pageSize } = useContext(NewsContext);

    const pagination: number[] | null = (() => {
        if (data?.articles) {
            const max =
                Math.floor(data.totalResults / pageSize) +
                (data.totalResults % pageSize === 0 ? 0 : 1);

            const right = max - page > 5 ? page + 5 : max + 1;
            const left = page - 1 > 5 ? page - 5 : 1;

            let i = left - 1;

            console.log(right, left);

            return Array(right - left)
                .fill(0)
                .map(() => {
                    i += 1;
                    return i;
                });
        }

        return null;
    })();

    return (
        <div className="container d-flex flex-column align-items-center">
            <h5 className="my-4">
                Total results: {data?.totalResults || "0"}. Pages:{" "}
                {data?.totalResults
                    ? ~~(data.totalResults / pageSize) + 1
                    : "0"}
                .
            </h5>
            <div className="container d-flex justify-content-center mb-4">
                {pagination?.map((num, key) => (
                    <PaginationButton
                        isActive={num === page}
                        num={num}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
}
