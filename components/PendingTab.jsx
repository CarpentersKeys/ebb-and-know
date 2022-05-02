import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from '../styles/PendingTab.module.scss';

export default function PendingTab({ pendingReviews, pendingReviewsSet }) {
    const [minified, minifiedSet] = useState(true);

    useEffect(() => {
        console.log('pend:', pendingReviews)
    }, [pendingReviews])

    return (
        <div className={styles.tab}>
            <div onClick={() => minifiedSet(prev => !prev)} className={styles.collapse}>{minified && '^'}</div>

            {!minified && pendingReviews.map((r, i) => {
                return <ReviewCard reviewItem={r} key={i} />
            })}
        </div>
    )

}