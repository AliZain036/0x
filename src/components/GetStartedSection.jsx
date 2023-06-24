import React from "react"

const GetStartedSection = () => {
  return (
    <div className="create-acc-section container max-w-[1120px] my-16">
      <div className="rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[16px] rounded-br-[16px] p-[72px] bg-[#26272b]">
        <div className="cta-heading">
          <span className="text-[#fafafa]">Ready</span> to start building?
        </div>
        <div className="cta-text mb-8">
          Create a 0x account and get started, for free, in less than five
          minutes.{" "}
        </div>
        <a
          href="https://dashboard.0x.org"
          target="_blank"
          className="primary-button text-black bg-white"
        >
          Create account
        </a>
      </div>
      <div className="cta-card cta-card-newsletter bg-[#c8d4fa] rounded-bl-[40px] rounded-br-[40px] rounded-tl-[16px] rounded-tr-[16px] p-[72px]">
        <div className="cta-heading cta-heading-building text-[#0e106d]">
          Join our newsletter
        </div>
        <div className="cta-text cta-text-buliding mb-8">
          Stay in the know on the latest alpha, news and product updates.
        </div>
        <div className="cta-email-container">
          <div className="form-block w-form max-w-[432px] mb-2">
            <form
              id="wf-form-newsletter-form"
              name="wf-form-newsletter-form"
              data-name="newsletter-form"
              method="get"
              data-wf-page-id="64169b2e826a425f3ced9516"
              data-wf-element-id="9be179a3-36b8-4d75-1fc4-301bdea99815"
              aria-label="newsletter-form"
            >
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  className="cta-email-input-placeholder w-input"
                  maxlength="256"
                  name="email"
                  data-name="email"
                  placeholder="Enter your email"
                  id="email-3"
                  required=""
                />
                <input
                  type="submit"
                  value=""
                  data-wait="Please wait..."
                  className="submit-button w-button"
                />
              </div>
            </form>
            <div
              className="success-message w-form-done d-none"
              tabindex="-1"
              role="region"
              aria-label="newsletter-form success"
            >
              <div className="div-block-42">
                <img
                  src="https://assets.website-files.com/640bf70a17d12b42d97a052b/641754c4babae481f6f17c3b_icon-green-check.svg"
                  loading="lazy"
                  alt=""
                />
                <div className="text-block-30">Submission sent!</div>
              </div>
            </div>
            <div
              className="error-message w-form-fail d-none"
              tabindex="-1"
              role="region"
              aria-label="newsletter-form failure"
            >
              <div className="text-block-31">Oops! Something went wrong.</div>
            </div>
          </div>
          <div className="cta-email-privacy-text">
            To learn how we manage your data, visit our{" "}
            <a
              href="/legal/privacy-notice"
              className="text-[#0e106d]"
              style={{ textDecoration: "none" }}
            >
              Privacy Notice
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedSection
