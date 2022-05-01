import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";

export default function Schedule({ reviewItems, reviewItemsSet }) {
    const [pendingReviews, pendingReviewsSet] = useState([]);
    const [timerRunning, timerRunningSet] = useState(false);


    useEffect(() => {
        if (reviewItems.length < 1) { return; };
        if (timerRunning) { return; };
        timerRunningSet(true);

        const next = reviewItems[0];
        const now = Temporal.Now.instant();
        const msToNext = now.until(next.reviewTime).total({ unit: 'millisecond' });

        setTimeout(() => {
            console.log('time to review!')
            reviewItemsSet((prev) => prev.slice(1))
            pendingReviewsSet((prev) => prev.slice(0, 1))

            timerRunningSet(false);
        }, msToNext)
    }, [reviewItems, reviewItemsSet, timerRunning])

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