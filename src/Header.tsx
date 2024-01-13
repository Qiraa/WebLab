import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <img src="logo.png"/>
            <div className="header-menu">
                <div className="header-menu-selected-item">Home</div>
                <div className="header-menu-unselected-item">Find a doctor</div>
                <div className="header-menu-unselected-item">Apps</div>
                <div className="header-menu-unselected-item">Testimonials</div>
                <div className="header-menu-unselected-item">About us</div>
            </div>
        </div>
    )
}