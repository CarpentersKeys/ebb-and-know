import { useState } from 'react'
import Entry from '../components/Entry';
import Prompt from '../components/Prompt';
import Schedule from '../components/Schedule';
import TimelinePreview from '../components/TimelinePreview';
import PendingTab from '../components/PendingTab';
import styles from './demo.module.scss'
import DisplayContent from '../components/DisplayContent';

export default function AppDemo() {
    const [reviewItems, reviewItemsSet] = useState([]);
    const [pendingReviews, pendingReviewsSet] = useState([]);
    const [selectedReview, selectedReviewSet] = useState(null);

    // useEffect(() => {
    //     console.log('pend:', pendingReviews)
    //     console.log('rev:', reviewItems)
    // }, [pendingReviews, reviewItems]);

    return (
        <div className={styles.body}>
            <h1>Ebb..</h1>
            <Schedule reviewItems={reviewItems} reviewItemsSet={reviewItemsSet} pendingReviewsSet={pendingReviewsSet} />
            <TimelinePreview reviewItems={reviewItems} />
            <Prompt count={reviewItems.length} />
            {!selectedReview && <Entry reviewItems={reviewItems} reviewItemsSet={reviewItemsSet} />}
            {selectedReview && <DisplayContent selectedReview={selectedReview} selectedReviewSet={selectedReviewSet} />}
            <PendingTab selectedReviewSet={selectedReviewSet} pendingReviews={pendingReviews} pendingReviewsSet={pendingReviewsSet} />
        </div>
    )
}