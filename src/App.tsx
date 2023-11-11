import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import {I18nextProvider} from "react-i18next";
import i18n from "./assets/utils/i18n";
import axios from "axios";

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="colored"
            />
            <BrowserRouter>
                <div className="min-vh-100 p-0 m-0">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </BrowserRouter>
        </I18nextProvider>
    );
}

export default App;

export const server = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});