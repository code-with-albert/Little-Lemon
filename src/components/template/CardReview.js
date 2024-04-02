import './CardReview.css';
import StarRating from '../atoms/StarRating'

function CardReview(prop){
    const cardReviewItem = prop.cardReviewParam.map((item) =>(
        <div key={item.id} id='card-review-item'>
            <StarRating starRatingValue={item.starRatingValue} />
            <img id='card-review-img' src={item.img} alt='Presentation of the user'/>
            <div id='card-review-text'>
                <h1 id='card-review-username'>{item.username}</h1>
                <p id='card-review-comment'>{item.comment}</p>
            </div>
        </div>
    ));
    return (
        <>
            <div id="card-review-container">
                <div id='card-review-header'>
                    <h1 id='card-review-title'>Reviews</h1>
                </div>
                <div id="card-review-selection">
                    {cardReviewItem}
                </div>
            </div>
        </>
    )
}

export default CardReview;