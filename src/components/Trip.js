import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/4.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps</p>
            <div className="tripcard">
                <TripData image={Trip1}
                    heading="Trip in Indonesia"
                    text="The island nation of Indonesia leaves no stone unturned when it comes to all that you can see and do here. Its most popular destination, Bali, offers the quintessential holiday for the mind, body and soul. From the spiritual to the adventurous, everyone comes here in search for something and they usually always find it! Surfers particularly enjoy the waves at Kuta while believers head to Tanah Lot Temple for blessings."
                />
               <TripData image={Trip2}
                    heading="Trip in Malaysia"
                    text="Malaysia is a beautifully complex vacation destination, a land where ancient rainforests give way to multicultural city life. Capital city Kuala Lumpur is visually defined by the iconic Petronas Twin Towers, while in charming Melaka the vibe is more quaint and historical."
                />
                <TripData image={Trip3}
                    heading="Trip in France"
                    text="Whichever part of the country you choose to visit, you’ll find so much to ignite a passion for French culture. Explore France with Titan and you’ll see the country with the perspective of a knowledgeable tour manager who knows just where to go and what to see."
                /> 
            </div>
        </div>
    )
}

export default Trip;