import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1 className="section-title">error 404 not found.</h1>

        <Link to="/">
          <button className="btn btn-primary">back home</button>
        </Link>
      </div>
    </section>
  )
}
