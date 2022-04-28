import { useState, useEffect } from 'react'
export default function AppDemo() {
    const [firstAdd, firstAddSet] = useState(false);
    const [reviewItems, reviewItemsSet] = useState([]);
    const [prompt, promptSet] = useState('let\'s add sth to review');

    useEffect(() => {
        reviewItems < 1 && firstAdd === true && promptSet('well, we all have things we\'d like to forget')
        reviewItems > 0 && promptSet('add a few more. doesn\'t need to be special')
        reviewItems > 3 && promptSet('we\'ve sped up time so you can get the gist')

    }, [reviewItems, firstAdd])

    function handleAdd(evt) {
        
    }

    return (
        <div>
            <h1>Ebb..</h1>
            <p>{prompt}</p>
            <form onSubmit={(evt) => handleAdd(evt)}>
                <input type="text" placeholder="something you need to remember?"></input>
            </form>
        </div>
    )
}