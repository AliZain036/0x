import React from "react"

const Header = () => {
  return (
    <>
      <nav className="z-10 bg-[#fcfcfc] sticky top-0 header rounded-bl-[40px] rounded-br-[40px]">
        <div className="container navbar-lg">
          <div className="logo-container">
            <a
              href="/"
              aria-current="page"
              className="w-inline-block w--current"
            >
              <img
                src="https://assets.website-files.com/640bf70a17d12b42d97a052b/640bfd7d8441821c4cd20210_logo.svg"
                loading="lazy"
                width={47}
                alt='0x Logo wordmark, a bold "zero" and "ex"'
                className="h-28 max-w-full px-0 border-0"
              />
            </a>
          </div>
          <nav role="navigation" className="nav-menu-container">
            <div
              className="flex button-normal button-hover w-button gap-2"
              style={{
                borderTopLeftRadius: "22px",
                borderBottomLeftRadius: "22px",
              }}
            >
              <a href="" className="text-decoration-none text-black">
                Products
              </a>
              <img
                src="https://assets.website-files.com/640bf70a17d12b42d97a052b/640febc9acbad58858d72891_icon-arrow-down-800.svg"
                alt=""
                width={10}
                loading="lazy"
              />
            </div>
            <div>
              <a href="" className="button-normal button-hover w-button">
                Solutions
              </a>
            </div>
            <div>
              <a href="" className="button-normal button-hover w-button">
                Pricing
              </a>
            </div>
            <div className="flex button-normal button-hover w-button gap-2">
              <a href="" className="text-decoration-none text-black">
                Docs
              </a>
              <img
                src="https://assets.website-files.com/640bf70a17d12b42d97a052b/640febc93f4bfba547eaf378_icon-arrow-up-right-800.svg"
                alt=""
                width={10}
                loading="lazy"
              />
            </div>
            <div>
              <a
                href=""
                className="button-normal button-hover w-button"
                style={{
                  borderTopRightRadius: "22px",
                  borderBottomRightRadius: "22px",
                }}
              >
                Content Hub
              </a>
            </div>
          </nav>
          <div className="flex items-center">
            <div>
              <a
                href=""
                className="button-normal button-hover w-button"
                style={{
                  borderTopLeftRadius: "22px",
                  borderBottomLeftRadius: "22px",
                }}
              >
                Contact us
              </a>
            </div>
            <div>
              <a
                href=""
                className="button-normal button-hover w-button go-to-dashboard-button hover:bg-red-600"
                style={{
                  borderTopRightRadius: "22px",
                  borderBottomRightRadius: "22px",
                  backgroundColor: "#26272b",
                  fontWeight: "500",
                  color: "#fff",
                  letterSpacing: ".2px",
                }}
              >
                Go to dashboard
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-center items-center">
        <a
          href="http://0xProtocol.org"
          target="_blank"
          className="text-black text-decoration-none"
        >
          <div className="announcement">
            <div className="announcement-chicklet">
              <div className="announcement-chicklet-text text-[#f4f4f5]">
                NEW
              </div>
            </div>
            <div className="announcement-text">
              <strong>0x</strong> Protocol, Explorer and Governance have moved
              to 0xProtocol.org
            </div>
            <img
              src="https://assets.website-files.com/640bf70a17d12b42d97a052b/642788716a10ec49f94e7497_icon-arrow-right-grey-800.svg"
              loading="lazy"
              alt=""
            />
          </div>
        </a>
      </div>
    </>
  )
}

export default Header
