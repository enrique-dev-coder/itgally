import NetworkModal from "../atoms/NetworkModal"

const CruzRoja = () => {
    return (
        <NetworkModal title="Cruz Roja" modalClass="w-full border pb-[3rem] h-[450px] overflow-scroll overflow-x-hidden">
            <div className="flex flex-col col-span-2 lg:col-span-1 mt-[2rem] gap-[2rem] px-[2.5rem]">

                <p className="text-primary-violet">
                    Spanish Red Cross (CRE) is a voluntary humanitarian institution, strongly rooted in society, which aims to provide comprehensive responses to people in situations of
                    vulnerability. Its main activities are linked to social and health protection services and
                    programs: provision of socio-health services, care for the elderly, refugees and
                    immigrants, people with disabilities, children and young people at risk or social conflict,
                    prisoners, women at risk, etc. At the same time, one of the entity&#39;s strategic lines is
                    based on the need to focus on innovation. This aspect is essential to understand the
                    technological needs of society, which is why technology plays a key role in the
                    humanitarian action of the Red Cross. <br />
                    We are therefore interested in being able to contribute the vision of CRE experts and
                    end users in the development (accessibility, usability, product sustainability...) of
                    innovative solutions that can improve the Quality of Life of the people with whom we
                    work. In addition, CRE is a facilitator of these technological solutions for end users and,
                    therefore, it is relevant that its figure is in the process of testing said solutions, providing
                    feedback based on person-centered innovation. <br />
                    CRE in Galicia has various Living Lab spaces from which we would highlight the following
                    spaces:
                    <ul className="list-disc pl-[2rem] pt-[1rem]">
                        <li className="text-primary-violet">Living Lab in the city of Coruña, located in 3 different spaces: Main building (an ICT room under construction), Training Center ( <a href="https://fpcruzroja.com/), and the Innovation Unit Office" className='underline text-blue-600 font-normal'>https://fpcruzroja.com/), and the Innovation Unit Office</a>.</li>
                        <li className="text-primary-violet">Living Lab in homes of different types of users: CRE has tested technological solutions in real homes (calling them real-life trials with more than 500 users).</li>
                        <li className="text-primary-violet">Living Lab in the city of Lugo, where various social innovation projects are developed (<a href="http://www.cruzroja.es/principal/gl/web/provincial-lugo/campocastillo-lugo-casa-cruz-roja-teleasistencia-avanzada" className='underline text-blue-600 font-normal'>http://www.cruzroja.es/principal/gl/web/provincial-lugo/campocastillo-lugo-casa-cruz-roja-teleasistencia-avanzada</a>).
                        </li>
                        <li className="text-primary-violet">Assistance Unit for people with drug addictions, in Lugo (<a href="http://www.cruzroja.es/principal/gl/web/provincial-lugo/drogodependencialugo" className='underline text-blue-600 font-normal'>http://www.cruzroja.es/principal/gl/web/provincial-lugo/drogodependencialugo</a>).
                        </li>
                        <li className="text-primary-violet">Living Lab of the Center for Acquired Brain Injury in Castro Riberas de Lea (Lugo) where therapies with robotic rehabilitation technology are worked (<a href="http://www.cruzroja.es/principal/gl/web/provincial-lugo/centro-danocerebral-tratamiento-ictus-lugo" className='underline text-blue-600 font-normal'>http://www.cruzroja.es/principal/gl/web/provincial-lugo/centro-danocerebral-tratamiento-ictus-lugo</a>).
                        </li>
                        <li className="text-primary-violet">Residence for people with intellectual disabilities and mental illness in Castro Riberas de Lea (Lugo).
                        </li>
                    </ul>
                </p>

                <div className="hidden lg:block w-[132px] h-[74px]" >
                    <img src="/assets/logo-cruz.png" alt="" className="w-full h-full" />
                </div>

                <p className="hidden lg:block text-primary-violet">
                    Pedro Giménez (pgimenezd@cruzroja.es; 981221000 ext. 38165), Manager of CSR. <br />
                    Trini de Lorenzo (delorenzo@cruzroja.es; 981221000 ext. 38504), Social innovation project manager. <br />
                </p>
            </div>

            <video src="https://res.cloudinary.com/datsipxkz/video/upload/v1651767245/itgall/Cruz_Roja_beokqz.mp4" className=" w-4/5 shadow-2xl col-span-2 lg:col-span-1 mt-[2rem] mx-auto" controls autoPlay></video>

            <div className="block lg:hidden col-span-2 ml-[2.5rem] w-[132px] h-[74px]" >
                <img src="/assets/logo-cruz.png" alt="" className="w-full h-full" />
            </div>

            <p className="block lg:hidden col-span-2 text-primary-violet px-[2.5rem]">
                Pedro Giménez (pgimenezd@cruzroja.es; 981221000 ext. 38165), Manager of CSR. <br />
                Trini de Lorenzo (delorenzo@cruzroja.es; 981221000 ext. 38504), Social innovation project manager. <br /> <br />
            </p>
        </NetworkModal>
    )
}

export default CruzRoja