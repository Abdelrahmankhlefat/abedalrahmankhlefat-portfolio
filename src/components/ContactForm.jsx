import React, { useState } from 'react'
import Swal from 'sweetalert2'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setIsSending(true)

    const errors = [];
    if (!name.trim()) errors.push("<p class='text-danger'>Name is required.</p>");
    if (!email.trim()) errors.push("<p class='text-danger'>Email is required.</p>");
    if (!message.trim()) errors.push("<p class='text-danger'>Message is required.</p>");

    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops... something went wrong",
        html: errors,
        showConfirmButton: true,
      });
      setIsSending(false);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name, email, message
        }),
        headers: {
          'content-type': 'application/json'
        }
      })

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Your message was sent successfully",
          showConfirmButton: false,
          timer: 1500
        });
        setName('')
        setEmail('')
        setMessage('')
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops... something went wrong",
          showConfirmButton: true,
        });
      }
    }
    catch (err) {
      Swal.fire({
        icon: "error",
        title: "An error occurred.Please try again.",
        showConfirmButton: true,
      });
      console.log('Err', err)
    } finally {
      setIsSending(false); // Stop sending
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="d-flex flex-column gap-3 contact-form">
      <input value={name}
        required
        type="text"
        className="form-control"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        required
        className="form-control"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="form-control"
        value={message}
        placeholder="Message"
        required
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button className="btn btn-outline-success text-uppercase" disabled={isSending} type="submit">{isSending ? "Sending..." : "Send"}</button>
    </form>
  )
}

export default ContactForm