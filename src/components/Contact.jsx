import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_yjf36l4",
        "template_4dzxj82",
        form.current,
        "NCaSJjdXJX8GiL7Zb"
      )
      .then(
        () => {
          setStatus("✓ Message sent successfully!");
          e.target.reset();
        },
        () => {
          setStatus("✕ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="section contact">

      <p className="section-label">
        GET IN TOUCH
      </p>

      <h2 className="section-title">
        Let's Work Together
      </h2>

      <p className="contact-intro">
        Have a project or question? Send me a message
        and I'll get back to you.
      </p>

      <div className="contact-container">

        {/* CONTACT INFORMATION */}
        <div className="contact-info">

          <h3>Contact Information</h3>

          <p className="contact-info-text">
            Feel free to reach out to me through the
            information below.
          </p>

          <div className="contact-item">
            <span className="contact-icon">📧</span>

            <div>
              <span>Email</span>
              <a href="mailto:magallanes.ryanpaulc11p@gmail.com">
                magallanes.ryanpaulc11p@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">💻</span>

            <div>
              <span>GitHub</span>
              <a
                href="https://github.com/Ryanpaul-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Ryanpaul-ai
              </a>
            </div>
          </div>

        </div>

        {/* CONTACT FORM */}
        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            className="primary-button"
          >
            Send Message
          </button>

          {status && (
            <p
              className={
                status.includes("successfully")
                  ? "form-success"
                  : status.includes("Sending")
                  ? "form-sending"
                  : "form-error"
              }
            >
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;