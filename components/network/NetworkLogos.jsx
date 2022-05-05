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
                    <div className={`w-full flex gap-3 items-center overflow-hidden overflow-x-auto py-[1.5rem] scrollbar`} >
                            <div className="shrink-0 mx-[2rem] w-[189px] h-[101px] cursor-pointer" onClick={() => setNetwork({
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

                            <div className="shrink-0 mx-[2rem] w-[148px] h-[69px] cursor-pointer" onClick={() => setNetwork({
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

                            <div className="shrink-0 mx-[2rem] w-[143px] h-[39px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: true,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-atendo.png" alt="" className="w-full h-full" />
                        </div>

                            <div className="shrink-0 mx-[2rem] w-[148px] h-[69px] cursor-pointer" onClick={() => setNetwork({
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

                            <div className="shrink-0 mx-[2rem] w-[138px] h-[76px] cursor-pointer" onClick={() => setNetwork({
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

                            <div className="shrink-0 mx-[2rem] w-[157px] h-[72px] cursor-pointer" onClick={() => setNetwork({
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

                            <div className="shrink-0 mx-[2rem] w-[149px] h-[70px] cursor-pointer" onClick={() => setNetwork({
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

                            <div className="shrink-0 mx-[2rem] w-[135px] h-[40px] cursor-pointer" onClick={() => setNetwork({
                                afaga: false,
                                ategal: false,
                                atendo: false,
                                cruz: false,
                                domus: false,
                                olecer: false,
                                saraiva: false,
                                fegerec: true
                            })} >
                                <img src="/assets/logo-fegerec.png" alt="" className="w-full h-full" />
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
                            <div className="w-[135px] h-[40px] cursor-pointer" onClick={() => setNetwork({
                                afaga: false,
                                ategal: false,
                                atendo: false,
                                cruz: false,
                                domus: false,
                                olecer: false,
                                saraiva: false,
                                fegerec: true
                            })}>
                                <img src="/assets/logo-fegerec.png" alt="" className="w-full h-full" />
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

                        <div className="w-[189px] h-[101px] cursor-pointer" onClick={() => setNetwork({
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

                        <div className="w-[143px] h-[39px] cursor-pointer" onClick={() => setNetwork({
                            afaga: false,
                            ategal: false,
                            atendo: true,
                            cruz: false,
                            domus: false,
                            olecer: false,
                            saraiva: false,
                            fegerec: false
                        })} >
                            <img src="/assets/logo-atendo.png" alt="" className="w-full h-full" />
                        </div>

                        <div className="w-[138px] h-[76px] cursor-pointer" onClick={() => setNetwork({
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
                        <div className="w-[138px] h-[76px] cursor-pointer" onClick={() => setNetwork({
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
                        <div className="w-[138px] h-[76px] cursor-pointer" onClick={() => setNetwork({
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
                        <div className="w-[157px] h-[72px] cursor-pointer" onClick={() => setNetwork({
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

                        <div className="w-[149px] h-[70px] cursor-pointer" onClick={() => setNetwork({
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
                    <div className={`flex gap-3 items-center`}>
                        <div className="w-[148px] h-[69px] cursor-pointer" onClick={() => setNetwork({
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

                        <div className="w-[148px] h-[69px] cursor-pointer" onClick={() => setNetwork({
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
                    </div>

                    {
                        network.ategal &&
                        <Ategal />
                    }

                    {
                        network.cruz &&
                        <CruzRoja />
                    }
                </Fragment>
            }
        </Fragment>
    )
}

export default NetworkLogos