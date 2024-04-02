import './CardSpecial.css';
function CardSpecial(prop){
    const cardSpecialItem = prop.cardSpecialParam.map((item) =>(
        <div key={item.id} id='card-special-item'>
            <img id='card-special-img' src={item.img} alt='Presentation of the Food'/>
            <div id='card-special-text'>
                <h1 id='card-special-heading'>{item.heading}</h1>
                <p id='card-special-description'>{item.description}</p>
                <h1 id='card-special-price'>{item.price}</h1>
                <h1 id='card-special-comment'>{item.comment}</h1>
            </div>
        </div>
    ));
    return (
        <>
            <div id="card-special-container">
                <div id='card-special-header'>
                    <h1 id='card-special-title'>This Weeks Specials!</h1>
                    <button id='card-special-button'>Online Menu</button> 
                </div>
                <div id="card-special-selection">
                    {cardSpecialItem}
                </div>
            </div>
        </>
    )
}

export default CardSpecial;