import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {toast} from "react-toastify";
import {Button, Form} from "react-bootstrap";
import FormInput from "../../assets/models/Form";
import {emailRegex, phoneNumRegex} from "../../App";

function Contact() {
    const {t} = useTranslation();
    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });
    const [contactFormInfo, setContactFormInfo] = useState([
        new FormInput('name',  'pages.home.name','text', 'pages.home.name', ''),
        new FormInput('email', 'pages.common.email','text', 'pages.home.email', ''),
        new FormInput('number', 'pages.home.number','text', 'pages.home.number', ''),
    ]);
    const [message, setMessage] = useState(
        new FormInput('message', 'pages.home.message','textarea', 'pages.home.message', '')
    );

    function sendEmail(e: any) {
        e.preventDefault();
        let isValid = true;
        if (contactData.name === '') {
            toast.error(t('toast.error.name'));
            setContactFormInfo(contactFormInfo.map((contactInfo) => {
                if (contactInfo.name === 'name') {
                    contactInfo.warning = 'errors.name';
                }
                return contactInfo;
            }));
            isValid = false;
        }
        if (!emailRegex.test(contactData.email)) {
            toast.error(t('toast.error.email'));
            setContactFormInfo(contactFormInfo.map((contactInfo) => {
                if (contactInfo.name === 'email') {
                    contactInfo.warning = 'errors.email';
                }
                return contactInfo;
            }));
            isValid = false;
        }
        if (contactData.number !== '') {
            if (!phoneNumRegex.test(contactData.number)) {
                toast.error(t('toast.error.number'));
                setContactFormInfo(contactFormInfo.map((contactInfo) => {
                    if (contactInfo.name === 'number') {
                        contactInfo.warning = 'errors.number';
                    }
                    return contactInfo;
                }));
                isValid = false;
            }
        }
        if (contactData.message === '') {
            toast.error(t('toast.error.message'));
            setMessage({...message, warning: 'errors.message'})
            isValid = false;
        }

        if (!isValid) {
            return;
        }

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

        toast.success(t('toast.success.emailSent'));
        setContactData({
            name: '',
            email: '',
            number: '',
            message: ''
        });
    }

    function formChange(e: any) {
        setContactData({...contactData, [e.target.id]: e.target.value});
    }

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
                    <Form className="text-muted mb-4" autoComplete="off">
                        {
                            contactFormInfo.map((contactInfo, index) => (
                                <Form.Group key={index} className="mb-3" controlId={contactInfo.name}>
                                    <Form.Label>{t(contactInfo.label)}</Form.Label>
                                    <Form.Control className={`${contactInfo.warning !== '' ? "is-invalid" : ""}`}
                                                  onChange={formChange} type={contactInfo.type}
                                                  placeholder={t(contactInfo.placeholder)}/>
                                    <h5 className="text-danger">{t(contactInfo.warning)}</h5>
                                </Form.Group>
                            ))
                        }
                        <Form.Group className="mb-3" controlId="message">
                            <Form.Label>{t(message.label)}</Form.Label>
                            <Form.Control className={`${message.warning !== '' ? "is-invalid" : ""}`}
                                as={'textarea'}
                                rows={4}
                                placeholder={t(message.placeholder)}
                                onChange={formChange}
                            />
                            <h5 className="text-danger">{t(message.warning)}</h5>
                        </Form.Group>
                        <div className=" mt-4 mb-2">
                            <Button variant={"btn-warning"} className="btn btn-outline-warning btn-block mt-2"
                                    onClick={sendEmail}>
                                {t('pages.home.send')}
                            </Button>
                            <Button variant="btn-dark" className="btn-outline-dark btn-block mt-2 ms-4"
                                    onClick={sendEmail}>
                                {t('pages.home.sent')}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Contact;