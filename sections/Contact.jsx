import Link from 'next/link'
import { useReducer } from 'react'
import { Link as Scroll } from "react-scroll"
import GallInfo from "../components/GallInfo"
import Logo from "../components/atoms/Logo"
import FadeInElement from "../components/FadeInElement"

const types = {
    avisos: 'avisos',
    cookies: 'cookies',
    close: 'close'
}

const initialState = {
    avisos: false,
    cookies: false,
    close: false
}

const reducer = (state, action) => {
    switch (action.type) {

        case types.avisos:
            return {cookies: false, avisos: true, close: false}

        case types.cookies:
            return {avisos: false, cookies: true, close: false}

        case types.close:
            return {avisos: false, cookies: false, close: true}

        default:
            return state
    }
}

const Contact = ({h3Styles, pStyles, aStyles}) => {

    const [politics, politicsDispatch] = useReducer(reducer, initialState)

    const {avisos, cookies} = politics

    return (
        <FadeInElement>
            <footer className="flex flex-col lg:flex-wrap lg:flex-row p-[8%] sm:p-12 border-t-[1px] border-[#63257E] lg:border-t-0 xl:p-[4rem] 2xl:container 2xl:mx-auto" id="contact">
                <div className="footer-nav hidden lg:flex w-full border-b-[1px] border-[#63257E] border-primary-violet mb-12 lg:mb-[2rem]">
                    <ul className="flex gap-6 ml-auto">
                        <li>
                            <Scroll to="network" smooth={true} duration={1000} className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                                Our Network
                            </Scroll>
                        </li>
                        <li>
                            <Link href="events"  className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                                <a className="text-primary-violet hover:text-[#8C1D82]">New &amp; Events</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href="/projects" className="text-primary-violet cursor-pointer hover:text-[#8C1D82]">
                                <a className="text-primary-violet hover:text-[#8C1D82]">Project</a>
                            </Link>
                        </li>
                    </ul>

                    <Link href="/contact">
                        <a className="bg-[#8C1D82] text-[#FFF8FE] ml-auto border px-[1.2rem] py-[0.3rem] md:py-2 md:px-7 hover:opacity-75">Contact us</a>
                    </Link>

                </div>

                <div className="flex justify-between lg:mt-[1rem] lg:mr-[2rem]">
                    <Logo logoClass="w-[100px] h-[40px] xl:w-[150px] xl:h-[50px]" />
                </div>

                <div className="flex flex-col md:justify-between lg:flex-row lg:mt-[1rem] lg:flex-1 lg:justify-around mb-8">

                    <div className="mt-[2.5rem] mb-[3rem] lg:mb-[1rem] lg:mt-0 lg:mr-[2rem] xl:mr-0">
                        <h3 className={h3Styles}>ITGALL OFFICE</h3>
                        <p className={pStyles}>Despacho 12 - Edificio FEUGA <br /> Rúa de Lope Gómez de Marzoa <br /> 15706 Santiago de Compostela, A Coruña <br /> Galicia, Spain</p>
                    </div>

                    <GallInfo title="Social Media" url1="/assets/Vector (3).png" text1="Linkedin" url2="/assets/Vector (2).png" text2="Twitter" aStyles={aStyles} />

                    <GallInfo title="Contact us" url1="/assets/Vector (1).png" text1="+34-602247149" url2="/assets/email.png" text2="ask@itgall.org / communication@itgall.org" aStyles={aStyles} />
                </div>

                <div className="flex flex-col lg:flex-row w-full border-t border-t-[#FFD000] pt-8 text-[#8C1D82] gap-14 mb-8">
                    
                    <p  className={`hover:opacity-75 cursor-default ${cookies && 'opacity-75'}`}
                        onClick={() => politicsDispatch({
                            type: types.cookies
                        })}>
                    Privacy and cookie policies
                    </p>

                    <p  className={`hover:opacity-75 cursor-default ${avisos && 'opacity-75'}`}
                        onClick={() => 
                            politicsDispatch({
                                type: types.avisos
                            })}>
                    Legal notices
                    </p>

                </div>

                {
                    avisos &&
                    <div className="flex flex-col gap-4 w-full justify-center p-[4%] border rounded-md text-[#8C1D82]">
                        
                        <button className="text-[#8C1D82] font-bold text-[1.5rem] ml-auto" onClick={() => politicsDispatch({
                            type: types.close
                        })}>
                            X
                        </button>
                        
                        <h2 className='font-bold'>Industrial and intellectual property</h2>
                        <p>All content, text, photographs, graphics, images, icons, technology, software, links and other audiovisual and/or sound content, as well as its graphic design and source codes, are the intellectual property of the owner of the website or third parties. without it being understood that any exploitation right recognized by current legislation has been transferred to the user.</p>

                        <p>The trademarks, trade names and distinctive signs are the property of ITGALL or third parties, without it being understood that access to the web page of which this legal notice is the subject attributes any right over them.</p>

                        <p className='mb-4'>Those users who make comments on the blog or social networks assign their intellectual property rights free of charge, and are subject to the conditions expressed in the "content provided by users" section.</p>

                        <h2 className='font-bold'>Responsibilities</h2>
                        <p className='mb-4'>The owner of the website will not be responsible, in any case, for damages of any kind derived, directly or indirectly, from the failure to read this notice, or from the breach of the obligations specified in the conditions. Likewise, the owner of the web page excludes any responsibility for damages of any nature that, outside its effective control, may be due to the transcription, dissemination, storage, availability, reception, obtaining or access to the web page. or its contents.</p>

                        <h2 className='font-bold'>Regulations and Jurisdiction</h2>
                        <p className='mb-4'>These Conditions of Use of the Website are governed in each and every one of its extremes by Spanish law. This legal notice will not be filed individually for each user but will remain accessible through the Internet on this same website.</p>
                    </div>
                }

                {
                    cookies &&
                    <div className="flex flex-col gap-4 w-full justify-center p-[4%] border rounded-md text-[#8C1D82]">
                        <button className="text-[#8C1D82] font-bold text-[1.5rem] ml-auto" onClick={() => politicsDispatch({
                            type: types.close
                        })}>
                            X
                        </button>
                       <h2 className='font-bold'>Website Owner</h2>
                       <h2 className='font-bold'>Company name: <span className='font-normal'>ASOC CLUSTER SAUDE DE GALICIA CSG</span></h2>
                       <h2 className='font-bold'>CIF: <span className="font-normal">G70308143</span></h2>
                       <h2 className='font-bold'>Registered office: <span className="font-normal">Avda. Fernando de Casas Novoa, 37, Portal A-B, 1ª | 15707 Santiago de Compostela</span></h2>
                       <h2 className='font-bold'>Commercial name: <span className='font-normal'>ITGALL</span></h2>
                       {/* <h2 className='font-bold'>Contact information:</h2> */}
                       <h2 className='font-bold'>Contact telephone numbers: <span className='font-normal'>602 247 149</span></h2>
                       <h2 className='font-bold'>Email address: <span className='font-normal'>info@clustersaude.com</span></h2>
                       <h2 className='font-bold'>Online contact form: <a href="https://clustersaude.com/contacto/" className='underline text-blue-600 font-normal'>https://clustersaude.com/contacto/</a></h2>
                       <h2 className='font-bold'>Social media profiles:</h2>
                       <p>Twitter: <a href="https://twitter.com/ClusterSaude" className='underline text-blue-600 font-normal'>https://twitter.com/ClusterSaude</a></p>
                       <p className='mb-4'>LinkedIn: <a href=" https://www.linkedin.com/in/cluster-saúde-de-galicia-a288a9121/" className='underline text-blue-600 font-normal'>https://www.linkedin.com/in/cluster-saúde-de-galicia-a288a9121/</a></p>
                       <h2 className='font-bold'>Terms of use</h2>

                       <p>The purpose of this website is to provide users and/or potential clients or clients with information regarding the activities of ITGALL and the services it offers, as well as providing information that may be of interest.</p>
                       <p>With this web page ITGALL intends to provide a useful service, for which the suggestions of its users are welcome. But if you do not agree with any of the conditions contained in this notice, you must stop using the website. Access to it implies acceptance of them without reservation.</p>
                       <p className='mb-4'>Certain services provided through the website may contain particular conditions with specific provisions regarding the protection of personal data. It is essential to read and accept it prior to requesting the service in question.</p>
                       <h2 className="font-bold">I Access</h2>
                       <p className='mb-4'>Access is public, although there are certain parts of the website whose access is reserved for customers, through a user ID and password. Non-client users can visit the public sections of the page, never having to try to access the restricted access sections, unless it has been authorized by assigning a user ID and a password.</p>
                       <h2 className="font-bold">II Modification of the page and interruptions or errors in access</h2>
                       <p className='mb-4'>ITGALL reserves the right to make, at any time and without the need for prior notice, modifications and updates to the information contained on the website, its configuration and presentation, and the access conditions.</p>
                       <h2 className="font-bold">III Contents and linked pages</h2>
                       <p>The information contained on this website is merely informative, and in no case constitutes advice of any kind. The policy of ITGALL is to try to ensure that the contents are always up to date, but it may happen that they are not.</p>
                       <p>The Website contains texts prepared for merely informative or informative purposes that may not reflect the current state and that refer to general situations, so its content can never be applied by the user to specific cases. The opinions expressed in them do not necessarily reflect the points of view of the owner of the website. The user must not act on the basis of the information contained in this Website without previously resorting to the corresponding consultation with the staff of ITGALL.</p>
                       <p>Users undertake to make appropriate use of the content and services that the owner of the website offers.</p>
                       <p>The external links contained in this Website lead to sites managed by third parties. The owner of the website is not responsible for the content or the status of these sites. The use of external links does not imply that ITGALL recommends or approves the contents of the destination pages.</p>
                       <p>The function of the links that appear on this page is exclusively to inform users and customers about the existence of other sources of information on the subject on the Internet, where they can expand or complete the data offered on this page. ITGALL will under no circumstances be responsible for the results obtained through said links.</p>
                       <p>In any case, ITGALL does not assume responsibility derived from the contents linked from its web page, nor can it guarantee the absence of viruses, or other elements in them that may cause alterations in the computer system (hardware and software), in the documents or the files, or the data, of the user, excluding any responsibility for damages of any kind caused to the user for this reason.</p>
                       <p>Although the links are regularly supervised so that it does not happen, in the event that any user or a third party considers that the content or services provided by the linked pages are illegal, violate values ​​or constitutional principles, or damage property or rights of the user. user or a third party, please contact immediately</p>
                       <p>ITGALL said circumstance, and especially if the links consist of:</p>
                       <ul className='mb-4'>
                        <li>Activities or content likely to be considered criminal in accordance with applicable regulations</li>
                        <li>Activities or content that violate intellectual or industrial property rights</li>
                        <li>Activities or content that endanger public order, criminal investigation, public security.</li>
                       </ul>
                       <h2 className="font-bold">IV Protection of personal data</h2>
                       <h2 className="font-bold">Introduction</h2>
                       <p>The personal data linked to this website respect the requirements of the General Data Protection Regulation and current legislation and regulations regarding the protection of personal data.</p>
                       <p className='mb-4'>ITGALL, owner of the website, will process the personal data that is collected through this website in compliance with the regulations of the General Data Protection Regulation and the current Spanish regulations on the protection of personal data, thus, the remission of data by the interested parties is absolutely voluntary and is duly announced.</p>
                       <h2 className="font-bold">Purposes</h2>
                       <p className='mb-4'>In particular, the data that is provided through the web will be treated for the management of the contact or the query made, and, where appropriate, if a request or order occurs, the management of the same, administrative, accounting and fiscal, as well as the history file.</p>
                       <h2 className="font-bold">Legitimation of the treatment</h2>
                       <p className='mb-4'>The legitimacy of the processing of your data is a consequence of the consent you provide by sending the contact form or the query. If there is a request or assignment, the legitimacy will be the relationship derived from it, which may become contractual and the fulfillment of the professional and legal obligations derived from it. There is also legitimacy through the interest of the owner of the website or the user.</p>
                       <h2 className="font-bold">data communications</h2>
                       <p className='mb-4'>The data derived from the contact and the consultation will not be communicated to third parties, except for express authorization or legal obligation.</p>
                       <h2 className="font-bold">Rights of the interested parties</h2>
                       <p>Anyone has the right to obtain confirmation as to whether or not we are treating their personal data. Interested persons have the right to access their personal data, update it, rectify inaccurate data or request its deletion when the data is no longer necessary at any time.</p>
                       <p>In certain circumstances provided for in article 18 RGPD, the interested parties may request the limitation of the processing of their data, in which case we will only keep them for the exercise or defense of claims, they may also, for reasons related to their particular situation, oppose the treatment of your data. Interested parties have the right to object to profiling. If the requirements of article 20 RGPD are met, they have the right to request the portability of their data.</p>
                       <p>They also have the right, at any time, to revoke the consent given.</p>
                       <p className='mb-4'>As a consequence of the application of the right to suppression or opposition to the processing of personal data in the online environment, the interested parties have the right to be forgotten according to the jurisprudence that the Court of Justice of the EU determines.</p>
                       <h2 className="font-bold">Exercise of Data Protection Rights</h2>
                       <p>Users can exercise their rights by postal writing addressed to the physical address outlined above of ASOC CLUSTER SAUDE DE GALICIA CSG, through the email also provided. If you consider that your rights have not been duly addressed, you have the right to file a claim with the Spanish Data Protection Agency, with contact details:</p>
                       <ul className='mb-4'>
                        <li>Postal address: C/Jorge Juan, 6, 28.001-Madrid</li>
                        <li>Website: <a href="" className='underline text-blue-600'>www.agpd.es</a></li>
                        <li>Telephone: 901 100 099</li>
                        <li>Electronic headquarters: <a href="https://sedeagpd.gob.es/sede-electronica-web/" className='underline text-blue-600'>https://sedeagpd.gob.es/sede-electronica-web/</a></li>
                        <li>Ways through which personal data is collected. Treatment purposes contact forms</li>
                        <li>The personal data collected will be subject to automated processing and incorporated into the corresponding files owned by ITGALL.</li>
                       </ul>
                       <h2 className="font-bold">Data collected by the web server</h2>
                       <ul>
                        <li>Browser Version</li>
                        <li>Operating System Version</li>
                        <li>IP address</li>
                        <li>User interface</li>
                        <li>Browser language</li>
                        <li>The personal data collected by the web server will be subject to automated processing and incorporated into the corresponding files owned by ITGALL.</li>
                       </ul>
                       <h2 className="font-bold">Traditional media</h2>
                       <p>Likewise, you can provide us with your data by telephone, email and other means of communication indicated in the contact section.</p>
                       <p>The purpose of processing this data will be solely to provide you with the information or services you request.</p>
                       <p className='mb-4'>Certain services provided through the website may contain particular conditions with specific provisions regarding the protection of personal data. It is essential to read and accept it prior to requesting the service in question.</p>
                       <h2 className="font-bold">Social networks</h2>
                       <p>We have a profile on the main social networks on the Internet, recognizing ourselves in all cases as responsible for processing the data of our followers, fans, subscribers, commenters and other user profiles (hereinafter, followers). The treatment that the entity will carry out with said data will be, at most, that which the social network allows for corporate profiles. Thus, we will be able to inform the followers by any means that the social network allows about our activities.</p>
                       <p className='mb-4'>In no case will we extract data from social networks, unless the user's consent is expressly and expressly obtained for it. When, due to the very nature of social networks, the effective exercise of the rights of the follower is subject to the modification of his personal profile, we promise to help and advise him to that end to the best of his ability.</p>
                       <h2 className="font-bold">User Contributed Content</h2>
                       <p>In social networks, forms, blogs and similar instruments, users can make comments.</p>
                       <p>All information and comments received will be considered freely given. The user must not send information that cannot be treated in this way.</p>
                       <p>The public sending of personal information, much less that of third parties, is also not recommended, and the incorporation of sensitive data or data that violates any type of personal right is expressly prohibited.</p>
                       <p>The owner of the website reserves the right to publish the comments that are sent and withdraw all those comments and contributions that are not related to the content of the entry in which the comment is made, violate intellectual property, respect for the dignity of the person, the right to honor, one's own image or privacy, the right to protection of personal data, that are discriminatory, xenophobic, racist, pornographic, that threaten youth or childhood, order or public safety or that, in their opinion, are illegal or simply not suitable for publication. In any case, the owner of the website is not responsible for the opinions expressed by users through the participation tools, nor for the contents.</p>
                       <p>Those comments or content not published or withdrawn will be destroyed.</p>
                       <p>Whoever sends a comment is responsible for providing lawful content and is responsible for the possible responsibilities that may arise for any reason, including possible compensation. By way of example but not limited to not using them to: engage in illicit activities or activities contrary to good faith and public order, disseminate content or propaganda of a racist, xenophobic, pornographic nature, advocating terrorism or attacking human rights; that may cause damage to the physical and logical systems of the entity, its suppliers or third parties, introduce or spread computer viruses or any other physical or logical systems that are likely to cause the aforementioned damage; attempt to access and modify or manipulate the messages of other users; violation of the right to data protection.</p>
                       <p className='mb-4'>If the user includes personal data, they must comply with data protection regulations. Regarding yours, you can exercise the rights set forth in the previous section.</p>
                       <h2 className="font-bold">Obligation of Secrecy and Confidentiality</h2>
                       <p className='mb-4'>The staff and volunteers of ITGALL who have any kind of intervention in the actions provided to users, are committed not to disclose or make use of the information they have accessed by reason of their position. The information provided by the user will, in any case, be considered confidential, and may not be used for purposes other than those related to the owner of the website. We are committed to complying with the obligation of secrecy of personal data and the duty to keep them confidential and we will adopt the necessary measures to prevent their alteration, loss, treatment or unauthorized access, taking into account at all times the status of the technology.</p>
                    </div>
                }
            </footer>
        </FadeInElement>
        
    )
}

export default Contact