import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from '../styles/PendingTab.module.scss';

export default function PendingTab({ selectedReviewSet, pendingReviews }) {
    const [hide, hideSet] = useState(false);
    const [cards, cardsSet] = useState([]);

    useEffect(() => {
        console.log('pend:', pendingReviews)
        console.log('hide:', hide)
        console.log('cards:', cards)
    }, [pendingReviews, cards, hide]);

    useEffect(() => {
        cardsSet(
            <ul className={styles.row}>
                {pendingReviews
                    // .slice(0, 3)
                    .map((r, i) => {
                        return (
                            <li onClick={() => selectedReviewSet(r)} className={styles.column} key={i}>
                                <ReviewCard reviewItem={r} />
                            </li>
                        )
                    })}
            </ul >
        );
        // return () => console.log('cards:',cards);
    }, [pendingReviews, selectedReviewSet])

    return (
        <div className={styles.tab}>
            <div onClick={() => hideSet(prev => !prev)} className={styles.collapse}>{hide && '^'}</div>
            {!hide && pendingReviews.length > 0 && cards}
        </div>
    )

}