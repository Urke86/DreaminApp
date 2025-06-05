import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    tier: string;
    price: string;
  };
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all required fields are filled
    const requiredFields = ['companyName', 'businessType', 'fullName', 'phone', 'email'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (emptyFields.length > 0) {
      const message = language === 'en' 
        ? 'Please fill in all required fields before continuing.'
        : 'Molimo popunite sva obavezna polja.';
      alert(message);
      return;
    }
    
    try {
      const response = await fetch('/api/send-pricing-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          selectedPlan: selectedPlan.tier,
          price: selectedPlan.price,
        }),
      });

      if (response.ok) {
        setStep(2);
      } else {
        alert(language === 'en' ? 'An error occurred. Please try again.' : 'Došlo je do greške. Molimo pokušajte ponovo.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(language === 'en' ? 'An error occurred. Please try again.' : 'Došlo je do greške. Molimo pokušajte ponovo.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 flex flex-col justify-between max-h-[90vh] overflow-y-auto"
          >
            {step === 1 ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">{selectedPlan.tier} Plan</h2>
                  <p className="text-xl text-primary mb-4">{selectedPlan.price}</p>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Fill in your details and after clicking continue, you will be forwarded to our agents.'
                      : 'Popunite vaše podatke i nakon klika na nastavi biće prosleđeni našim agentima.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Company Name' : 'Ime vaše kompanije'} *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Business Type' : 'Delatnost kojom se bavite'} *
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Full Name' : 'Ime i Prezime'} *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Phone Number' : 'Kontakt telefon'} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Email' : 'Kontakt mail'} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="flex flex-row justify-between items-center mt-10 pt-4 border-t border-gray-100 px-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2 rounded-md border border-primary text-primary bg-white hover:bg-gray-100 font-medium transition-colors duration-200 shadow-sm"
                    >
                      {language === 'en' ? 'Cancel' : 'Otkaži'}
                    </button>
                    <button
                      type="submit"
                      className="w-32 px-6 py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors duration-200 shadow-sm"
                      style={{ fontSize: 18, overflow: 'visible', whiteSpace: 'nowrap', zIndex: 1000, position: 'relative' }}
                    >
                      {language === 'en' ? 'Continue' : 'Nastavi'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'en' 
                    ? 'Thank you for choosing EasyBook application and choosing us as your partner.'
                    : 'Hvala što ste izabrali EasyBook aplikaciju i što ste odabrali nas za partnera.'}
                </h2>
                <p className="text-gray-600 mb-6">
                  {language === 'en'
                    ? 'An agent from DreaminApp company will contact you soon.'
                    : 'Uskoro će vam se javiti agent iz DreaminApp kompanije.'}
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                >
                  {language === 'en' ? 'Close' : 'Zatvori'}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;