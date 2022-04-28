import { Temporal } from '@js-temporal/polyfill';

export default function Entry({ reviewItems, reviewItemsSet }) {

    function handleAdd(evt) {
        evt.preventDefault();

        const createdAt = Temporal.Now.plainDateTimeISO();
        const durFromNow = (durFrom) => {
            const newDate = createdAt.add(durFrom);
            return newDate
        }
        const durations = [
            { minutes: 1 },
            { seconds: 20 },
            { minutes: 3 },
        ]
        const scheduledReviews = durations.map(durFromNow)

        const newReviewItems = reviewItems.slice()
        const title = `your ${reviewItems.length + 1} entry to review`;

        newReviewItems.push(
            {
                title,
                content: evt.target.value,
                // reviewDuration: null, //FUTURE: how long to spend reviewing
                createdAt,
                scheduledReviews,
            }
        );

        reviewItemsSet(newReviewItems);
    }

    return (
        <form onSubmit={(evt) => handleAdd(evt)}>
            <input type="text" placeholder="something you need to remember?"></input>
        </form>
    )
}