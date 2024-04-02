import './MainContainer.css';
import HeroSection from './HeroSection'
import CardSpecial from './CardSpecial'
import CardReview from './CardReview'
import AboutSection from './AboutSection'
import greekSalad from '../../assets/greek salad.jpg'
import bruchetta from '../../assets/bruchetta.svg'
import lemonDessert from '../../assets/lemon dessert.jpg'
import userImageOne from '../../assets/Lola Nena.jpg'
function MainContainer() {
    const cardSpecialParam = [
        {
            id:0,
            img:greekSalad,
            heading:'Greek Salad',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven',
            price:"120 pesos",
            comment: "Order Delivery"
        },
        {
            id:1,
            img:bruchetta,
            heading:'Bruchetta',
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven",
            price:"120 pesos",
            comment: "Order Delivery"
        },
        {
            id:2,
            img:lemonDessert,
            heading:'Lemon Dessert',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven',
            price:"120 pesos",
            comment: "Order Delivery"
        },        {
            id:3,
            img:lemonDessert,
            heading:'Lemon Dessert',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven',
            price:"120 pesos",
            comment: "Order Delivery"
        },
        {
            id:4,
            img:lemonDessert,
            heading:'Lemon Dessert',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven',
            price:"120 pesos",
            comment: "Order Delivery"
        }
        
        ]
        const cardReviewParam = [
            {
                id:0,
                starRatingValue:3.7,
                img:userImageOne,
                username:'Aling Nena',
                comment: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven\""
            },
            {
                id:1,
                starRatingValue:4.3,
                img:userImageOne,
                username:'Aling Nena',
                comment: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven\""
            },
            {
                id:2,
                starRatingValue:4.8,
                img:userImageOne,
                username:'Aling Nena',
                comment: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven\""
            },
            {
                id:3,
                starRatingValue:5,
                img:userImageOne,
                username:'Aling Nena',
                comment: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven\""
            },
            ]

    return (
        <div className='container-main'>
            <HeroSection/>
            <CardSpecial cardSpecialParam={cardSpecialParam}/>
            <CardReview cardReviewParam={cardReviewParam}/>
            <AboutSection/>
        </div>
    )
}

export default MainContainer;