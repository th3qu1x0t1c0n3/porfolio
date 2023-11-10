import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

function Contact() {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });


    const handleSendEmail = async () => {
        console.log("Send email")
        // const accessToken = 'your_access_token'; // Obtain this through OAuth 2.0
        // try {
        //     const response = await axios.post(
        //         'https://www.googleapis.com/gmail/v1/users/me/messages/send',
        //         {
        //             raw: formData.message,
        //         },
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${accessToken}`,
        //             },
        //         }
        //     );
        //
        //     console.log('Email sent:', response.data);
        // } catch (error) {
        //     console.error('Error sending email:', error);
        // }
    };

    return (
        <>
            <div className="row">
                <div className="col text-center mb-3">
                    <h1 className="text-warning display-2 text-capitalize">{t('pages.home.contact')}</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="text-center text-secondary mb-4">
                        <h2>{t('pages.home.question')}</h2>
                    </div>
                    <form className="text-muted">
                        <div className="form-group">
                            <label htmlFor="name">{t('pages.home.name')}</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t('pages.home.email')}</label>
                            <input type="text" className="form-control" id="email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="noTel">{t('pages.home.number')}</label>
                            <input type="text" className="form-control" id="noTel"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t('pages.home.message')}</label>
                            <textarea className="form-control" id="message" rows={5} required></textarea>
                        </div>

                        <button className="btn btn-outline-warning btn-block mt-2" type="submit"
                                onClick={handleSendEmail}>{t('pages.home.send')}</button>
                        <button className="btn btn-outline-dark btn-block mt-2 ms-4"
                                onClick={() => navigate('/login')}>{t('pages.home.sent')}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;