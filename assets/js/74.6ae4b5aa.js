(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{630:function(t,e,r){"use strict";r.r(e);var o=r(0),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"modules-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modules-overview"}},[t._v("#")]),t._v(" Modules Overview")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",[t._v("Note that only the custom modules related to perpetual swaps are active on testnet: "),r("code",[t._v("common")]),t._v(", "),r("code",[t._v("epochs")]),t._v(", "),r("code",[t._v("pricefeed")]),t._v(", "),r("code",[t._v("vpool")]),t._v(", and "),r("code",[t._v("perp")]),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"nibiru-custom-modules"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nibiru-custom-modules"}},[t._v("#")]),t._v(" Nibiru Custom Modules")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Module")]),t._v(" "),r("th",[t._v("Active?")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/common",target:"_blank",rel:"noopener noreferrer"}},[t._v("common"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Holds helper and utility functions to be utilized by other "),r("code",[t._v("x/")]),t._v(" cosmos-sdk modules.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/dex",target:"_blank",rel:"noopener noreferrer"}},[t._v("dex"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("⭕️")]),t._v(" "),r("td",[t._v("Responsible for creating, joining, and exiting liquidity pools. It also allows users to swap between two assets in an existing pool. It's a fully functional AMM.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/epochs",target:"_blank",rel:"noopener noreferrer"}},[t._v("epochs"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Often in the SDK, we would like to run certain code every-so often. The purpose of "),r("code",[t._v("epochs")]),t._v(" module is to allow other modules to set that they would like to be signaled once every period. So another module can specify it wants to execute code once a week, starting at UTC-time = x. "),r("code",[t._v("epochs")]),t._v(" creates a generalized epoch interface to other modules so that they can easily be signalled upon such events.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/incentivization",target:"_blank",rel:"noopener noreferrer"}},[t._v("incentivization"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("⭕️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/lockup",target:"_blank",rel:"noopener noreferrer"}},[t._v("lockup"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("⭕️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/oracle",target:"_blank",rel:"noopener noreferrer"}},[t._v("oracle"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("⭕️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"./perp"}},[t._v("perp")])]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Powers the Nibi-Perps exchange. This module enables traders to open long and short leveraged positions and houses all of the PnL calculation and liquidation logic.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/pricefeed",target:"_blank",rel:"noopener noreferrer"}},[t._v("pricefeed"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Handles the posting of prices for various asset pairs by whitelisted oracles and the logic for querying these prices.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/stablecoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("stablecoin"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("⭕️")]),t._v(" "),r("td",[t._v("Resonsible for handling mint and redeem transactions with NUSD.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/NibiruChain/nibiru/tree/master/x/testutil",target:"_blank",rel:"noopener noreferrer"}},[t._v("testutil"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Helper functions for unit and integration tests.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"./vpool"}},[t._v("vpool")])]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("The vpool module manages the virtual AMM pools (vpools) that support Nibi-Perps.")])])])]),t._v(" "),r("h2",{attrs:{id:"modules-cosmos-sdk"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modules-cosmos-sdk"}},[t._v("#")]),t._v(" Modules — Cosmos-SDK")]),t._v(" "),r("p",[t._v("Production-grade modules imported from the Cosmos-SDK:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Module")]),t._v(" "),r("th",[t._v("Active?")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/auth",target:"_blank",rel:"noopener noreferrer"}},[t._v("auth"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Authentication of accounts and transactions for Cosmos SDK application.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/authz",target:"_blank",rel:"noopener noreferrer"}},[t._v("authz"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Authorization for accounts to perform actions on behalf of other accounts.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/bank",target:"_blank",rel:"noopener noreferrer"}},[t._v("bank"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Token transfer functionalities.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/base",target:"_blank",rel:"noopener noreferrer"}},[t._v("base"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/capability",target:"_blank",rel:"noopener noreferrer"}},[t._v("capability"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Object capability implementation.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/crisis",target:"_blank",rel:"noopener noreferrer"}},[t._v("crisis"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Halting the blockchain under certain circumstances (e.g. if an invariant is broken).")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/crypto",target:"_blank",rel:"noopener noreferrer"}},[t._v("crypto"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/distribution",target:"_blank",rel:"noopener noreferrer"}},[t._v("distribution"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Fee distribution, and staking token provision distribution.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/evidence",target:"_blank",rel:"noopener noreferrer"}},[t._v("evidence"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Evidence handling for double signing, misbehaviour, etc.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/feegrant",target:"_blank",rel:"noopener noreferrer"}},[t._v("feegrant"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/genutil",target:"_blank",rel:"noopener noreferrer"}},[t._v("genutil"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/gov",target:"_blank",rel:"noopener noreferrer"}},[t._v("gov"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("On-chain proposals and voting.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/mint",target:"_blank",rel:"noopener noreferrer"}},[t._v("mint"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Creation of tokens native to the chain.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/params",target:"_blank",rel:"noopener noreferrer"}},[t._v("params"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Globally available parameter store.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/slashing",target:"_blank",rel:"noopener noreferrer"}},[t._v("slashing"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Validator punishment mechanisms.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/staking",target:"_blank",rel:"noopener noreferrer"}},[t._v("staking"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Proof-of-Stake layer for public blockchains.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/tx",target:"_blank",rel:"noopener noreferrer"}},[t._v("tx"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/upgrade",target:"_blank",rel:"noopener noreferrer"}},[t._v("upgrade"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td",[t._v("Software upgrades handling and coordination.")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.45.6/x/vesting",target:"_blank",rel:"noopener noreferrer"}},[t._v("vesting"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("✔️")]),t._v(" "),r("td")])])]),t._v(" "),r("h2",{attrs:{id:"inter-blockchain-communcation-ibc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inter-blockchain-communcation-ibc"}},[t._v("#")]),t._v(" Inter-Blockchain Communcation (IBC)")]),t._v(" "),r("p",[t._v("The IBC module has its "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go",target:"_blank",rel:"noopener noreferrer"}},[t._v("own repository, "),r("code",[t._v("ibc-go")]),r("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);