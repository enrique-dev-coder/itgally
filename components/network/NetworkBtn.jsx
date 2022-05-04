const NetworkBtn = ({setBtnControl, setCity, setNetwork}) => {
    return (
        <ul className="list-none flex flex-col top-[100%] bg-[#FCF4FB] border-[#8C1D82] text-[#8C1D82] border">
            <li className="p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    barcelona: false,
                    galicia: false,
                    madrid: false,
                    pontevedra: false,
                    vigo: false,
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

            <li className="p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: true,
                    barcelona: false,
                    galicia: false,
                    madrid: false,
                    pontevedra: false,
                    vigo: false,
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

            <li className="p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    barcelona: true,
                    galicia: false,
                    madrid: false,
                    pontevedra: false,
                    vigo: false,
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
                Barcelona
            </li>

            <li className="p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    barcelona: false,
                    galicia: true,
                    madrid: false,
                    pontevedra: false,
                    vigo: false,
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

            <li className="p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    barcelona: false,
                    galicia: false,
                    madrid: true,
                    pontevedra: false,
                    vigo: false,
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
                Madrid
            </li>

            <li className="p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    barcelona: false,
                    galicia: false,
                    madrid: false,
                    pontevedra: true,
                    vigo: false,
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

            <li className="p-[1rem] border-primary-violet border-b-[1px] px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 cursor-pointer" onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    barcelona: false,
                    galicia: false,
                    madrid: false,
                    pontevedra: false,
                    vigo: true,
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
        </ul>
    )
}

export default NetworkBtn