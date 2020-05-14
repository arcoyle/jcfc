import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"

const Contact = (props) => {
  const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/6f5b5d80-a201-4c0e-9c7f-a35cab173822",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
  };
  return (
      <section id="contact">
          <div className="inner">
              <section>
                  <form onSubmit={handleOnSubmit}>
                      <div className="field half first">
                          <label htmlFor="name">Name</label>
                          <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Enter your Name"
                              required="required" />
                      </div>
                      <div className="field half">
                          <label htmlFor="email">Email</label>
                          <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter email"
                              required="required" />
                      </div>
                      <div className="field">
                          <label htmlFor="message">Message</label>
                          <textarea
                              name="message"
                              id="message"
                              rows="6"
                              required="required"></textarea>
                      </div>
                      <ul className="actions">
                          <li><input
                              type="submit"
                              value="Send Message"
                              className="special"
                              disabled={serverState.submitting}
                          /></li>
                          <li><input
                              type="reset"
                              value="Clear"
                          /></li>
                      </ul>
                      {serverState.status && (
                          <p className={!serverState.status.ok ? "errorMsg" : ""}>
                          {serverState.status.msg}
                          </p>
                      )}
                  </form>
              </section>
              <section className="split">
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-envelope"></span>
                          <h3>Email</h3>
                          <a href="#">joe@jcfc.ie</a>
                      </div>
                  </section>
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-phone"></span>
                          <h3>Office</h3>
                          <span>074 9735602</span>
                      </div>
                  </section>
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-phone"></span>
                          <h3>Mobile</h3>
                          <span>087 2579931</span>
                      </div>
                  </section>
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-home"></span>
                          <h3>Address</h3>
                          <span>Rosguill<br />
                          Hall Demesne<br />
                          Mountcharles<br />
                          Co. Donegal</span>
                      </div>
                  </section>
              </section>
          </div>
      </section>
  )
}

export default Contact
