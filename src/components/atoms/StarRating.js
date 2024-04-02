import './StarRating.css';
import star from '../../assets/star.png';
import halfStar from '../../assets/halfStar.png';
import "@fontsource/karla";

function StarRating(props) {
    var wholeStarCount = Math.floor(props.starRatingValue);
    var starGroup = [...Array(wholeStarCount)].map((_,i) => (
        <img key={i} src={star} alt='whole star'></img>
    ));
    if (props.starRatingValue%1 !== 0) {starGroup =[starGroup,(<img src={halfStar} alt='half star'></img>)]}
    return(
        <div id='star-container'><span>{props.starRatingValue}</span>{starGroup}</div>
    )
}

export default StarRating;