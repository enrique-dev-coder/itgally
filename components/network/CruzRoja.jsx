import NetworkModal from "../atoms/NetworkModal"

const CruzRoja = () => {
    return (
        <NetworkModal title="Cruz Roja" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll overflow-x-hidden">
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <p className="text-primary-violet">
                    Spanish Red Cross (CRE) is a voluntary humanitarian institution, strongly rooted in society, which aims to provide comprehensive responses to people in situations of vulnerability. Its main activities are linked to social and health protection services and programs: provision of socio-health services, care for the elderly, refugees and immigrants, people with disabilities, children and young people at risk or social conflict, prisoners , women at risk... At the same time, one of the entity's strategic lines is based on the need to focus on innovation. This aspect is essential to understand the technological needs of society, which is why technology plays a key role in the humanitarian action of the Red Cross.

                    We are therefore interested in being able to contribute the vision of CRE's experts and end users in the development (accessibility, usability, product sustainability...) of innovative solutions that can improve the Quality of Life of the people with whom we work. . In addition, CRE is a facilitator of these technological solutions for end-users and, therefore, it is relevant that its figure is in the process of testing said solutions, providing feedback based on person-centered innovation.

                    CRE in Galicia has various spaces equipped with the material resources that are consulted in this form. <span className="font-bold text-primary-violet">Highlight the following spaces:</span>
                    <ul className="list-disc pl-[2rem] pt-[1rem]">
                        <li className="text-primary-violet">Living Lab in the city of Coruña, located in 3 different spaces: Main building (an ICT room under construction), Training Center (https://fpcruzroja.com/), and office located on Ramón del Cueto street.</li>
                        <li className="text-primary-violet">Living Lab in the city of Lugo, where various social innovation projects are developed (http://www.cruzroja.es/principal/gl/web/provincial-lugo/campo-castillo-lugo-casa-cruz-roja- teleassistance-advanced).</li>
                        <li className="text-primary-violet">
                            Living Lab of the Center for Acquired Brain Injury in Castro Riberas de Lea (Lugo) where therapies with robotic rehabilitation technology are worked (http://www.cruzroja.es/principal/gl/web/provincial-lugo/centro-dano -cerebral-treatment-stroke-lugo).
                        </li>
                        <li className="text-primary-violet">
                            Living Lab in homes of different types of users: CRE has tested technological solutions in real homes (calling them real-life trials with more than 500 users).
                        </li>
                    </ul>
                </p>

                <div className="hidden lg:block w-[152px] h-[84px]" >
                    <img src="/assets/logo-cruz.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">

                    Trini de Lorenzo <br />
                    Oficina Autonómica- Unidade de Innovación <br />
                    34 981 221 000 (ext. 38504) – 678 563 241<br />
                    delorenzo@cruzroja.es <br />
                    Galicia. Cruz Roja Española, 1. 15002 A Coruña. <br />
                    <br />
                    Oscar Fafian Varela <br />
                    Responsable de Innovación <br />
                    osfava@cruzroja.es <br />
                    <a href="https://www.cruzvermella.org" target="_blank" rel="noopener noreferrer">www.cruzvermella.org</a> <br />
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1651767245/itgall/Cruz_Roja_beokqz.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 mt-[2rem]" controls autoPlay></video>

            <div className="block lg:hidden col-span-2 ml-[2.5rem] w-[152px] h-[84px]" >
                <img src="/assets/logo-cruz.png" alt="" className="w-full h-full" />
            </div>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">

                Oficina Autonómica- Unidade de Innovación <br />
                34 981 221 000 (ext. 38504) – 678 563 241<br />
                delorenzo@cruzroja.es <br />
                Galicia. Cruz Roja Española, 1. 15002 A Coruña. <br />
                <br />
                Oscar Fafian Varela <br />
                Responsable de Innovación <br />
                osfava@cruzroja.es <br />
                <a href="https://www.cruzvermella.org" target="_blank" rel="noopener noreferrer">www.cruzvermella.org</a> <br />
            </p>
        </NetworkModal>
    )
}

export default CruzRoja