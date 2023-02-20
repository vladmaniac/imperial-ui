import React from 'react'
import FormInput from '../Common/FormInput'

const RequestQuoteForm = () => {
 let options1 = [
  {
      text: "Traslochi internazionale",
      value: ""
  },
  {
      text: "Traslochi",
      value: ""
  },
  {
      text: "Trasporti",
      value: ""
  },
  {
      text: "Logistica e magazzino",
      value: ""
  },
  {
      text: "Sgomberi",
      value: ""
  },
]
 let options2 = [
  {
      text: "Telefono",
      value: ""
  },
  {
      text: "Email",
      value: ""
  },
  {
      text: "Ufficio postale",
      value: ""
  }
]
 return (
   <>
     <section id="request_quote_form_area">
       <div className="container">
         <div className="row">
           <div className="col-lg-12 col-sm-12 col-md-12 col-12">
             <form id="request_form">
               <div className="row">
                <div className="col-lg-12">
                <div className="heading_quote">
                    <h3>Richiedi un preventivo</h3>
                </div>
                </div>
                 <div className="col-lg-6">
                   <FormInput
                     tag="select"
                     classes="form-control"
                     options={options1}
                     label="Tipo di servizio"
                   />
                 </div>
                 <div className="col-lg-6">
                   <FormInput
                     tag="select"
                     classes="form-control"
                     options={options2}
                     label="Voglio essere contattato da"
                   />
                 </div>
                 <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"email"}
                     name={"departure"}
                     classes={"form-control"}
                     placeholder={"Indirizzo di partenza"}
                     label="Indirizzo di partenza"
                   />
                 </div>
                 <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"text"}
                     name={"city"}
                     classes={"form-control"}
                     placeholder={"Indirizzo di destinazione"}
                     label="Indirizzo di destinazione"
                   />
                 </div>
                 <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"date"}
                     name={"date"}
                     classes={"form-control"}
                     placeholder={"Data indicativa"}
                     label="Data indicativa"
                   />
                 </div>
                 <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"file"}
                     name={"photo"}
                     classes={"form-control"}
                     placeholder={"Allega foto da cose da traslocare"}
                     label="Allega foto da cose da traslocare"
                   />
                 </div>
                 <div className="col-lg-12">
                <div className="heading_quote arae_top">
                    <h3>I tuoi dettagli personali</h3>
                </div>
                </div>
                <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"text"}
                     name={"fname"}
                     classes={"form-control"}
                     placeholder={"Nome"}
                     label="Nome"
                   />
                 </div>
                <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"text"}
                     name={"lname"}
                     classes={"form-control"}
                     placeholder={"Cognome"}
                     label="Cognome"
                   />
                 </div>
                <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"text"}
                     name={"email"}
                     classes={"form-control"}
                     placeholder={"Email"}
                     label="Email"
                   />
                 </div>
                <div className="col-lg-6">
                   <FormInput
                     tag={"input"}
                     type={"number"}
                     name={"number"}
                     classes={"form-control"}
                     placeholder={"Telefono"}
                     label="Telefono"
                   />
                 </div>
                <div className="col-lg-12">
                   <FormInput
                     tag={"textarea"}
                     type={"text"}
                     name={"text"}
                     classes={"form-control"}
                     placeholder={"Messagio"}
                     label="Messagio"
                   />
                 </div>
                 <div className="col-lg-12">
                  <div className="quote_submit_button">
                   <button className="btn btn-theme">Invia messaggio</button>
                  </div>
                 </div>
               </div>
             </form>
           </div>
         </div>
       </div>
     </section>
   </>
 );
}

export default RequestQuoteForm
