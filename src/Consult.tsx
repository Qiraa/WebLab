import "./Consult.css"
import "./Common.css"

export default function Consult() {
    return (
        <div className="consult-block">
            <div className="consult-content">
                <div className="consult-title">Virtual healthcare for you</div>
                <div className="consult-description">
                    Our service provides progressive, and affordable healthcare, 
                    accessible on mobile and online for everyone
                </div>
                <button className="filled-button">Consult today</button>
            </div>
            <img className="iconsult-image" src="consult.png"/>
        </div>
    )
}