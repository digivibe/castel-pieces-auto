import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FaQuestion, FaPen, FaWhatsapp } from "react-icons/fa"

export default function FloatingHelpButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    return (
        <>
            <div
                className="fixed bottom-8 right-24 flex flex-col items-center"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <AnimatePresence>
                    {isOpen && (
                        <div className="absolute bottom-24 flex flex-col items-center space-y-2 w-48">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md backdrop-blur-sm bg-opacity-90 border border-gray-200 hover:bg-gray-50 transition-colors duration-200 w-full text-center flex items-center space-x-2"
                                >
                                <Link
                                    href="https://lien1.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#008f00] text-sm font-medium flex items-center justify-center w-full"
                                >
                                    <FaWhatsapp size={32} className="mr-1" />
                                    Intégrer WhatsApp
                                </Link>
                            </motion.div>
                        
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="bg-white text-gray-800 px-4 py-2 rounded-md shadow-md backdrop-blur-sm bg-opacity-90 border border-gray-200 hover:bg-gray-50 transition-colors duration-200 w-full text-center flex items-center space-x-2"
                                >
                                <button
                                    onClick={openModal}
                                    className="text-[#008f00] text-sm font-medium flex items-center justify-center w-full focus:outline-none"
                                >
                                    <FaPen size={32} className="mr-1" />
                                    Remplir le formulaire
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#008f00] text-white p-4 rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-[#008f00] transition-transform duration-300"
                >
                    <FaQuestion size={24} />
                </motion.button>
            </div>

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