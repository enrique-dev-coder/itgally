const NetworkMap = ({city, setBtnControl, setCity, setNetwork}) => {

    return (
        <svg className="absolute -left-[60%] sm:-left-[55%] md:-left-[40%] lg:-left-[20%] xl:left-0 fill-slate-300" baseProfile="tiny" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" version="1.2" viewBox="0 0 1000 891" xmlns="http://www.w3.org/2000/svg">

            {/* LA CORUÑA - COMPOSTELA */}
            <path className={`${city.galicia || city.coruna ? "fill-slate-800" : "fill-[#C680B3]"} hover:fill-slate-800 transition ease-in-out duration-150 cursor-pointer`} onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: true,
                    galicia: false,
                    pontevedra: false,
                    vigo: false,
                    allCities: false
                }
                )
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
            }
            } d="M465.4 4.8l-0.6 3.5 0.8 1.3-1.5 1.7-0.2 0.6 0.2 1.1-0.1 0.7-0.1 0.3-1.1 1.1-0.2 0.5 0 0.6 0.5 0.9 0.1 0.6-1.6 4.4-1.2 0.7-0.4 1.4-0.3 0.5-0.5 0.3-2.1-0.3-0.3 4-0.3 0.7-1.6 1.8-0.2 0.4-0.1 0.5 0.2 0.5 0.3 0.8 0 0.6-1.5 3.9 1.6 6-0.1 0.5-0.2 0.4-0.1 0.7 0 0.8 1.2 3.9 0 1.6-0.2 1.5-1.1 2-0.4 0.4-0.9 0.5-0.4 0.4-1.1 2-1.5 0.8-0.7 0.1-5.5-1.1-0.8 0.3-0.6 0.8-0.2 0.2-0.5 0.1-1.4-0.4-0.4 0.1-1.3 0.9-0.4-0.1-0.2-0.4-0.2-0.5-0.3-0.5-0.3-0.1-0.3 0-0.3 0.2-0.2 0.4 0 0.3 0.3 1.1 0 0.7-0.1 0.6-0.3 0.5-0.5 0.2-1.7-0.6-1.3 2-1.1 0.8-0.5 0.1-0.7-0.1-1.3-0.8-3.3 0.7-0.8 0.4-0.2 0.4-0.2 0.8-0.2 0.1-1.6-0.5-3.2 1.1-0.6 1.1-0.3 0-0.3 1-0.4 0.9-0.6 0.7-0.8 0.3-0.9-0.3-0.5-0.8-0.5-0.9-0.5-0.5-0.7 1.3-0.1 0.7 0.4 0.5-0.9 1.4-0.6 0.4-0.6-0.5 0.2-0.7-0.6 0.3-1.4 1.2 0.6 0.7-0.5 0.5-1.6 0.4-0.2 0.3-0.3 1.4-0.4 0.1-0.3 0.4-0.7 0.7-0.6-0.7-0.1-1.1-0.2-1-1-0.5-0.7-0.6 0.2-1.5 0.7-1.5 0.5-0.9 0-0.7 0.1-0.9 0.3-1.2 0.5-0.8 0.2-0.4 0.4-0.4 0.5-0.2 0.1-0.1 1.3-0.8 1.1-1.6 0.7-0.6 1.1-0.2 0.3-0.5 0.2-0.9-0.1-1-0.9-0.5-0.2 1.4-0.7 0.8-1 0.5-1.2 0.2-2.2-0.4-0.9 0.2 0.1 1-1 1.1-0.6 0.3-0.8-0.1-0.6-0.6-0.3-0.7-0.2-1-0.4-1.1 0.5 0 0.4-0.2 0.3-0.4 0.3-0.6-0.4-0.7-0.6-0.4-0.8-0.4-0.1-0.5-0.2-0.8-0.1-0.3 0.1-0.3 0.4-0.4 0.2-0.4 0-0.5 0-0.4-0.3-0.3-0.8 0-0.4-0.3-0.7-1.1-0.5-0.3 0 0.4 0.2 0.7-0.2 0.3-0.5 0.1-0.2 0-0.2-0.8-0.4-0.1-0.5 0.3-0.4 0.4-0.3 0.5-0.5 1.2-0.3 0.6-0.2-0.2-0.4-1.4-0.4-0.3 0-0.4 0.3-0.6 0.9-2.5 0.1-0.9 0.2-0.5 0.3-0.8-0.3-0.4-0.6-0.5-0.4-1.5 0.4-0.3 0.6 0 0.3-0.6 0.2-1.1 0.6-0.5 0.5-0.4 0.2-0.7 0.6 0.6 0.6 0.2 0.6-0.2 0.6-0.6 0.3-0.3 0.3-0.6 0.4-0.3 0.7-0.3 0.8-0.1 0-0.5-0.8 0.4-1 0.2-0.7 0 0-0.6-1.4 0.8-0.6-0.1-0.4-1.1 2.1-2 1.4-0.8 1.7 0.8 0.8-0.1 0.7-0.1 0.6-0.3 0.6-0.5 0.5-0.3 0.5-0.8 0.2-0.9 0.4 0 0.8 0.7 1.2-0.1 1.1-0.4 0.8-0.6-0.9 0-0.6-0.3-0.6-1.4-0.2 0-0.6-0.3-0.3-0.3 0.3-0.2 0.4-0.1 1.8-0.8 1.9-1.2 1.4-0.4 0.3-0.5 0.4-0.3 0.5-0.1 0.6 0.3 1.3 1.5 0.8 0.3 0.8 0.1 1.7 0.6 0.8 0.1 1.3-0.5 1.5-0.8 1.7-0.6 1.5 0.7 2.3-1.1 0.4-0.4 0.2-0.5 0.3-0.5 0.5-0.3 0.9-0.2 0.3-0.6 0.2-0.2 2.5-0.6 0.1 0.8 0.4 0.6 1 0.9 0.6-0.7 0.1-0.6-0.1-1.4 0.4-0.8 0.9 0.1 1.3 0.9 0.6 0.2 0.3 0.5 0.2 0.7 0.3 0.7 1 1 0.5 0.6 0.3 0.9 0.3-1 0-0.9-0.3-1.9 0-0.9 0.2-0.6 0.5-0.4 0.8-0.6-0.9-0.4-0.8-0.1-1.5 0.1-0.8-0.3-1-1.1-0.7-0.3 0.8-0.7 4.5-0.6 0.3-0.1 0.3-0.3 0.2-0.4-0.1-0.4-0.2-0.1-1 0.5-2.7 0.5 0.3-0.4 0.3-0.1-0.6-0.4-0.6 0.8-0.8 0.4-2 0 0.4-0.9 0.1-1.3 0.2-0.9 0.6 0.2 0.5-0.8-0.3-0.3-0.4-0.5-0.2-0.6 0-0.7 1 0.1 0.3-0.1 1 0.2 1.3-0.7 6.4-5 0.2 0.7 0.4 0.3 0.5 0.1-0.1-0.6 0.6-0.5-0.9-0.7-0.1-0.6 0.2-0.7 0.2-0.7 0.3-0.5 0.6-0.2 1.5 0 1.3-0.4 1.3-0.7 1.1-1 0.8-1.2 1.3 0.2 0.5 0.8 0.3 1.1 0.7 0.8-0.3 0.3-0.6-0.3-0.4 0.6-0.2 0.5 0 0.5 0.3 0.5-0.5 0.4-0.5-0.4-0.4 0.4-0.2 0.1 0 0.4 2.3 0.1 0.4-0.5-0.8-1.3 0.5-0.4 0.5 0 1.1 0.4-0.3-0.9 0.6-0.7 0.8-0.7 0.9-0.5 1.8-0.4 0.9-0.7 0.8-0.9 0.3-0.9 0.1-0.2 0.4 0.2 0.3 0.5 0.1 0.6-0.2 0.3-1 1.3 0 0.9z" id="ESP5827" name="La Coruña">
            </path>
            {/* LA CORUÑA - COMPOSTELA*/}


            {/* LUGO */}
            <path className={`${city.galicia ? "fill-slate-800" : "fill-[#C680B3]"} hover:fill-slate-800 transition ease-in-out duration-150 cursor-pointer`} onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: true,
                    pontevedra: false,
                    vigo: false,
                    allCities: false
                }
                )
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
            }
            } d="M494.2 20l-0.2 0.4-1.4 1.3-0.6 1-0.4 0.4-0.4 0.2-0.6 0.1-0.5-0.2-0.5 0-0.5 0.1-0.3 0.4-0.1 0.4-0.1 1.3 0.2 0.6 0.6 0.3 0.8-0.1 0.3 0.2 0.1 0.4 0.1 1.5 0.1 0.7 0.3 0.6 0.3 0.5 0.6 0.6 0.4 0.1 0.4 0.2 0.3 0.4 0.3 2.6 0.3 0.6 0.3 0.4 0.3 0.4 1 0.8 0.6 0.1 0.5 0.6 0.7 0.4 0.4 0.1 0.3 0.2-0.1 0.7-0.3 0.9 0 0.6 0.1 0.5 0.3 0.4 0.2 0.3 0.4 0.3 0.3 0.1 0.8-0.3 0.8-0.5 0.4-0.2 0.4-0.2 0.2-0.4 0.1-0.3 0.2-0.4 0.2-0.2 0.4-0.1 0.4 0.4 0.4 0.6 0.7 1.2 0.1 0.6-0.1 0.6-1.7 1.5-0.3 0.2-1.6 0.7-0.9 0-0.5 0.2-0.2 0.3-0.3 0.8-0.1 0.5-0.2 0.5-0.4 0.2-0.4 0.1-0.3 0.4-0.1 0.7 0.3 0.7 0.3 0.6 0.4 0.2 0.4-0.2 0.2-0.4 0-1.2 0.4 0 0.9 1.3 0.5 0.5 0.7 0.2 0.9 0 0.3 0.2 1.1 1 0.4 0.5 0.1 0.7 0.2 2.2-0.3 0.6-0.1 0.5-0.2 0.5-0.8 0.9-0.1 0.7 0.4 1.5 0 0.5-0.1 0.7-0.3 0.6-1.4 1.7-1 1.4-0.5 0.4-0.4 0.2-0.8-0.1-0.4 0.1-1.1 1-1.2 0.6-0.2 0.1-0.5 0.8-0.2 0.4-0.1 0.6 0.1 0.8 0.3 0.5 0.6 0.8 0.1 0.4 0 0.4-0.4 0.3-0.4 0.3-0.3 0.3-0.2 0.5 0.1 1.7-0.1 0.7-0.7 1.8-0.1 0.4 0 1.2-0.4 1.1-1.4 2.7-1.6 1.1-0.6 0.8-2.3 6.1-2.3-4.9-0.6-0.5-2.3-0.6-1.8 0.3-0.4-0.1-1.6-1.4-0.5 0.7-4.6 2.3-2.5-0.8-1.7 0.4-4.4-3-1.6 0-1.3-1.2-3.6-1.9-1.5-0.1 0.1-1.9 0-0.6-0.3-0.6-1.3-1.3 1.6-3.5 0.1-1.9 0.2-0.7 0.8-1.2 0-0.9-0.5-0.5-1.4-0.5-0.9-0.6-2.1-2.5-0.1-0.8 0.8-2.9-1.6-0.4 1.1-2 0.4-0.4 0.9-0.5 0.4-0.4 1.1-2 0.2-1.5 0-1.6-1.2-3.9 0-0.8 0.1-0.7 0.2-0.4 0.1-0.5-1.6-6 1.5-3.9 0-0.6-0.3-0.8-0.2-0.5 0.1-0.5 0.2-0.4 1.6-1.8 0.3-0.7 0.3-4 2.1 0.3 0.5-0.3 0.3-0.5 0.4-1.4 1.2-0.7 1.6-4.4-0.1-0.6-0.5-0.9 0-0.6 0.2-0.5 1.1-1.1 0.1-0.3 0.1-0.7-0.2-1.1 0.2-0.6 1.5-1.7-0.8-1.3 0.6-3.5 0.2 0.3 0.7-0.3 0.1-0.8 0.7-0.1 0.7-0.4 0.2 0.8 1 2.2-0.1 0.9 0.4-0.1 0.6-0.8 0.3-0.9 0.6 0.2 0.4-0.3 0.4-0.5 0.6-0.2 1.8 0.2 0.5 0.2 3.7 2.1 1.8 0.7 2.7 5 2.1 1-0.3 0.6-0.3 0.2 0 0.5 0.6 0.2 0.4-0.1 0.3-0.4 0.5-0.2 0.7 0 0.9 0.3 1.7 0.3 2.7-0.1 0.7-0.5 0.8 0.4 0.8 0.2 0.5 0.4 0.1 1.2-0.3 0.6-0.5 0.8-0.2 0.8 0.3 0.8z" id="ESP5832" name="Lugo">
            </path>
            {/* LUGO */}

            {/* ORENSE /// NO HAY LIVING LABS PERO ES DE GALICIA */}
            <path className={`${city.galicia ? "fill-slate-800" : "fill-[#C680B3]"} hover:fill-slate-800 transition ease-in-out duration-150 cursor-pointer`} onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: true,
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
            }
            } d="M493.1 79.5l2 0.1 1.9 0.4 0.5 0 0.4-0.5 0.4-0.3 0.9-0.3 0.6 0 0.4 0.2 0.8 0.6 3.2 0.9 0.5 1.3-0.1 0.4-0.1 1.1-0.1 0.5-0.2 0.4-0.5 0.7-0.3 0.1 2.2 1.9 1.5 1 0.6 0.7 0.3 0.5-0.2 0.9 0.1 0.9-0.1 0.4-0.2 0.8-0.6 0.7-0.6 1.1-0.6 0.5-0.7 0.9-0.1 0.5-0.1 0.7-0.3 0.1-0.8-0.2-0.7 0-1 0.2-0.7 0.4-0.7 0.6-1.5 1.6-0.3 0.5-0.2 0.4-0.5 1.6-0.3 0.3-0.7 0.4-0.4 0.4-1.1 1.7-0.6 0.5-0.1 0.5 0.1 0.4 0.6 0.6 0.3 0 0.9 0 0.3 0.2 0.5 0.7 0.1 0.5-0.8 1.9-0.2 0.8 0.2 0.5 0 0.7-0.4-0.2-1.1 0.7-1.5 0.7-1.4-0.6-1.4-1.2-1.4-0.9-0.7 0.1-0.7 0.5-0.7 0.5-0.3 0.3-0.1 0.9 0.3 1.9-0.1 1-1 1.3-1.4 0.9-3.2 1.1-0.8 0.1-1.6 0-0.6 0.1-0.6 0.4-1.1 1.2-0.6 0.5-0.2-0.9-0.4-1-0.6-0.8-0.6-0.2-0.4-0.1-0.7-0.5-0.3 0-0.4 0.3-0.1 0.8-0.2 0.4-0.7 0.5-0.9 0.3-1 0.2-0.7-0.1-0.8-0.4 0-0.6 0.7-1.9-2.4-0.1-0.8-0.3-1.2-0.9-0.7-0.2-1.2 0.6-2.8 0.7-1.2-0.1-0.4 0.2-0.4 0.7-0.3 0.4-1.4 0-0.3-1.8-0.1-1.6-0.9 0.4-0.2 0.6-0.2 1-0.5 0.8-0.8 0-0.7-0.1-0.6 0.3-0.6 0.6-0.4 0.7-1.5 1.5-2 0.6-3.8-0.2 0.2-1.6-0.1-0.8-0.3-0.4-1.6-0.7-0.5-1 0.1-1.1 0.4-1.1 1.7-2.6 1.3-1.2 1.3-0.9 0.7-0.6 0.5-0.7 0.1-1.1-0.4-0.9-0.7-0.6-0.8-0.4-0.9 0.1-0.8 0.4-0.7 0.2-0.6-0.5-0.1-1 0.1-2.5-0.4-0.9-0.4-0.6 1.8-1.2 0.1-2.2 0.7-2.1-3.2 0.8-0.4-0.3-1-1.2-0.3-0.6 0-0.7 0.6-2.2-0.7-0.2-0.4-0.3-1.4-2.2-0.1-0.4 0.1-1 0-0.3-0.7-1.5-0.4-1.1 0.2-3.2-0.1-0.4 1.7 0.1 2.3-2.5 1.6-0.5 1.8-1.9 1.2 1.4 3.5-0.2 2.2 0.6 0.2-0.2 0.9-1.5 0.4-0.1 1.1 0.2 1.3-0.6 1.3 1.3 0.3 0.6 0 0.6-0.1 1.9 1.5 0.1 3.6 1.9 1.3 1.2 1.6 0 4.4 3 1.7-0.4 2.5 0.8 4.6-2.3 0.5-0.7 1.6 1.4 0.4 0.1 1.8-0.3 2.3 0.6 0.6 0.5 2.3 4.9 2.3-6.1 0.6-0.8 1.6-1.1 1.4-2.7z" id="ESP5838" name="Orense">
            </path>
            {/* NO HAY LIVING LABS PERO ES DE GALICIA */}

            {/* PONTEVEDRA / VIGO */}
            <path className={`${city.galicia || city.pontevedra || city.vigo ? "fill-slate-800" : "fill-[#C680B3]"} hover:fill-slate-800 transition ease-in-out duration-150 cursor-pointer`} onClick={() => {
                setBtnControl(false)
                setCity({
                    coruna: false,
                    galicia: false,
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
            }
            } d="M451.9 58.6l1.6 0.4-0.8 2.9 0.1 0.8 2.1 2.5 0.9 0.6 1.4 0.5 0.5 0.5 0 0.9-0.8 1.2-0.2 0.7-0.1 1.9-1.6 3.5-1.3 0.6-1.1-0.2-0.4 0.1-0.9 1.5-0.2 0.2-2.2-0.6-3.5 0.2-1.2-1.4-1.8 1.9-1.6 0.5-2.3 2.5-1.7-0.1 0.1 0.4-0.2 3.2 0.4 1.1 0.7 1.5 0 0.3-0.1 1 0.1 0.4 1.4 2.2 0.4 0.3 0.7 0.2-0.6 2.2 0 0.7 0.3 0.6 1 1.2 0.4 0.3 3.2-0.8-0.7 2.1-0.1 2.2-1.8 1.2-1.3 0.9-0.8 0.4-0.8 0-0.3 0.1-0.4 0.3-1.1 1-0.8 0.4-6.8 1.1-0.9 0.3-1.5 1.1-0.8 0.3-1.6 0.1-0.8 0.1-0.8 0.6-0.4 0.6-0.4 1.3-0.4 0.6-0.9 0.6-1.1 0.3-1 0.6-0.5 0.3-0.5 1-0.7 0.9-0.8 0.7-0.9 0.3-0.7 0.4-0.8 0.9-0.7 0.6-0.7-0.3 0.1-0.8-0.9-11.6 0.2-1 0.5-0.5 1.7 0 0.8-0.2 0.4-0.6-0.2-0.5-0.9-0.4-0.2-0.3 0.2-0.3 1.2-0.6 0.2-0.8 0.3-0.5 0.6-0.5 0.9-1 2.3-1.8 0.8-0.4 1.4-1.3 0.8-0.4 0.9-0.6 0.3-0.3 0.1-0.5 0-1.8 0-0.4-0.6 0-0.6 0.7-0.5 1.1-0.6 1.1-1.1 0.4-0.9 0.3-2.4 1.1-0.5 0.5-0.5 0.1-2.3-0.1-0.9 0.2 0.2-0.7 0.4-1.4 0-0.8 0.3 0 0.6 1 0.3-0.5 0-1.9-0.2-0.8 0.2-0.1 0.6-0.2 1.6 0.4 0.3-0.1 0.3-0.8 1.7-2 0.7-0.7 1.5-1 0.6-0.6 0.3-0.9-0.4 0.2-0.3 0-0.5-0.2-0.4 0.1-1.2 0.7-1.1 0.9-0.6 0.4-1 0.2-1.4 0.2-1.4-0.2-1.1-0.7-0.3-0.7-0.2-1.1-0.4-0.6-0.6-0.4-1.5-0.2-0.3-0.3 0.3-0.5 0.8-0.6 1-0.3 0.6-0.2 0.5 0.2 0.4 0.5 0 0.6-0.6 0.3 0.4 0.3 0.6 0.3 0.7 0.1 0.4-0.2 0.2-0.6-0.1-0.8 0-0.6 0.5-0.5-0.5-2.1-0.1-1 0.2-0.9 0.4-0.7 0.5-0.5 0.6-0.2 0.6-0.7 1.6-3.7 0.4-1.4 0.6-1.1 3.2-1.1 1.6 0.5 0.2-0.1 0.2-0.8 0.2-0.4 0.8-0.4 3.3-0.7 1.3 0.8 0.7 0.1 0.5-0.1 1.1-0.8 1.3-2 1.7 0.6 0.5-0.2 0.3-0.5 0.1-0.6 0-0.7-0.3-1.1 0-0.3 0.2-0.4 0.3-0.2 0.3 0 0.3 0.1 0.3 0.5 0.2 0.5 0.2 0.4 0.4 0.1 1.3-0.9 0.4-0.1 1.4 0.4 0.5-0.1 0.2-0.2 0.6-0.8 0.8-0.3 5.5 1.1 0.7-0.1 1.5-0.8z" id="ESP5840" name="Pontevedra">
            </path>
            {/* PONTEVEDRA */}

            <circle cx="483.6" cy="113.2" id="0">
            </circle>
            <circle cx="466.7" cy="50.5" id="1">
            </circle>
            <circle cx="915.5" cy="107.1" id="2">
            </circle>
        </svg>
    )
}

export default NetworkMap