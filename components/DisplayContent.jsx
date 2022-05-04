import styles from '../styles/DisplayContent.module.scss'

export default function DisplayContent({ selectedReview }) {

    return (
        <div className={styles.page}>
            <h2>{selectedReview.content.title}</h2>
            <p>{selectedReview.content.body}</p>
        </div>
    )
}

// if theres a link open the tab in the background but keep the focus on this window