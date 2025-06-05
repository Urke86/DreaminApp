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
  const [validationMessage, setValidationMessage] = useState('');
  const [firstInvalidField, setFirstInvalidField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fields = [
      { name: 'companyName', value: formData.companyName },
      { name: 'businessType', value: formData.businessType },
      { name: 'fullName', value: formData.fullName },
      { name: 'phone', value: formData.phone },
      { name: 'email', value: formData.email },
    ];
    const firstEmpty = fields.find(f => !f.value);
    if (firstEmpty) {
      setFirstInvalidField(firstEmpty.name);
      setValidationMessage(language === 'en'
        ? 'This field is required.'
        : 'Ovo polje je obavezno.');
      return;
    } else {
      setFirstInvalidField(null);
      setValidationMessage('');
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
        setValidationMessage(language === 'en'
          ? 'An error occurred. Please try again.'
          : 'Došlo je do greške. Molimo pokušajte ponovo.');
        setTimeout(() => setValidationMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setValidationMessage(language === 'en'
        ? 'An error occurred. Please try again.'
        : 'Došlo je do greške. Molimo pokušajte ponovo.');
      setTimeout(() => setValidationMessage(''), 3000);
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
                      ? 'Fill in your details and we will contact you shortly.'
                      : 'Popunite vaše podatke i kontaktiraćemo vas uskoro.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Company Name' : 'Ime vaše kompanije'}
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {firstInvalidField === 'companyName' && validationMessage && (
                      <div className="text-red-600 text-sm mt-1">{validationMessage}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Business Type' : 'Delatnost kojom se bavite'}
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {firstInvalidField === 'businessType' && validationMessage && (
                      <div className="text-red-600 text-sm mt-1">{validationMessage}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Full Name' : 'Ime i Prezime'}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {firstInvalidField === 'fullName' && validationMessage && (
                      <div className="text-red-600 text-sm mt-1">{validationMessage}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Phone Number' : 'Kontakt telefon'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {firstInvalidField === 'phone' && validationMessage && (
                      <div className="text-red-600 text-sm mt-1">{validationMessage}</div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === 'en' ? 'Email' : 'Kontakt mail'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {firstInvalidField === 'email' && validationMessage && (
                      <div className="text-red-600 text-sm mt-1">{validationMessage}</div>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      {language === 'en' ? 'Cancel' : 'Otkaži'}
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-700 disabled:opacity-50"
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
                    ? 'Your information has been submitted. We will contact you soon.'
                    : 'Vaši podaci su prosleđeni. Uskoro ćemo vas kontaktirati.'}
                </h2>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
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