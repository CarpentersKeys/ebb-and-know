import { useEffect, useState } from "react";

export default function Prompt({ count }) {
    const [firstChange, firstChangeSet] = useState(true);
    const [prompt, promptSet] = useState('let\'s add sth to review');

    useEffect(() => {
        if (firstChange === true && count > 0) { firstChangeSet(false); };

        count < 1 && firstChange === false && promptSet('well, we all have things we\'d like to forget');
        count > 0 && promptSet('add a few more. doesn\'t need to be special');
        count > 3 && promptSet('we\'ve sped up time so you can get the gist');
    }, [count, firstChange]);

    return (
        <div>
            <p>{prompt}</p>
        </div>
    );
};