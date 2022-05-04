import ReviewCard from "../components/ReviewCard";

export default function Test() {
    return (
        <ReviewCard reviewItem={{
            id: Math.floor(Math.random() * 10 ** 4),
            reviewTime: 'aef',
            timeFromCreated: 'waef',
            content: {
                title: 'css-grid',
                body: 'your 1 entry to review'
            },
            duration: 'aef', //FUTURE: how long to spend reviewing
        }} />
    )
}