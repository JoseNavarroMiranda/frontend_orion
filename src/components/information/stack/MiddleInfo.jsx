import Fcard from "../card/Fcard"
import Scard from "../card/Scard"
import Tslide from "../card/Tcard"

function MiddleInfo() {

    return (
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 max-w-6xl px-15">
            <Fcard />
            <Scard />
            <Tslide />
        </div>
    )
}

export default MiddleInfo
