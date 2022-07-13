const NetworkBtn = ({setBtnControl, setCity, setNetwork}) => {
    return (
        <ul className="list-none flex flex-col top-[100%] bg-[#FCF4FB] border-[#8C1D82] text-[#8C1D82] border absolute w-[180px]">
            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: false,
                    pontevedra: false,
                    vigo: false,
                    lugo: false,
                    ourense: false,
                    santiago: false,
                    allCities: true
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false
                })
            }}>
                All cities
            </li>

            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: true,
                    galicia: false,
                    pontevedra: false,
                    vigo: false,
                    lugo: false,
                    ourense: false,
                    santiago: false,
                    allCities: false
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false
                })
            }}>
                A Coruña
            </li>

            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: true,
                    pontevedra: false,
                    vigo: false,
                    lugo: false,
                    ourense: false,
                    santiago: false,
                    allCities: false
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false,
                })
            }}>
                Galicia
            </li>

            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: false,
                    pontevedra: true,
                    vigo: false,
                    lugo: false,
                    ourense: false,
                    santiago: false,
                    allCities: false
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false
                })
            }}>
                Pontevedra
            </li>

            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: false,
                    pontevedra: false,
                    vigo: true,
                    lugo: false,
                    ourense: false,
                    santiago: false,
                    allCities: false
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false
                })
            }}>
                Vigo
            </li>

            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: false,
                    pontevedra: false,
                    vigo: false,
                    lugo: true,
                    ourense: false,
                    santiago: false,
                    allCities: false
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false
                })
            }}>
                Lugo
            </li>

            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: false,
                    pontevedra: false,
                    vigo: false,
                    lugo: false,
                    ourense: true,
                    santiago: false,
                    allCities: false
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false
                })
            }}>
                Ourense
            </li>

            <li className="text-center p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: false,
                    pontevedra: false,
                    vigo: false,
                    lugo: false,
                    ourense: false,
                    santiago: true,
                    allCities: false
                })
                setNetwork({
                    afaga: false,
                    ategal: false,
                    atendo: false,
                    cruz: false,
                    domus: false,
                    olecer: false,
                    saraiva: false,
                    fegerec: false
                })
            }}>
                Santiago
            </li>
        </ul>
    )
}

export default NetworkBtn