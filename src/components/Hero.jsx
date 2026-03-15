import React from 'react'

const Hero = () => {
  return (
    <section id = "hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/assets/hero.png" alt="MacBook Pro" />
        </div>
        <video src ="/assets/hero-video.mp4" autoPlay muted playsInline />
    </section>
  )
}

export default Hero