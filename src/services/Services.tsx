import "./Services.css"
import "../Common.css"

export class Service {
    imagePath: string;
    title: string;
    description: string;

    constructor(
        imagePath: string,
        title: string,
        description: string,
    ) {
        this.imagePath = imagePath;
        this.title = title;
        this.description = description;
    }
}

export default function Services(
    state : {
        services: Service[]
    }
) {
    return (
        <div className="services-block">
            <div className="services-block-title">Our services</div>
            <div className="services-separator-line"/>
            <div className="services-block-description">
                We provide to you the best choiches for you. 
                Adjust it to your health needs and make sure your undergo treatment with our highly 
                qualified doctors you can consult with us which type of service is suitable for your health
            </div>
            <div className="services-cards">
            {
                state.services.map((service) =>
                    <div className="service-card">
                        <img className="service-image" src={service.imagePath}/>
                        <div className="service-title">{service.title}</div>
                        <div className="service-description">{service.description}</div> 
                    </div>
                )
            }
            </div>
            <button className="outlined-button">Learn more</button>
        </div>
    )
}