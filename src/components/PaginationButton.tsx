import { useContext } from "react";
import { NewsContext } from "../store/NewsContext";

export function PaginationButton({
    isActive,
    num,
}: {
    isActive: boolean;
    num: number;
}) {
    const { setPage } = useContext(NewsContext);

    function handleChangePage() {
        if (!isActive) {
            setPage(num);
        }
    }

    return (
        <button
            style={{ height: "50px", width: "50px" }}
            onClick={handleChangePage}
            type="button"
            className={`${
                isActive ? "btn btn-secondary" : "btn btn-primary"
            } mx-1`}
        >
            {num}
        </button>
    );
}
