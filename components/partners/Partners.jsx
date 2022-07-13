import { useState } from "react"
import NetworkModal from "../atoms/NetworkModal"

const Partners = () => {

    const [partner, setPartner] = useState({
        labsaude: false,
        cebiovet: false,
        smartiago: false,
        linknovate: false,
        dinamiza: false,
        silverlogy: false
    })

    return (
        <div className="flex flex-col gap-8 mt-[8rem]">
            <h2 className="font-bold text-primary-violet text-[1.5rem]">Collaborators</h2>
            
            <div className={`w-full flex items-center overflow-hidden overflow-x-auto py-[1.5rem] scrollbar`} >

                <div className="shrink-0 mx-[.5rem] w-[189px] h-[49px] cursor-pointer" onClick={() => setPartner({
                    labsaude: false,
                    cebiovet: true,
                    smartiago: false,
                    linknovate: false,
                    dinamiza: false,
                    silverlogy: false
                })} >
                    <img src="/assets/partners-cebiovet.png" alt="" className="aspect-video object-cover w-full h-full" />
                </div>

                <div className="shrink-0 mx-[.5rem] w-[189px] h-[57px] cursor-pointer" onClick={() => setPartner({
                    labsaude: false,
                    cebiovet: false,
                    smartiago: false,
                    linknovate: false,
                    dinamiza: true,
                    silverlogy: false
                })} >
                    <img src="/assets/partners-dinamiza.png" alt="" className="aspect-video object-cover w-full h-full" />
                </div>

                <div className="shrink-0 mx-[.5rem] w-[188px] h-[51px] cursor-pointer" onClick={() => setPartner({
                    labsaude: true,
                    cebiovet: false,
                    smartiago: false,
                    linknovate: false,
                    dinamiza: false,
                    silverlogy: false
                })} >
                    <img src="/assets/partners-laosaude.png" alt="" className="aspect-video object-cover w-full h-full" />
                </div>

                <div className="shrink-0 mx-[.5rem] w-[187px] h-[54px] cursor-pointer" onClick={() => setPartner({
                    labsaude: false,
                    cebiovet: false,
                    smartiago: false,
                    linknovate: true,
                    dinamiza: false,
                    silverlogy: false
                })} >
                    <img src="/assets/partners-linknovate.png" alt="" className="aspect-video object-cover w-full h-full" />
                </div>

                <div className="shrink-0 mx-[.5rem] w-[140px] h-[61px] cursor-pointer" onClick={() => setPartner({
                    labsaude: false,
                    cebiovet: false,
                    smartiago: true,
                    linknovate: false,
                    dinamiza: false,
                    silverlogy: false
                })} >
                    <img src="/assets/partners-smartiago.ai" alt="" className="aspect-video object-cover w-full h-full" />
                </div>

                <div className="shrink-0 mx-[.5rem] w-[187px] h-[54px] cursor-pointer" onClick={() => setPartner({
                    labsaude: false,
                    cebiovet: false,
                    smartiago: false,
                    linknovate: false,
                    dinamiza: false,
                    silverlogy: true
                })} >
                    <img src="/assets/Silverlogy_logo.png" alt="" className="aspect-video object-cover w-full h-full" />
                </div>

            </div>

            {/* CEBIOVET */}
            {
                partner.cebiovet &&
                <NetworkModal title="Cebiovet" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll lg:overflow-hidden" >
                    <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                        <p className="text-primary-violet">In collaboration with the University of Santiago de Compostela, Rof Codina is responsible for safeguarding and complying with the triple objective of teaching, service, and research. The main objective is to promote research, the development of Veterinary and Biomedical Sciences and specialized postgraduate teaching through the use of tools directly related to animal experimentation, meeting the highest standards in terms of facility design and complying with with all the requirements demanded within the animal welfare and protection law.
                        </p>
                        <p className="text-primary-violet">
                        info@cebiovet.com <br />
                        http://www.cebiovet.com/
                        </p>
                    </div>

                    <div className="w-[189px] h-[49px] mt-auto ml-auto mr-[2.5rem] col-span-2 lg:col-span-1" >
                        <img src="/assets/partners-cebiovet.png" alt="" className="w-full h-full" />
                    </div>
                </NetworkModal>
            }

            {/* LINKNOVATE */}
            {
                partner.linknovate &&
                <NetworkModal title="Linknovate" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll lg:overflow-hidden" >
                    <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                        <p className="text-primary-violet">
                        Linknovate brings AI to corporate innovation and facilitates internal team
                        communication around innovation scouting and monitoring. Through a data
                        analytics and competitive intelligence platform it helps clients identify emerging
                        technologies and advanced technologies.
                        </p>
                        <p className="text-primary-violet">
                            Manuel Noya Mariño <br />
                            CEO &amp; Cofounder <br />
                            info@linknovate.com <br />
                            www.linknovate.com
                        </p>
                    </div>

                    <div className="w-[187px] h-[54px] mt-auto ml-auto mr-[2.5rem] col-span-2 lg:col-span-1" >
                        <img src="/assets/partners-linknovate.png" alt="" className="w-full h-full" />
                    </div>
                </NetworkModal>
            }

            {/* SILVERLOGY */}
            {
                partner.silverlogy &&
                <NetworkModal title="Silverlogy" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll lg:overflow-hidden" >
                    <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                        <p className="text-primary-violet">
                        Silverlogy is a start-up founded by process engineers from different industrial
                        sectors, who have come together to develop integrated platform solutions to improve
                        the quality of life of our elders, with the help of technology.
                        </p>
                        <p className="text-primary-violet">
                            Alberto Cochón Peón <br />
                            Digital Transformation Management <br />
                            info@silverlogy.care <br />
                            606959454
                        </p>
                    </div>

                    <div className="w-[187px] h-[54px] mt-auto ml-auto mr-[2.5rem] col-span-2 lg:col-span-1" >
                        <img src="/assets/Silverlogy_logo.png" alt="" className="aspect-video object-cover w-full h-full" />
                    </div>
                </NetworkModal>
            }

            {/* LABSAUDE */}
            {
            partner.labsaude &&
                <NetworkModal title="Labsaude" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll lg:overflow-hidden" >
                    <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                        <p className="text-primary-violet">
                            Galician Health Living Labs Network (LABSAÚDE), started its journey through the Ourense Living Lab. LABSAÚDE emerges as a facilitating mechanism for the creation and implementation of innovative projects in an environment in which multiple agents interact, to respond to real needs detected in the Galician Health System.
                        </p>
                        <p className="text-primary-violet">
                            labsaude@sergas.es <br />
                            https://labsaude.sergas.gal/
                        </p>
                    </div>

                    <div className="w-[188px] h-[51px] mt-auto ml-auto mr-[2.5rem] col-span-2 lg:col-span-1" >
                        <img src="/assets/partners-laosaude.png" alt="" className="w-full h-full" />
                    </div>
            </NetworkModal> 
            }

            {/* SMARTIAGO */}
            {
                partner.smartiago &&
                <NetworkModal title="Smartiago" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll lg:overflow-hidden" >
                    <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                        <p className="text-primary-violet">
                            he Smartiago Living Lab is created for the design of new strategies to improve the environmental sustainability of urban mobility habits, it represents the central element around which the City Council of Santiago de Compostela intends to promote new ways of encouraging sustainable mobility between citizens in a personalized way, through a philosophy of public-private collaboration, which recognizes and respects the roles of all the agents involved.
                        </p>
                    </div>

                    <div className="w-[140px] h-[61px] mt-auto ml-auto mr-[2.5rem] col-span-2 lg:col-span-1" >
                        <img src="/assets/partners-smartiago.ai" alt="" className=" w-full h-full" />
                    </div>
                </NetworkModal>
            }

            {/* DINAMIZA */}
            {
                partner.dinamiza &&
                <NetworkModal title="Dinamiza" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll lg:overflow-hidden" >
                    <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">
                        <p className="text-primary-violet">
                            DInamiza collaborates in commercial, regulatory, quality validation, strategy design, execution and commercial deployment. Identification and efficient introduction of the commercial target through two main services:

                            Acceleration of commercial acces to the health market (Public, Private and Social Health)

                            Bring health providers closer to the vision and experience of the management teams and decision makers of the Health System, especially meso and macro managers, to collaborate with companies in adapting the commercial access strategy, value proposition and argument.

                            Deal Flow and Strategies for access to investment funds (pre Seed - Seed)
                        </p>
                    </div>
 
                    <div className="flex flex-col justify-between col-span-2 lg:col-span-1 gap-[2rem] lg:gap-0">
                        <p className="ml-auto mr-[2.5rem] mt-[2rem] text-primary-violet">
                            Mariano Barbero Martinez <br />
                            General Manager <br />
                            mariano.barbero@dinamiza.net <br />
                            www.dinamiza.net
                        </p>

                        <div className="w-[189px] h-[57px] mt-auto ml-auto mr-[2.5rem]" >
                            <img src="/assets/partners-dinamiza.png" alt="" className="w-full h-full" />
                        </div>
                    </div>
                </NetworkModal>
            }
        </div>
    )
}

export default Partners