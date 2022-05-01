import { useState, useEffect } from 'react'
import Entry from '../components/Entry';
import Prompt from '../components/Prompt';
import Schedule from '../components/Schedule';
import TimelinePreview from '../components/TimelinePreview';

export default function AppDemo() {
    const [firstAdd, firstAddSet] = useState(false);
    const [reviewItems, reviewItemsSet] = useState([]);

    useEffect(() => {
        console.log('demo:', reviewItems)
    }, [reviewItems]);

    return (
        <div>
            <h1>Ebb..</h1>
            <Prompt count={reviewItems.length} />
            <Entry reviewItems={reviewItems} reviewItemsSet={reviewItemsSet} />
            <Schedule reviewItems={reviewItems} reviewItemsSet={reviewItemsSet}/>
            <TimelinePreview reviewItems={reviewItems} />
        </div>
    )
}