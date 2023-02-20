import React from 'react'
// Import FormInput Components
import FormInput from "../Common/FormInput";

const ReplayForm = () => {
    return (
        <>
            <div className="blog_single_item">
                <div className="blog_sidebar_heading">
                    <h3>Lascia la tua risposta</h3>
                </div>
                <div className="replay_leave_form">
                    <form action="!#">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'input'}
                                    type={'text'}
                                    name={'name'}
                                    classes={'form-control'}
                                    placeholder={'Nome'}
                                />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'input'}
                                    type={'text'}
                                    name={'email'}
                                    classes={'form-control'}
                                    placeholder={'Email'}
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'input'}
                                    type={'text'}
                                    name={'website'}
                                    classes={'form-control'}
                                    placeholder={'Website'}
                                />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <FormInput
                                    tag={'textarea'}
                                    type={'text'}
                                    name={'textarea'}
                                    classes={'form-control'}
                                    placeholder={'Digita il tuo messaggio'}
                                />
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="leave_form_submit">
                                    <FormInput
                                        tag={'button'}
                                        val={'Invia'}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReplayForm
