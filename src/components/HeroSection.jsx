import React from "react"

const HeroSection = () => {
  return (
    <section className="hero-heading-left wf-section">
      <div className="hero-left flex flex-1 items-start justify-start flex-col">
        <h1 className="text=[#26272b]">
          Connecting developers to
          <br />
          Web3 markets
        </h1>
        <h5>
          Your one stop shop to build financial products on crypto rails. Enable
          faster trading, better prices and superior UX in your app.
        </h5>
        <a
          href="https://dashboard.0x.org/create-account"
          target="_blank"
          className="primary-button text-white text-decoration-none"
        >
          Get started
        </a>
      </div>
      <div className="hero-right">
        <div className="w-embed"></div>
        <div className="hero-animation">
          <img
            src="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb4508190612d79f6f0_token-registry.webp"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 38vw, (max-width: 991px) 181.398193359375px, (max-width: 1919px) 326.516845703125px, 17vw"
            srcset="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb4508190612d79f6f0_token-registry-p-500.webp 500w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb4508190612d79f6f0_token-registry-p-800.webp 800w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb4508190612d79f6f0_token-registry.webp 1000w"
            alt="Token Registry API"
          />
          <img
            src="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb403c901ff764d592a_tx-history.webp"
            loading="lazy"
            sizes="(max-width: 479px) 81vw, (max-width: 991px) 126.58447265625px, (max-width: 1919px) 227.85205078125px, 12vw"
            srcset="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb403c901ff764d592a_tx-history-p-500.webp 500w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb403c901ff764d592a_tx-history-p-800.webp 800w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb403c901ff764d592a_tx-history.webp 1000w"
            alt="Tx History API"
          />
          <img
            src="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb494b6431b4627b653_orderbook.webp"
            loading="lazy"
            sizes="(max-width: 479px) 55vw, (max-width: 767px) 18vw, (max-width: 991px) 86.82467651367188px, (max-width: 1919px) 156.284423828125px, 8vw"
            srcset="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb494b6431b4627b653_orderbook-p-500.webp 500w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb494b6431b4627b653_orderbook-p-800.webp 800w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb494b6431b4627b653_orderbook.webp 1000w"
            alt="Ordebook API"
          />
          <img
            src="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb57b2cc6cf1a426e0c_tx-relay.webp"
            loading="lazy"
            sizes="(max-width: 479px) 45vw, (max-width: 991px) 70px, 126px"
            srcset="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb57b2cc6cf1a426e0c_tx-relay-p-500.webp 500w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb57b2cc6cf1a426e0c_tx-relay-p-800.webp 800w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb57b2cc6cf1a426e0c_tx-relay.webp 1000w"
            alt="Tx Relay API"
          />
          <img
            src="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb5d8c7de7124edddbf_swap.webp"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 200px, 360px"
            srcset="https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb5d8c7de7124edddbf_swap-p-500.webp 500w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb5d8c7de7124edddbf_swap-p-800.webp 800w, https://assets.website-files.com/640bf70a17d12b42d97a052b/6440ceb5d8c7de7124edddbf_swap.webp 1000w"
            alt="Swap API"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
