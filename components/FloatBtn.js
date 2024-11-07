import { useState } from "react";
import { motion } from "framer-motion";
import { FaLifeRing } from "react-icons/fa";
import Image from "next/image";

export default function FloatingHelpButton() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div
                className="fixed bottom-8 right-24 flex flex-col items-center"
                style={{ zIndex: 24 }}
            >
                <motion.button
                    onClick={() => openModal()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#008f00] text-white p-4 rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-[#008f00] transition-transform duration-300"
                >
                    <FaLifeRing size={24} />
                </motion.button>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 space-y-6">
                        <div className="flex justify-between items-center border-b pb-3">
                            <h3 className="text-xl font-semibold text-gray-900">Contactez-nous</h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                                ✕
                            </button>
                        </div>
                        <form className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Nom</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008f00] focus:border-[#008f00] transition"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008f00] focus:border-[#008f00] transition"
                                    placeholder="Votre email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008f00] focus:border-[#008f00] transition"
                                    rows="4"
                                    placeholder="Votre message"
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-[#008f00] text-white rounded-lg hover:bg-[#006f00] transition"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center justify-center mt-6 space-x-3">
                            <button
                                onClick={() => window.open("https://wa.me/votre_numero_ici", "_blank")}
                                className="flex items-center px-4 py-3 bg-[#1E1E1E] text-white rounded-lg hover:bg-[#333] transition"
                            >
                                <Image
                                    src="/images/whatsapp.png"
                                    alt="WhatsApp"
                                    width={24}
                                    height={24}
                                    className="mr-3"
                                />
                                <span>Contactez-nous via WhatsApp</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
