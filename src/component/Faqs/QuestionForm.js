import React from 'react'
// Import FormInput
import FormInput from "../Common/FormInput";
// QuestionForm Area
const QuestionForm = () => {
    return (
        <>
            <div className="faqs_form">
                <div className="faqs_form_heading">
                    <h3>FAI UNA DOMANDA</h3>
                </div>
                <form action="#!" id="faq_form">
                    <FormInput
                        tag={'input'}
                        type={'text'}
                        name={'name'}
                        classes={'form-control'}
                        placeholder={'Nome'}
                    />
                    <FormInput
                        tag={'input'}
                        type={'text'}
                        name={'email'}
                        classes={'form-control'}
                        placeholder={'Email'}
                    />
                    <FormInput
                        tag={'input'}
                        type={'text'}
                        name={'subject'}
                        classes={'form-control'}
                        placeholder={'Il Tema'}
                    />
                    <FormInput
                        tag={'textarea'}
                        type={'text'}
                        name={'name'}
                        classes={'form-control'}
                        placeholder={'Digita il tuo messaggio'}
                    />
                    <div className="faqs_form_button">
                        <button className="btn btn-theme">Invia</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default QuestionForm
