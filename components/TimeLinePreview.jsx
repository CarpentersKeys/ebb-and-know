export default function TimelinePreview({ reviewItems }) {
    const [denom, denomSet] = useState();



    const denom = reviewItems[reviewItems.length - 1].reviewTime;
    const reviews = reviewItems.map(i => ({ pos: i.reviewTime / denom, width: i.duration / denom }))

    return (
        <div className="outerBar">
            <div className="progressBar">
            </div>
            <style jsx>{`
                .outerBar {
                    min-height: 1px;
                    height: 100px;
                    width: 100%;
                    background-color: #333;
                }
                .progressBar{
                    min-height: 1px;
                    height: 100px;
                    width: 30%;
                    background-color: #999;
                }
            `}</style>
        </div>
    )

}