import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            Have a project in mind or want to collaborate? I'm always open to discussing new projects,
                            creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>jobin.selvanose@example.com</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Kerala, India</span>
                            </div>
                            {/* <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 12345 67890</span>
              </div> */}
                        </div>
                    </div>

                    <iframe
                        name="hidden_iframe"
                        id="hidden_iframe"
                        style={{ display: 'none' }}
                        onLoad={() => {
                            if (window.submitted) {
                                setShowPopup(true);
                                window.submitted = false;
                            }
                        }}
                    ></iframe>

                    <form
                        className="contact-form"
                        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfP8WCPSxI2ncu5vQf8P311sjjfQ0ktf170yJ8IGn3L7fcNYw/formResponse"
                        method="POST"
                        target="hidden_iframe"
                        onSubmit={() => { window.submitted = true; }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="entry.354820270"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="entry.664634989"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="entry.255787882"
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>

                    {showPopup && (
                        <div className="popup-overlay">
                            <div className="popup-content">
                                <h3>Thank you!</h3>
                                <p>Your message has been sent successfully. I'll get back to you soon.</p>
                                <button className="btn btn-primary" onClick={() => setShowPopup(false)}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;