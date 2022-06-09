import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";
import styles from './Schedule.module.scss';

export default function Schedule({ reviewItems, reviewItemsSet, pendingReviewsSet }) {
    const [timerRunning, timerRunningSet] = useState(false);


    useEffect(() => {
        if (reviewItems.length < 1) { return; };
        if (timerRunning) { return; };

        const next = reviewItems[0];
        const now = Temporal.Now.instant();
        const msToNext = now.until(next.reviewTime).total({ unit: 'millisecond' });

        timerRunningSet(true);
        setTimeout(() => {
            reviewItemsSet(prev => {
                pendingReviewsSet((prevPend) => prevPend.concat(prev.slice(0, 1)))
                return prev.slice(1)
            })

            timerRunningSet(false);
        }, msToNext)
    }, [reviewItems, reviewItemsSet, timerRunning, pendingReviewsSet])

    return (
        <div></div>
    )
}

    // a review item
    // {
    //     reviewTime: createdAt.add(d),
    //     timeFromCreated: d,
    //     // reviewDuration: null, //FUTURE: how long to spend reviewing
    //     content: {
    //         id: title + Math.floor(Math.random() * 10 ** 4),
    //         content: {
    //             title,
    //             body: contentBody,
    //         },
    //     }
    // } 