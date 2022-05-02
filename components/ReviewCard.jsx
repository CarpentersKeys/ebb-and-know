import styles from '../styles/ReviewCard.module.scss'

export default function ReviewCard({ reviewItem }) {

    console.log(reviewItem)

    return (
        <div className={styles.card}>
            <h2>{reviewItem.content.title}</h2>
            <p>{reviewItem.content.body}</p>
        </div>
    )
}