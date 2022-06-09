import styles from './DisplayContent.module.scss'

export default function DisplayContent({ selectedReview, selectedReviewSet }) {

    function closeDisplay() {
        selectedReviewSet((prev) => !prev) 
    }

    return (
        <div className={styles.page}>
            <button onClick={closeDisplay}>Back</button>
            <h2>{selectedReview.content.title}</h2>
            <p>{selectedReview.content.body}</p>
        </div>
    )
}

// if theres a link open the tab in the background but keep the focus on this window