import { Temporal } from '@js-temporal/polyfill';
import { useState } from 'react';
import styles from './Entry.module.scss';

export default function Entry({ reviewItems, reviewItemsSet }) {
    const [contentBody, contentBodySet] = useState('');
    const [contentTitle, contentTitleSet] = useState('');
    const [contentLink, contentLinkSet] = useState('');

    function handleAdd(evt) {
        evt.preventDefault();

        const defaultDuration = Temporal.Duration.from({ milliseconds: 100 }).total('millisecond')
        const title = `your ${reviewItems.length + 1} entry to review`
        const content = {
            title,
            body: contentBody,
        }
        const createdAt = Temporal.Now.instant();
        const durations = [
            // Temporal.Duration.from({ seconds: 0 }),
            Temporal.Duration.from({ seconds: 1, milliseconds: 1 }),
            Temporal.Duration.from({ seconds: 2, milliseconds: 2 }),
            Temporal.Duration.from({ seconds: 3, milliseconds: 3 }),
        ]

        const newReviews = durations
            .map((d, i) => ({
                id: title + Math.floor(Math.random() * 10 ** 4) + i,
                reviewTime: createdAt.add(d),
                timeFromCreated: d,
                content,
                duration: defaultDuration, //FUTURE: how long to spend reviewing
            }))

        reviewItemsSet(
            reviewItems
                .slice()
                .concat(newReviews)
                // TODO SORT CAN BE IMPROVED
                .sort((a, b) => {
                    const A = a.reviewTime.since(Temporal.Now.instant());
                    const B = b.reviewTime.since(Temporal.Now.instant());
                    return Temporal.Duration.compare(A, B);
                })
        );
    }

    return (
        <form className={styles.form} onSubmit={(evt) => handleAdd(evt)}>
            <label className='label' htmlFor="title">Title</label>
            <input
                id='title'
                type="text"
                value={contentTitle}
                onChange={(evt) => { contentTitleSet(evt.target.value) }}
                placeholder="something you need to remember?" />
            <label className='label' htmlFor="link">Link</label>
            <input
                type="url"
                value={contentLink}
                onChange={(evt) => { contentLinkSet(evt.target.value) }}
                placeholder="https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types" />
            <label className='label' htmlFor="Notes">Notes</label>
            <textarea
                value={contentBody}
                onChange={(evt) => { contentBodySet(evt.target.value) }}
                placeholder="" />
            <button className='sub-btn' type='submit'>add</button>
        </form>
    )
}