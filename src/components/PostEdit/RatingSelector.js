import React from "react"

export default function RatingSelector(props) {
    let { rating, setRating } = props;
    
    return (
        <div>
            <label htmlFor="rating">Rating: </label>
            <select
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            >
                <option value="unrated">Unrated</option>
                <option value="sensitive">Sensitive</option>
                <option value="safe">Safe</option>
                <option value="mature">Mature</option>
                <option value="explicit">Explicit</option>
            </select>
        </div>
    )
}