import { APP_NAME, ADDRESS, EMAIL, PHONE, CANONICAL } from "@/data/config"

export default function MentionsLegales() {
    return (
        <>
            <div class="pages-banner no-bottom">
                <div class="base-container w-container">
                    <div class="blog-template-wrapper">
                        <h1 data-w-id="2a26db79-f630-db49-7e9c-1a45a078a1ab" style={{ opacity: 0 }} class="details-page-title">
                            Mentions Légales
                        </h1>
                        <div data-w-id="68f1895b-a4e0-f017-2556-1180c0462d6e" className="blog-date-wrapper flex justify-center items-center text-gray-600 mt-2" style={{ opacity: 0 }}>
                            <div className="autor-wrapper">
                                <p className="no-margin">
                                    Mis à jour le
                                </p>
                            </div>
                            <p className="no-margin mx-1">/</p>
                            <p className="blog-template-date">
                                05 Juin 2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section without-top-spacing">
                <div class="base-container w-container">
                    <div class="blog-template-wrapper">
                        <div data-w-id="37eacfc3-4901-0bb2-6829-3bab99e77585" style={{ opacity: 0 }} class="rich-text-style w-richtext">
                            <h2 className="text-2xl font-semibold mb-4">
                                <strong>Informations Générales</strong>
                            </h2>
                            <p>
                                {APP_NAME} est une entreprise spécialisée dans la dépollution automobile, offrant des services complets de centre de dépollution, d'atelier et de garage mécanique, ainsi que la vente et le rachat de véhicules neufs et d'occasion.<br /><br />

                                <ul className="list-disc ml-5">
                                    <li>Raison sociale: <strong className="text-green-600">{APP_NAME}</strong></li>
                                    <li>Statut juridique: <strong>Entreprise, auto-entrepreneuriat</strong></li>
                                    <li>Adresse du siège social: <strong>{ADDRESS}</strong></li>
                                    <li>Adresse e-mail: <strong>{EMAIL}</strong></li>
                                    <li>Numéro de téléphone: <strong>{PHONE}</strong></li>
                                    <li>Responsable de direction: <strong>{APP_NAME}</strong></li>
                                    <li>Hébergé par: <strong>Vercel</strong></li>
                                </ul>
                            </p>
                        </div>
                        <div data-w-id="37eacfc3-4901-0bb2-6829-3bab99e77585" style={{ opacity: 0 }} class="rich-text-style w-richtext">
                            <h2 className="text-2xl font-semibold mb-4">
                                <strong>Propriété du site :</strong>
                            </h2>
                            <p>
                                Le site internet "<strong>{APP_NAME}</strong>" (<a href={CANONICAL} target="_blank" className="text-blue-600">{CANONICAL}</a>) est la propriété exclusive de la société Castel Pièces Auto.
                                L'ensemble du contenu présent sur le site (textes, images, logos, vidéos, graphismes, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle et le droit d'auteur. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l'accord préalable écrit de Castel Pièces Auto.
                            </p>
                        </div>
                        <br/>
                        <div data-w-id="37eacfc3-4901-0bb2-6829-3bab99e77585" style={{ opacity: 0 }} class="rich-text-style w-richtext">
                            <h2 className="text-2xl font-semibold mb-4">
                                <strong>Politique des Cookies :</strong>
                            </h2>
                            <p>
                                Nous utilisons des cookies pour améliorer l'expérience utilisateur sur notre site. Les cookies sont des petits fichiers textes stockés sur votre appareil qui nous aident à analyser les comportements de navigation et à personnaliser le contenu. Vous pouvez désactiver les cookies via les paramètres de votre navigateur, mais cela peut affecter le fonctionnement de certaines parties du site.
                            </p>
                        </div>
                        <br/>
                        <div data-w-id="37eacfc3-4901-0bb2-6829-3bab99e77585" style={{ opacity: 0 }} class="rich-text-style w-richtext">
                            <h2 className="text-2xl font-semibold mb-4">
                                <strong>Droits Applicables :</strong>
                            </h2>
                            <p>
                                Ce site web est soumis au droit français. Tout litige découlant de l'utilisation de ce site ou lié de quelque manière que ce soit à son contenu ou à son utilisation sera régi par les lois de la France.<br/><br/>
                                En cas de litige, les tribunaux français seront compétents pour résoudre tout différend. Plus précisément, la juridiction compétente pour tout litige sera le tribunal de commerce de Paris, conformément à la législation en vigueur.<br/><br/>
                                Nous encourageons toutes les parties à chercher d'abord une solution amiable en cas de litige. Si une telle solution n'est pas possible, les tribunaux français auront compétence pour trancher le litige conformément à la loi applicable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}