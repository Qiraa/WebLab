import "./LeadingProviders.css"
import "./Common.css"

export default function LeadingProviders() {
    return (
        <div className="leading-providers-block">
            <img className="leading-providers-image" src="leading_providers.png"/>
            <div className="leading-providers-content">
                <div className="leading-providers-title">Leading healthcare providers</div>
                <div className="leading-providers-separator-line"/>
                <div className="leading-providers-description">
                    We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. 
                    To us, it's not just work. We take pride in the solutions we deliver
                </div>
                <button className="outlined-button">Learn more</button>
            </div>
        </div>
    )
}