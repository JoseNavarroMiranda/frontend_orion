import Fcard from "../card/Fcard"
import Scard from "../card/Scard"
import Tslide from "../card/Tcard"

function MiddleInfo() {
    return (
      <div className="mx-auto grid md:grid-cols-3 md:px-10 gap-3 ">
        <Fcard />
        <Scard />
        <Tslide />
      </div>
    )
  }

export default MiddleInfo
