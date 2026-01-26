import React from 'react';

export default function Footer() {
    return (
        <footer className="footer mt-2">
            <div className="backgroundGrey pt-6 pb-3">
                <div className="flex flex-col items-center">
                    {/* h4 equivalent with responsive font sizing if needed */}
                    <h4 className="text-2xl font-medium mb-2">
                        Contact Us
                    </h4>
                    
                    <p className="flex justify-center hover:text-blue-600 transition-colors">
                        <a href="tel:4355156278">(435) 515-6278</a>
                    </p>
                    
                    <p className="flex justify-center hover:text-blue-600 transition-colors">
                        <a href="mailto:travislott@msn.com">travislott@msn.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}