import React from "react"
import Slider from "react-slick"

const WebThreeApplications = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  }
  return (
    <div className="web-three-applications container">
      <div className="powering">
        <h2 className="text-center">
          Powering leading <br />
          Web3 applications
        </h2>
        <p className="text-center wrapper-600px">
          <strong>0x</strong> is used by fintech companies, self-custody
          wallets, and Web3 native organizations <br /> with millions of users
          across the world.
        </p>
      </div>
      <div className="mb-16 flex justify-between items-center gap-4">
        <div
          id="w-node-cf1a2ec2-47fd-07c7-db1d-5b68b5989726-b5989726"
          className="numbers-card numbers-card-top-left"
        >
          <h3 className="mb-0">$125B+</h3>
          <h6>Trading volume</h6>
        </div>
        <div
          id="w-node-cf1a2ec2-47fd-07c7-db1d-5b68b5989726-b5989726"
          className="numbers-card numbers-card-top-left"
        >
          <h3 className="mb-0">52M+</h3>
          <h6>Transactions</h6>
        </div>
        <div
          id="w-node-cf1a2ec2-47fd-07c7-db1d-5b68b5989726-b5989726"
          className="numbers-card numbers-card-top-left"
        >
          <h3 className="mb-0">6M+</h3>
          <h6>Unique wallets</h6>
        </div>
      </div>
      <Slider {...settings}>
        <div role="listitem" className="slider--item w-dyn-item">
          <div className="quote--card bg-[#1652f0]">
            <div className="quote-content--wrapper">
              <img
                loading="lazy"
                width="81"
                height="50"
                src="https://assets.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg"
                alt=""
                className="mb-32 logo-quote"
              />
              <h6 className="text-left text-white">
                “0x has one of the most extensive and reliable DEX API services
                in the Web3 ecosystem, backed by a professional and responsive
                team. It's been a pleasure working with them to launch our DEX
                features on Coinbase Wallet.”
              </h6>
            </div>
            <div>
              <p className="text-white mb-0 text-medium">Sid Coelho-Prabhu</p>
              <p className="text-white mb-0">Director of Product at Coinbase</p>
            </div>
          </div>
        </div>
        <div role="listitem" className="slider--item w-dyn-item">
          <div className="quote--card bg-[#1652f0]">
            <div className="quote-content--wrapper">
              <img
                loading="lazy"
                width="81"
                height="50"
                src="https://assets.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg"
                alt=""
                className="mb-32 logo-quote"
              />
              <h6 className="text-left text-white">
                “0x has one of the most extensive and reliable DEX API services
                in the Web3 ecosystem, backed by a professional and responsive
                team. It's been a pleasure working with them to launch our DEX
                features on Coinbase Wallet.”
              </h6>
            </div>
            <div>
              <p className="text-white mb-0 text-medium">Sid Coelho-Prabhu</p>
              <p className="text-white mb-0">Director of Product at Coinbase</p>
            </div>
          </div>
        </div>
        <div role="listitem" className="slider--item w-dyn-item">
          <div className="quote--card bg-[#1652f0]">
            <div className="quote-content--wrapper">
              <img
                loading="lazy"
                width="81"
                height="50"
                src="https://assets.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg"
                alt=""
                className="mb-32 logo-quote"
              />
              <h6 className="text-left text-white">
                “0x has one of the most extensive and reliable DEX API services
                in the Web3 ecosystem, backed by a professional and responsive
                team. It's been a pleasure working with them to launch our DEX
                features on Coinbase Wallet.”
              </h6>
            </div>
            <div>
              <p className="text-white mb-0 text-medium">Sid Coelho-Prabhu</p>
              <p className="text-white mb-0">Director of Product at Coinbase</p>
            </div>
          </div>
        </div>
        <div role="listitem" className="slider--item w-dyn-item">
          <div className="quote--card bg-[#1652f0]">
            <div className="quote-content--wrapper">
              <img
                loading="lazy"
                width="81"
                height="50"
                src="https://assets.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg"
                alt=""
                className="mb-32 logo-quote"
              />
              <h6 className="text-left text-white">
                “0x has one of the most extensive and reliable DEX API services
                in the Web3 ecosystem, backed by a professional and responsive
                team. It's been a pleasure working with them to launch our DEX
                features on Coinbase Wallet.”
              </h6>
            </div>
            <div>
              <p className="text-white mb-0 text-medium">Sid Coelho-Prabhu</p>
              <p className="text-white mb-0">Director of Product at Coinbase</p>
            </div>
          </div>
        </div>
        <div role="listitem" className="slider--item w-dyn-item">
          <div className="quote--card bg-[#1652f0]">
            <div className="quote-content--wrapper">
              <img
                loading="lazy"
                width="81"
                height="50"
                src="https://assets.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg"
                alt=""
                className="mb-32 logo-quote"
              />
              <h6 className="text-left text-white">
                “0x has one of the most extensive and reliable DEX API services
                in the Web3 ecosystem, backed by a professional and responsive
                team. It's been a pleasure working with them to launch our DEX
                features on Coinbase Wallet.”
              </h6>
            </div>
            <div>
              <p className="text-white mb-0 text-medium">Sid Coelho-Prabhu</p>
              <p className="text-white mb-0">Director of Product at Coinbase</p>
            </div>
          </div>
        </div>
        <div role="listitem" className="slider--item w-dyn-item">
          <div className="quote--card bg-[#1652f0]">
            <div className="quote-content--wrapper">
              <img
                loading="lazy"
                width="81"
                height="50"
                src="https://assets.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg"
                alt=""
                className="mb-32 logo-quote"
              />
              <h6 className="text-left text-white">
                “0x has one of the most extensive and reliable DEX API services
                in the Web3 ecosystem, backed by a professional and responsive
                team. It's been a pleasure working with them to launch our DEX
                features on Coinbase Wallet.”
              </h6>
            </div>
            <div>
              <p className="text-white mb-0 text-medium">Sid Coelho-Prabhu</p>
              <p className="text-white mb-0">Director of Product at Coinbase</p>
            </div>
          </div>
        </div>
      </Slider>
      {/* <div className="slider-wrapper pl-4">
        <div className="flex items-stretch justify-start">
          <div
            role="list"
            className="slider--list w-dyn-items"
            style={{
              perspective: "1000px",
              backfaceVisibility: "hidden",
              transform: "translateX(0px)",
            }}
          >
            <div role="listitem" className="slider--item w-dyn-item">
              <div className="quote--card bg-[#1652f0]">
                <div className="quote-content--wrapper">
                  <img
                    loading="lazy"
                    width="81"
                    height="50"
                    src="https://assets.website-files.com/641b3189771d28b3a1d81347/643f15801f84058aba85325c_Coinbase_Wordmark_White%201.svg"
                    alt=""
                    className="mb-32 logo-quote"
                  />
                  <h6 className="text-left text-white">
                    “0x has one of the most extensive and reliable DEX API
                    services in the Web3 ecosystem, backed by a professional and
                    responsive team. It's been a pleasure working with them to
                    launch our DEX features on Coinbase Wallet.”
                  </h6>
                </div>
                <div>
                  <p className="text-white mb-0 text-medium">
                    Sid Coelho-Prabhu
                  </p>
                  <p className="text-white mb-0">
                    Director of Product at Coinbase
                  </p>
                </div>
              </div>
            </div>
            <div role="listitem" className="slider--item w-dyn-item">
              <div className="quote--card bg-[#37b06f]">
                <div className="quote-content--wrapper">
                  <img
                    loading="lazy"
                    width="81"
                    height="50"
                    src="https://assets.website-files.com/641b3189771d28b3a1d81347/6440519081b532d56c5c5dfd_defi-saver.svg"
                    alt=""
                    className="mb-32 logo-quote"
                  />
                  <h6 className="text-left text-white">
                    “We have been working with the 0x team for 3 years now and
                    their APIs are a great choice for any builders out there
                    looking for ultimate liquidity aggregation for their users.
                    We definitely recommend looking into 0x as a simple,
                    ready-made, plug and play solution.”
                  </h6>
                </div>
                <div>
                  <p className="text-white mb-0 text-medium">Nikola Jankovic</p>
                  <p className="text-white mb-0">Founder at DeFi Saver</p>
                </div>
              </div>
            </div>
            <div role="listitem" className="slider--item w-dyn-item">
              <div
                style={{
                  backgroundColor:
                    "hsla(227.99999999999994, 6.17%, 15.88%, 1.00)",
                }}
                className="quote--card"
              >
                <div className="quote-content--wrapper">
                  <img
                    loading="lazy"
                    width="81"
                    height="50"
                    src="https://assets.website-files.com/641b3189771d28b3a1d81347/644051a37f7cafddb3b65bc9_zerion.svg"
                    alt=""
                    className="mb-32 logo-quote"
                  />
                  <h6 className="text-left text-white">
                    “We've been a proud 0x partner and community member for over
                    3 years. In order to help our users get the most efficient
                    trading routes on Zerion, we knew we wanted to use their
                    Swap API. It was easy to integrate and allowed us to offer
                    users access to a wide range of liquidity sources on
                    Ethereum and other EVM chains.”
                  </h6>
                </div>
                <div>
                  <p className="text-white mb-0 text-medium">Evgeny Yurtaev</p>
                  <p className="text-white mb-0">
                    Co-founder &amp; CEO at Zerion
                  </p>
                </div>
              </div>
            </div>
            <div role="listitem" className="slider--item w-dyn-item">
              <div className="quote--card bg-[#f4f4f5]">
                <div className="quote-content--wrapper">
                  <img
                    loading="lazy"
                    width="81"
                    height="50"
                    src="https://assets.website-files.com/641b3189771d28b3a1d81347/64408a257337d640fc6b5cc1_deblock.svg"
                    alt=""
                    className="mb-32 logo-quote"
                  />
                  <h6
                    style={{
                      color: "hsla(227.99999999999994, 6.17%, 15.88%, 1.00)",
                    }}
                    className="text-left text-white"
                  >
                    “Using Swap API was a no brainer for us. As a startup, being
                    able to tap into 100+ exchanges with a single API
                    integration saved us a lot of time that we can now spend
                    focused in other areas of our product and our users. We are
                    also excited to partner with the 0x team given their
                    expertise working with wallets and fintechs. The team is
                    professional, reliable and experts in their field.”
                  </h6>
                </div>
                <div>
                  <p
                    style={{
                      color: "hsla(227.99999999999994, 6.17%, 15.88%, 1.00)",
                    }}
                    className="text-white mb-0 text-medium"
                  >
                    Jean Meyer
                  </p>
                  <p
                    style={{
                      color: "hsla(227.99999999999994, 6.17%, 15.88%, 1.00)",
                    }}
                    className="text-white mb-0"
                  >
                    CEO at Deblock
                  </p>
                </div>
              </div>
            </div>
            <div role="listitem" className="slider--item w-dyn-item">
              <div
                style={{
                  backgroundColor:
                    "hsla(254.05714285714282, 98.87%, 65.29%, 1.00)",
                }}
                className="quote--card"
              >
                <div className="quote-content--wrapper">
                  <img
                    loading="lazy"
                    width="81"
                    height="50"
                    src="https://assets.website-files.com/641b3189771d28b3a1d81347/6440520cc79bf69736868ea8_zapper.svg"
                    alt=""
                    className="mb-32 logo-quote"
                  />
                  <h6 className="text-left text-white">
                    “With Swap API we never have to worry about new liquidity
                    sources coming out and the infrastructure overhead of
                    searching for the best trading routes. It’s also been super
                    easy for us to launch trading in other chains thanks to Swap
                    API being available in the major chains. 0x turnkey
                    solutions have allowed us to focus on other areas of our
                    product and make Zapper one of the most popular apps in
                    Web3.”
                  </h6>
                </div>
                <div>
                  <p className="text-white mb-0 text-medium">Justin D’Errico</p>
                  <p className="text-white mb-0">Lead Engineer at Zapper</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default WebThreeApplications
