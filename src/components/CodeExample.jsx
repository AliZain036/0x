import React from "react"

const CodeExample = () => {
  return (
    <div className="bg-[#26272b] rounded-tl-[40px] rounded-tr-[40px]">
      <div className="full-width-inner-container container">
        <div className="py-[180px] font-[Roboto]">
          {/* <div className="copy-to-clipboard-script w-embed w-script"></div> */}
          <div className="code-example-inner-wrapper row g-5 md:flex-row lg:flex-row-reverse">
          <div className="code-example-text-section col-12 col-lg-6">
              <div className="px-8">
                  <h2 className="text-white">
                    Enable
                    <br />
                    <span className="text-[#a2ffc1]">crypto trading</span>
                    <br />
                    with a few
                    <br />
                    lines of code
                  </h2>
                  <div className="div-block-24">
                    <a
                      href="/docs"
                      target="_blank"
                      className="primary-button neon w-button"
                    >
                      Read the docs
                    </a>
                  </div>
              </div>
            </div>
            <div className="code-example-code-section homepage col-lg-6 col-12 rounded-[24px] bg-[#18181b]">
              <div className="code-example-curl-card">
                <div className="flex justify-between items-center">
                  <div className="text-[#70707b]">Get price quote</div>
                  <div
                    id="copy-curl-example-button"
                    className="code-example-copy-button text-[#a2ffc1]"
                  >
                    Copy to clipboard
                  </div>
                </div>
                <div className="text-white mb-4">
                  <span className="text=[#a2ffc1]">curl</span>{" "}
                  https://api.0x.org/swap/v1/quote
                </div>
                <div className="code-example-params-seciont">
                  <div className="code-example-parameter">
                    <div className="code-example-parameter-header">
                      buyAmount
                    </div>
                    <div className="code-example-parameter-value">100</div>
                  </div>
                  <div className="code-example-parameter">
                    <div className="code-example-parameter-header">
                      buyToken
                    </div>
                    <div className="code-example-parameter-value">DAI</div>
                  </div>
                  <div className="code-example-parameter">
                    <div className="code-example-parameter-header">
                      sellToken
                    </div>
                    <div className="code-example-parameter-value">USDC</div>
                  </div>
                </div>
              </div>
              <div className="code-example-code-block-wrapper relative">
                <div className="code-block-top-fade"></div>
                <div className="code-block-bottom-fade"></div>
                <div className="code-block-code">
                  <div className="code-scroll-wrapper">
                    <div className="code-json">
                      <span>{"{"}</span>
                      <br /> &nbsp; &nbsp;
                      <span className="code-example-field-name">
                        "chainId":
                      </span>{" "}
                      1,
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "price":
                      </span>{" "}
                      "0.9998894159683656",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "guaranteedPrice":
                      </span>{" "}
                      "0.989890521808681944",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "estimatedPriceImpact":
                      </span>{" "}
                      "0.0503",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "to":
                      </span>{" "}
                      "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "data":
                      </span>{" "}
                      "0x6af479b200000000000000000000000000000000",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "value":
                      </span>{" "}
                      "0",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "gas":
                      </span>{" "}
                      "119595",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "estimatedGas":
                      </span>{" "}
                      "119595",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "gasPrice":
                      </span>{" "}
                      "27000000000",
                      <br />
                      &nbsp;{" "}
                      <span className="code-example-field-name">
                        "protocolFee":
                      </span>{" "}
                      "0",
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "buyTokenAddress":
                      </span>{" "}
                      "0x6b175474e89094c44da98b954eedeac495271d0f", &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "sellTokenAddress":
                      </span>{" "}
                      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "buyAmount":
                      </span>{" "}
                      "99745615969657880000",
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "sellAmount":
                      </span>{" "}
                      "100000000",
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "sources":
                      </span>{" "}
                      <span>{"["}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"{"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "name":
                      </span>{" "}
                      "Uniswap_V2",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "proportion":
                      </span>{" "}
                      "1"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"{"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "name":
                      </span>{" "}
                      "Curve",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "proportion":
                      </span>{" "}
                      "0"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"{"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "name":
                      </span>{" "}
                      "Balancer",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "proportion":
                      </span>{" "}
                      "0"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"{"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "name":
                      </span>{" "}
                      "Balancer_V2",
                      <br />
                      &nbsp;&nbsp; &nbsp; &nbsp;
                      <span className="code-example-field-name">
                        "proportion":
                      </span>{" "}
                      "0"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;<span>{"]"}</span>,<br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "orders":
                      </span>{" "}
                      [
                      <br />
                      &nbsp;&nbsp;&nbsp; <span>{"{"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "type":
                      </span>{" "}
                      0,
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "source":
                      </span>{" "}
                      "Uniswap_V2",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "makerToken":
                      </span>{" "}
                      "0x6b175474e89094c44da98b954eedeac495271d0f",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "takerToken":
                      </span>{" "}
                      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "makerAmount":
                      </span>{" "}
                      "99745615969657880000",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "takerAmount":
                      </span>{" "}
                      "100000000",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "fillData":
                      </span>{" "}
                      <span>{"{"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "tokenAddressPath":
                      </span>{" "}
                      <span>{"["}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"0x6b175474e89094c44da98b954eedeac495271d0f"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>{"]"}</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "router":
                      </span>{" "}
                      "0xf164fc0ec4e93095b804a4795bbe1e041497b92a"
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span>,
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "fill":
                      </span>{" "}
                      <span>{"{"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "input":
                      </span>{" "}
                      "100000000",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "output":
                      </span>{" "}
                      "99745615969657880000",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "adjustedOutput":
                      </span>{" "}
                      "96801237004628048423",
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "gas"
                      </span>: <span className="text-span-26">90000</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span>{"}"}</span>
                      <br />
                      &nbsp;&nbsp;],
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "allowanceTarget":
                      </span>{" "}
                      "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "decodedUniqueId":
                      </span>{" "}
                      "f784c3f24d-1678769219",
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "sellTokenToEthRate":
                      </span>{" "}
                      "1678.50772",
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "buyTokenToEthRate":
                      </span>{" "}
                      "1677.70881198281001559",
                      <br />
                      &nbsp;&nbsp;
                      <span className="code-example-field-name">
                        "expectedSlippage":
                      </span>{" "}
                      <span className="text-span-27">null</span>
                      <br />
                      <span>{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeExample
