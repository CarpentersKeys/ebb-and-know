import { useState, useEffect } from 'react'
import Entry from '../components/Entry';
import Prompt from '../components/Prompt';
import TimeLinePreview from '../components/TimeLinePreview';

export default function AppDemo() {
    const [firstAdd, firstAddSet] = useState(false);
    const [reviewItems, reviewItemsSet] = useState([]);

    // useEffect(() => {
    //     console.log('demo:', reviewItems)
    // }, [reviewItems]);

    return (
        <div>
            <h1>Ebb..</h1>
            <Prompt count={reviewItems.length} />
            <Entry reviewItems={reviewItems} reviewItemsSet={reviewItemsSet} />
            <TimeLinePreview reviewItems={reviewItems} reviewItemsSet={reviewItemsSet}/>
        </div>
    )
}