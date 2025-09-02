import { useState, useEffect } from 'react'
import Head from 'next/head'
import Microlink from '@microlink/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.offsetHeight || window.innerHeight
      setScrolled(window.scrollY > heroHeight * 0.6)
    }
    window.addEventListener('scroll', handleScroll)

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.2 })

    document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      io.disconnect()
    }
  }, [])

  const urls = [
    "https://www.viasat.com/news/latest-news/corporate/2025/enrique-gomez-jackson-wins-education-grant-for--earthlive---a-sm/",
    "https://www.webwire.com/ViewPressRel.asp?aId=342612",
    "https://timesofsandiego.com/education/2025/08/16/stem-student-wins-viasat-grant-for-disaster-response-device/",
    "https://philanthropynewsdigest.org/news/other-sources/article/?id=16364886&title=STEM-student-wins-Viasat-grant-for-disaster-response-device",
    "https://comunidadinformativa.com.mx/tecnologia/5714/joven-mexicano-desarrolla-pulsera-satelital-que-puede-salvar-vidas-y-promover-la-sustentabilidad/",
    "https://www.msn.com/en-us/news/technology/stem-student-wins-viasat-grant-for-disaster-response-device/ar-AA1KE4OY",
    "https://www.linkedin.com/feed/update/activity:7362863359114760193",
    "https://www.facebook.com/share/p/1ECDFFkAP3/?mibextid=wwXIfr",
    "https://www.facebook.com/share/p/1GbyLHSEbE/"
  ]

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet:  { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile:  { breakpoint: { max: 464, min: 0 }, items: 1 }
  }

  return (
    <div>
      <Head>
        <title>Earthlive - Locate. Identify. Save Lives.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav className={`navbar ${scrolled ? 'scrolled' : 'top'}`}>
        <div className="logo">Earthlive</div>
        <div className="nav-btn-slot"></div>
      </nav>

      {/* Hero Section (background set via CSS) */}
      <header className="hero">
        <h1>Locate. Identify. Save Lives.</h1>
        <p>
          Earthlive is a disaster-response bracelet that connects victims with emergency responders —
          even when all networks fail.
        </p>
        <div className="cta-container">
          <a
            id="cta-button"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe56sOJqEZ1Rsglvq-2d92EmjPbdfxenOXitxruiGu0ojKzIA/viewform?usp=header"
            target="_blank"
            className={`btn primary ${scrolled ? 'to-nav' : ''}`}
          >
            Pre-Order
          </a>
        </div>
      </header>

      {/* Problem */}
      <section className="problem white-bg split">
        <div className="split-text animate-on-scroll animate-left">
          <h2>The Problem</h2>
          <p>
            Every year, millions go missing in natural disasters.
            Phones, apps, and radios often fail when power lines are down and infrastructure is destroyed.
            Rescue teams lose valuable time — and people lose their lives.
          </p>
        </div>
        <div className="split-image animate-on-scroll animate-right">
          <img src="/assets/disaster.jpg" alt="Disaster scene" />
        </div>
      </section>

      {/* Solution */}
      <section className="solution gray-bg split" id="solution">
        <div className="split-image animate-on-scroll animate-zoom">
          <img src="/assets/bracelet.png" alt="Bracelet mockup" />
        </div>
        <div className="split-text animate-on-scroll animate-right">
          <h2>The Solution — Earthlive Bracelet</h2>
          <ul>
            <li>🌐 Direct-to-Satellite Connectivity</li>
            <li>📍 Real-Time Location Sharing</li>
            <li>🔐 Encrypted Personal ID Data</li>
            <li>💧 Waterproof, Recycled Materials</li>
            <li>🔋 Rechargeable, Long-Lasting Battery</li>
            <li>🌞 Future-ready: Solar & Kinetic Charging</li>
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases teal-bg">
        <h2>Use Cases</h2>
        <div className="use-grid">
          <div className="use-card"><img src="/assets/usecase-disaster.png" alt="Natural Disasters"/><p>Natural Disasters</p></div>
          <div className="use-card"><img src="/assets/usecase-tourism.png" alt="Tourism & Adventure Travel"/><p>Tourism & Adventure Travel</p></div>
          <div className="use-card"><img src="/assets/usecase-schools.png" alt="Schools & Summer Camps"/><p>Schools & Summer Camps</p></div>
          <div className="use-card"><img src="/assets/usecase-aid.png" alt="Humanitarian Aid"/><p>Humanitarian Aid</p></div>
          <div className="use-card"><img src="/assets/usecase-events.png" alt="Events & Future Uses"/><p>Events & Future Uses</p></div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact gray-bg animate-on-scroll">
        <h2>Impact of Wearing Earthlive</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>⏱ Faster Response</h3>
            <p>Cut rescue time from hours to minutes.</p>
            <strong>Up to 70% faster</strong>
          </div>
          <div className="impact-card">
            <h3>🌍 Wider Reach</h3>
            <p>Connects even in areas with zero cell coverage.</p>
            <strong>100% global coverage</strong>
          </div>
          <div className="impact-card">
            <h3>💸 Affordable</h3>
            <p>Low-cost device accessible to vulnerable groups.</p>
            <strong>10× cheaper than alternatives</strong>
          </div>
          <div className="impact-card">
            <h3>💚 Sustainable</h3>
            <p>Made with recycled and eco-friendly materials.</p>
            <strong>85% recycled materials</strong>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="comparison white-bg animate-on-scroll">
        <h2>Why Earthlive vs. Others</h2>
        <table>
          <thead>
            <tr><th>Feature</th><th>Smartwatches / GPS Devices</th><th>Earthlive Bracelet</th></tr>
          </thead>
          <tbody>
            <tr><td>Connectivity</td><td>Cellular/Wi-Fi (fails in disasters)</td><td>Direct-to-Satellite</td></tr>
            <tr><td>Cost</td><td>$350 unit + $8.99/month</td><td>$25 unit + $2.99/month</td></tr>
            <tr><td>Purpose</td><td>Tourism, fitness</td><td>Disaster survival & equity</td></tr>
            <tr><td>Waterproof</td><td>Limited</td><td>✅ Yes</td></tr>
            <tr><td>Data Security</td><td>Mixed</td><td>End-to-end encrypted</td></tr>
          </tbody>
        </table>
      </section>

      {/* News */}
      <section className="news teal-bg animate-on-scroll">
        <h2>News & Media</h2>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          showDots={true}
          arrows={true}
          customLeftArrow={<button className="arrow left">‹</button>}
          customRightArrow={<button className="arrow right">›</button>}
        >
          {urls.map((url, idx) => (
            <div key={idx} className="news-card">
              <Microlink url={url} media="image" size="normal" style={{ maxWidth: '320px', margin: '0 auto' }} />
            </div>
          ))}
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="footer animate-on-scroll">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfjSiDoSVVpTVQTpgmicn-b3EK83gdJEMI7zUkUcwNabya_GA/viewform?usp=header"
          target="_blank"
          className="btn secondary"
        >
          Contact Us
        </a>
        <p>© Earthlive 2025</p>
      </footer>
    </div>
  )
}
