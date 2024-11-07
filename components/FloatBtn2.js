import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FaLifeRing, FaPen, FaWhatsapp } from "react-icons/fa"

export default function FloatingHelpButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <>
            <motion.div
                onClick={() => setIsOpen(!isOpen)}
                style={{ zIndex: 24 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 bg-[#008f00] text-white p-4 rounded-full shadow-lg cursor-pointer focus:outline-none"
            >
                <FaLifeRing size={24} />
            </motion.div>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-8 w-64 bg-white rounded-l-3xl shadow-lg p-6 border border-gray-200 z-50"
                    >
                        <div className="flex flex-col space-y-4">
                            {/* Titre du panneau */}
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Assistance</h3>

                            {/* Option WhatsApp */}
                            <Link
                                href="https://lien1.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-gray-700 hover:text-[#008f00] transition duration-200"
                            >
                                <FaWhatsapp className="text-[#008f00]" size={20} />
                                <span className="text-sm font-medium">Intégrer le groupe WhatsApp</span>
                            </Link>

                            {/* Option Formulaire */}
                            <Link
                                href="/contactez-nous"
                                className="flex items-center space-x-3 text-gray-700 hover:text-[#008f00] transition duration-200 focus:outline-none"
                            >
                                <FaPen className="text-[#008f00]" size={20} />
                                <span className="text-sm font-medium">Remplir le formulaire</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal du formulaire */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
                        <div className="flex justify-between items-center border-b pb-2">
                            <h3 className="text-xl font-semibold text-gray-900">Formulaire</h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                                ✕
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Nom</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008f00]"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008f00]"
                                    placeholder="Votre email"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008f00]"
                                    rows="3"
                                    placeholder="Votre message"
                                ></textarea>
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#008f00] text-white rounded-md hover:bg-[#006f00] transition"
                                >
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}