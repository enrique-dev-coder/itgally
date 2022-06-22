import { Fragment } from "react"
import Afaga from "./Afaga"
import Ategal from "./Ategal"
import Atendo from "./Atendo"
import CruzRoja from "./CruzRoja"
import Domus from "./Domus"
import Olecer from "./Olecer"
import Saraiva from "./Saraiva"
import Fegerec from "./Fegerec"

const NetworkLogos = ({city, network, setNetwork}) => {
    return (
        <Fragment>
            {/* ALL CITIES */}
            {
                city.allCities &&
                <Fragment>
                    {/* overflow-hidden overflow-x-auto scrollbar   w-full flex flex-wrap justify-center items-center py-[1.5rem] gap-y-4*/}
                    <div className={`w-full flex items-center overflow-hidden overflow-x-auto py-[1.5rem] scrollbar`} >
                        <div className="shrink-0 mx-[.5rem] w-[120px] h-[64px] cursor-pointer" onClick={() => setNetwork({
                            afaga: true,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-afaga.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[129px] h-[61px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: true,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-ategal.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[123px] h-[60px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: true,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-atendo.svg" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[132px] h-[74px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: true,
                            domus: false,
                            olecer: false,
                            saraiva: false, 
                            fegerec: false
                        })} >
                            <img src="/assets/logo-cruz.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[120px] h-[66px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: true,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[135px] h-[60px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: true
                        })} >
                            <img src="/assets/logo-fegerec.png" alt="" className="w-full h-[40px] mt-[.5rem]" />
                        </div>

                        <div className="shrink-0 w-[136px] h-[64px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: true,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-olecer.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 w-[129px] h-[62px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: true,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-saraiva.png" alt="" className="w-full h-full" />
                        </div>

                    </div>

                    {
                        network.afaga &&
                        <Afaga />
                    }

                    {
                        network.ategal &&
                        <Ategal />
                    }

                    {
                        network.atendo &&
                        <Atendo />
                    }

                    {
                        network.cruz &&
                        <CruzRoja />
                    }

                    {
                        network.domus &&
                        <Domus />
                    }

                    {
                        network.olecer &&
                        <Olecer />
                    }

                    {
                        network.saraiva &&
                        <Saraiva />
                    }

                    {
                        network.fegerec &&
                        <Fegerec />
                    }
                </Fragment>
            }

            {/* A CORUÑA */}
            {
                city.coruna &&
                <Fragment>
                        <div className={`flex gap-3 items-center cursor-pointer`}>
                            <div className="w-[135px] h-[60px] cursor-pointer" onClick={() => setNetwork({
                                afaga: false,
                                ategal: false,
                                atendo: false,
                                cruz: false,
                                domus: false,
                                olecer: false,
                                saraiva: false,
                                fegerec: true
                            })}>
                                <img src="/assets/logo-fegerec.png" alt="" className="w-full h-[40px] mt-[.5rem]" />
                            </div>
                        </div>

                        {
                            network.fegerec &&
                            <Fegerec />
                        }
                </Fragment>
            }

            {/* VIGO */}
            {
                city.vigo &&
                <Fragment>
                    <div className={`flex gap-3 items-center`}>

                        <div className="w-[120px] h-[64px] cursor-pointer" onClick={() => setNetwork({
                            afaga: true,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-afaga.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="w-[123px] h-[60px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: true,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-atendo.svg" alt="" className="w-full h-full" />
                        </div>

                        <div className="w-[120px] h-[66px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: true,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
                        </div>
                    </div>

                    {
                        network.afaga &&
                        <Afaga />
                    }

                    {
                        network.atendo &&
                        <Atendo />
                    }

                    {
                        network.domus &&
                        <Domus />
                    }
                </Fragment>

            }

            {/* BARCELONA */}
            {
                city.barcelona &&
                <Fragment>
                    <div className={`flex gap-3 items-center`}>
                        <div className="w-[120px] h-[66px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: true,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
                        </div>
                    </div>

                    {
                        network.domus &&
                        <Domus />
                    }
                </Fragment>


            }

            {/* MADRID */}
            {
                city.madrid &&
                <Fragment>
                    <div className={`flex gap-3 items-center`} >
                        <div className="w-[120px] h-[66px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: true,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
                        </div>
                    </div>

                    {
                        network.domus &&
                        <Domus />
                    }
                </Fragment>

            }

            {/* PONTEVEDRA */}
            {
                city.pontevedra &&
                <Fragment>
                    <div className={`flex gap-3 items-center`} >
                        <div className="w-[136px] h-[64px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: true,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-olecer.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="w-[129px] h-[62px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: true,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-saraiva.png" alt="" className="w-full h-full" />
                        </div>
                    </div>

                    {
                        network.olecer &&
                        <Olecer />
                    }

                    {
                        network.saraiva &&
                        <Saraiva />
                    }
                </Fragment>
            }

            {/* GALICIA */}
            {
                city.galicia &&
                <Fragment>
                    <div className={`w-full flex items-center overflow-hidden overflow-x-auto py-[1.5rem] scrollbar`} >
                        <div className="shrink-0 mx-[.5rem] w-[120px] h-[64px] cursor-pointer" onClick={() => setNetwork({
                            afaga: true,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-afaga.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[129px] h-[61px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: true,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-ategal.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[123px] h-[60px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: true,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-atendo.svg" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[132px] h-[74px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: true,
                            domus: false,
                            olecer: false,
                            saraiva: false, 
                            fegerec: false
                        })} >
                            <img src="/assets/logo-cruz.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[120px] h-[66px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: true,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-domus.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 mx-[.5rem] w-[135px] h-[60px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: true
                        })} >
                            <img src="/assets/logo-fegerec.png" alt="" className="w-full h-[40px] mt-[.5rem]" />
                        </div>

                        <div className="shrink-0 w-[136px] h-[64px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: true,
                            saraiva: false,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-olecer.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="shrink-0 w-[129px] h-[62px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: false,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: true,
                            fegerec: false
                        })}>
                            <img src="/assets/logo-saraiva.png" alt="" className="w-full h-full" />
                        </div>

                    </div>

                    {
                        network.afaga &&
                        <Afaga />
                    }

                    {
                        network.ategal &&
                        <Ategal />
                    }

                    {
                        network.atendo &&
                        <Atendo />
                    }

                    {
                        network.cruz &&
                        <CruzRoja />
                    }

                    {
                        network.domus &&
                        <Domus />
                    }

                    {
                        network.olecer &&
                        <Olecer />
                    }

                    {
                        network.saraiva &&
                        <Saraiva />
                    }

                    {
                        network.fegerec &&
                        <Fegerec />
                    }
                </Fragment>
            }
        </Fragment>
    )
}

export default NetworkLogos