import { useState, FormEvent, useContext } from "react";
import { NewsContext } from "../store/NewsContext";

export function Search() {
    const [input, setInput] = useState<string>("");

    const { setQ } = useContext(NewsContext);

    function handleChangeQ(e: FormEvent<HTMLInputElement>) {
        setInput(e.currentTarget.value);
    }

    async function handleSearch(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setQ(input);
    }

    return (
        <form
            onSubmit={handleSearch}
            className="container d-flex flex-row w-75"
        >
            <input
                style={{ fontSize: "30px" }}
                type="text"
                className="form-control text-center"
                onChange={handleChangeQ}
                value={input}
            />
            <button
                style={{ fontSize: "24px" }}
                type="submit"
                className="btn btn-primary mx-3"
            >
                Search
            </button>
        </form>
    );
}
