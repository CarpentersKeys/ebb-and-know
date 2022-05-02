import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from '../styles/PendingTab.module.scss';

export default function PendingTab({ pendingReviews, pendingReviewsSet }) {
    const [minified, minifiedSet] = useState(false);
    const [cards, cardsSet] = useState([]);

    useEffect(() => {
        console.log('pend:', pendingReviews)
    }, [pendingReviews]);

    useEffect(() => {
        cardsSet(
            <ul className={styles.tabList}>
                {pendingReviews
                    .slice(0, 2)
                    .map((r, i) => {
                        return (
                            <li className={styles.tabItem} key={i}>
                                <ReviewCard reviewItem={r} />
                            </li>
                        )
                    })}
            </ul >
        );
        return () => console.log('cards:',cards);
    }, [pendingReviews])

    return (
        <div className={styles.tab}>
            <div onClick={() => minifiedSet(prev => !prev)} className={styles.collapse}>{minified && '^'}</div>
            {!minified && cards}
        </div>
    )

}