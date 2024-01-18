import "./Download.css"
import "../Common.css"

export default function Download() {
    return (
        <div className="download-block">
            <div className="download-content">
                <div className="download-title">Download our mobile apps</div>
                <div className="download-separator-line"/>
                <div className="download-description">
                    Our dedicated patient engagement app and 
                    web portal allow you to access information instantaneously (no tedeous form, long calls, 
                    or administrative hassle) and securely
                </div>
                <button className="outlined-button">
                    <div className="download-button-text">
                        Download
                        <img width="10px" src="arrow_down.svg"/>
                    </div>
                </button>
            </div>
            <img className="download-image" src="download.png"/>
        </div>
    )
}