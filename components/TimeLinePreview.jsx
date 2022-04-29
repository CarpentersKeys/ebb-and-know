import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";

export default function TimeLinePreview({ reviewItems, reviewItemsSet }) {
    const [pendingReviews, pendingReviewsSet] = useState([]);

    useEffect(() => {
        if (reviewItems.length < 1) { return; };
        const next = reviewItems[0];
        const int = next.timeFromCreated;

        const poll = setInterval(() => {
            // CURRENT: MAKE THIS COMPARE SO WE ENTER IF WHEN NEXT HAS PASSED
            if (Temporal.Now.instant().until(next.reviewTime).total({unit: 'millisecond'}) < 0) {
                clearInterval(poll);

                console.log('time to review!')
                reviewItemsSet((prev) => prev.slice(1))
                reviewItemsSet((prev) => prev.slice(0, 1))
            }
        }, int)


    }, [reviewItems, reviewItemsSet])

    return (

        <div style={{
            width: '100%',
            heght: '24px',
            background: 'grey'
        }}>
        </div>
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