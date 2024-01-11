import "./ServiceCard.css"

export default function ServiceCard(
    state : {
        imagePath: string,
        title: string,
        description: string,
    }
) {
    return (
        <div className="service-card">
            <img className="image" src={ state.imagePath }/>
            <div className="title">{ state.title }</div>
            <div className="subtitle">{ state.description }</div>
        </div>
    )
}