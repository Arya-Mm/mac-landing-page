import React from 'react'

const Hero = () => {
  return (
    <section id = "hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/assets/hero.png" alt="MacBook Pro" />
        </div>
        <video autoPlay muted loop playsInline>
  <source src="/assets/hero-video.mp4" type="video/mp4" />
</video>
    </section>
  )
}

export default Hero