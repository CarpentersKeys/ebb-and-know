import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useState } from "react";

export default function TimeLinePreview({ reviewItems }) {
    const [schedule, scheduleSet] = useState([]);
    const [progress, progressSet] = useState(40);

    useEffect(() => {

        const revTimes = reviewItems
            .map(item => item.scheduledReviews)
            .flat()
            .map(t => Temporal.PlainTime.from(t))
            .sort(Temporal.PlainTime.compare)

        scheduleSet(revTimes);
    }, [reviewItems])

    useEffect(() => {



    }, [schedule])

    return (

        <div style={{
            width: '100%',
            heght: '24px',
            color: 'grey'
        }}>
            <div style={{
                width: progress + '%',
                color: 'green'
            }}></div>
        </div>
    )

}