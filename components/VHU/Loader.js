export default function Loader({ name }) {
    return (
        <div className="loader">
            <div className="wide-container loader">
                <div className="section-title-wrapper for-loader">
                    <h2 className="heading-2 absolute white">{name}</h2>
                    <div className="section-outlined-heading outlined-white">{name}</div>
                </div>
            </div>
        </div>
    )
}