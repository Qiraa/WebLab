import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-row">
                <div className="footer-main-column">
                    <img height="40px" width="180px" src="logo_footer.png"/>
                    <div className="footer-main-text">
                        <p>HealthCare provides progressive,</p>
                        <p>and affordable healthcare, accessible on mobile</p> 
                        <p>and online for everyone</p>
                    </div>
                    <div className="footer-main-text">
                        ©HealthCare PTY LTD {new Date().getFullYear()}. All rights reserved
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-title">Company</div>
                    <div className="footer-link">About</div>
                    <div className="footer-link">Testimonials</div>
                    <div className="footer-link">Find a doctor</div>
                    <div className="footer-link">Apps</div>
                </div>
                <div className="footer-column">
                    <div className="footer-title">Region</div>
                    <div className="footer-link">Indonesia</div>
                    <div className="footer-link">Singapore</div>
                    <div className="footer-link">Hongkong</div>
                    <div className="footer-link">Canada</div>
                </div>
                <div className="footer-column">
                    <div className="footer-title">Help</div>
                    <div className="footer-link">Help center</div>
                    <div className="footer-link">Contact support</div>
                    <div className="footer-link">Instructions</div>
                    <div className="footer-link">Canada</div>
                </div>
            </div>
        </div>
    )
}