import { useState, useEffect } from 'react'
import Entry from '../components/Entry';
import Prompt from '../components/Prompt';
import Schedule from '../components/Schedule';
import TimelinePreview from '../components/TimelinePreview';

export default function AppDemo() {
    const [reviewItems, reviewItemsSet] = useState([]);
    const [pendingReviews, pendingReviewsSet] = useState([]);

    useEffect(() => {
        console.log('pend:', pendingReviews)
        console.log('rev:', reviewItems)
    }, [pendingReviews, reviewItems]);

    return (
        <div>
            <h1>Ebb..</h1>
            <Prompt count={reviewItems.length} />
            <Entry reviewItems={reviewItems} reviewItemsSet={reviewItemsSet} />
            <Schedule reviewItems={reviewItems} reviewItemsSet={reviewItemsSet} pendingReviewsSet={pendingReviewsSet} />
            <TimelinePreview reviewItems={reviewItems} />
            {/* CURRENT: display reviews */}
            {/* <PendingTab pendingReviews={pendingReviews} pendingReviewsSet={pendingReviewsSet} /> */}
        </div>
    )
}