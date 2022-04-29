import { Temporal } from '@js-temporal/polyfill';
import { useState } from 'react';

export default function Entry({ reviewItems, reviewItemsSet }) {
    const [contentBody, contentBodySet] = useState('');

    function handleAdd(evt) {
        evt.preventDefault();

        const title = `your ${reviewItems.length + 1} entry to review`
        const content = {
            id: title + Math.floor(Math.random() * 10 ** 4),
            content: {
                title,
                body: contentBody,
            },
        }
        const createdAt = Temporal.Now.instant();
        const durations = [
            Temporal.Duration.from({ seconds: 0 }),
            Temporal.Duration.from({ seconds: 1, milliseconds: 1 }),
            Temporal.Duration.from({ seconds: 2, milliseconds: 2 }),
            Temporal.Duration.from({ seconds: 3, milliseconds: 3 }),
        ]

        const newReviews = durations
            .map(d => ({
                reviewTime: createdAt.add(d),
                timeFromCreated: d,
                content,
                // reviewDuration: null, //FUTURE: how long to spend reviewing
            }))

        reviewItemsSet(
            reviewItems
                .slice()
                .concat(newReviews)
                .sort((a, b) => {
                    const A = a.reviewTime.since(Temporal.Now.instant());
                    const B = b.reviewTime.since(Temporal.Now.instant());
                    Temporal.Duration.compare(A, B);
                })
        );
    }

    return (
        <form onSubmit={(evt) => handleAdd(evt)}>
            <input type="text" value={contentBody} onChange={(evt) => { contentBodySet(evt.target.value) }} placeholder="something you need to remember?"></input>
        </form>
    )
}