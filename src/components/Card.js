import star from '../images/star.png';
import card from '../images/card.png';

function Card(props) {
    return(
        <div className="card">
            <img src={props.img} className="card-img"></img>
            <div className="card-caption">
                <img src={star} className="caption-star"/>
                <span className="caption-rating">{props.rating}</span>
                <span className="caption-grey">({props.reviewCount}) ~ </span>
                <span className="caption-grey">{props.country}</span>
            </div>
            <p className="card-details">{props.title}</p>
            <p className="card-pricing"><b>From ${props.price}</b> / person</p>
        </div>
    )
}

export default Card;