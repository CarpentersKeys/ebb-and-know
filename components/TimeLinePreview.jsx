import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";
import styles from '../styles/TimelinePreview.module.scss';
import useInterval from '../hooks/useInterval'

export default function TimelinePreview({ reviewItems }) {
    const [lastRevMs, lastRevMsSet] = useState(null);
    const [reviewsJsx, reviewsJsxSet] = useState([]);


    useInterval(() => {
        if (reviewItems.length < 1) { return; };
        const lastRev = reviewItems[reviewItems.length - 1]?.reviewTime;
        const msFromNow = Temporal.Now.instant().until(lastRev).total('millisecond');
        lastRevMsSet(msFromNow);
    }, 33)

    useEffect(() => {
        if (!lastRevMs) { return; };
        const revs = (
            reviewItems
                .map((r, i) => {
                    const revFromNowMs = Temporal.Now.instant().until(r.reviewTime).total('millisecond')

                    const wid = Math.min((r.duration / lastRevMs) * 100, 100);
                    const pos = Math.max((revFromNowMs / lastRevMs) * 100 - wid, 0);
                    const bord = (100 - wid);
                    return (
                        <div className={styles.review} key={i}>
                            <style jsx>{`
                                div {
                                    border-radius: ${bord}%;
                                    left: ${pos}%;
                                    width: ${wid}%;
                                }
                            `}</style>
                        </div>
                    )
                }))

        reviewsJsxSet(revs);
    }, [lastRevMs, reviewItems])

    return (
        <div>
            <div className={styles.outerBar}>
                {reviewsJsx}
            </div>
        </div>
    )

}