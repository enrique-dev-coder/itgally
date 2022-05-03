import NetworkModal from "../atoms/NetworkModal"

const CruzRoja = () => {
    return (
        <NetworkModal title="Cruz Roja">
            <div className="flex flex-col col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <p>
                    Spanish Red Cross (CRE) is a voluntary humanitarian institution, strongly rooted in society, which aims to provide comprehensive responses to people in situations of vulnerability. Its main activities are linked to social and health protection services and programs: provision of socio-health services, care for the elderly, refugees and immigrants, people with disabilities, children and young people at risk or social conflict, prisoners , women at risk... At the same time, one of the entity's strategic lines is based on the need to focus on innovation. This aspect is essential to understand the technological needs of society, which is why technology plays a key role in the humanitarian action of the Red Cross.

                    We are therefore interested in being able to contribute the vision of CRE's experts and end users in the development (accessibility, usability, product sustainability...) of innovative solutions that can improve the Quality of Life of the people with whom we work. . In addition, CRE is a facilitator of these technological solutions for end-users and, therefore, it is relevant that its figure is in the process of testing said solutions, providing feedback based on person-centered innovation.

                    CRE in Galicia has various spaces equipped with the material resources that are consulted in this form. <span className="font-bold">Highlight the following spaces:</span>
                    <ul className="list-disc pl-[2rem] pt-[1rem]">
                        <li>Living Lab in the city of Coruña, located in 3 different spaces: Main building (an ICT room under construction), Training Center (https://fpcruzroja.com/), and office located on Ramón del Cueto street.</li>
                        <li>Living Lab in the city of Lugo, where various social innovation projects are developed (http://www.cruzroja.es/principal/gl/web/provincial-lugo/campo-castillo-lugo-casa-cruz-roja- teleassistance-advanced).</li>
                        <li>
                            Living Lab of the Center for Acquired Brain Injury in Castro Riberas de Lea (Lugo) where therapies with robotic rehabilitation technology are worked (http://www.cruzroja.es/principal/gl/web/provincial-lugo/centro-dano -cerebral-treatment-stroke-lugo).
                        </li>
                        <li>
                            Living Lab in homes of different types of users: CRE has tested technological solutions in real homes (calling them real-life trials with more than 500 users).
                        </li>
                    </ul>
                </p>

                <div className="w-[152px] h-[84px]" >
                    <img src="/assets/logo-cruz.png" alt="" className="w-full h-full" />
                </div>

                <p>

                    Rocio Martinez Fernandez <br />
                    LL Manager <br />
                    rocio.martinez@cruzroja.es <br />
                    <br />
                    Oscar Fafian Varela <br />
                    Responsable de Innovación <br />
                    osfava@cruzroja.es <br />
                    www.cruzvermella.org <br />
                </p>
            </div>

            <div className="h-[200px] w-[200px] bg-slate-500 col-span-1 m-auto"></div>
        </NetworkModal>
    )
}

export default CruzRoja