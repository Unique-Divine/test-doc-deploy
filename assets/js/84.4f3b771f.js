(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{644:function(t,a,o){"use strict";o.r(a);var e=o(0),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"cosmovisor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmovisor"}},[t._v("#")]),t._v(" Cosmovisor")]),t._v(" "),o("p",[t._v("Cosmovisor is process manager for Cosmos-SDK application binaries that monitors the governance module for incoming chain upgrade proposals.")]),t._v(" "),o("p",[t._v("If "),o("code",[t._v("cosmovisor")]),t._v(" sees a proposal get approved, it can automatically download the new binary, stop the currently  running binary, switch from the old binary to the new one, and finally restart the node with the new binary.")]),t._v(" "),o("p",[t._v("Cosmovisor allows you to download binaries ahead of time for chain upgrades, meaning that you can do "),o("strong",[t._v("zero (or close to zero) downtime chain upgrades")]),t._v(". It's also useful if your timezone doesn't align well with a chain upgrade.")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[t._v("It's recommended to use Cosmovisor to run your node, however you can alternatively use "),o("code",[t._v("systemd")]),t._v(".")])]),t._v(" "),o("p",[t._v("Rather than having to do stressful DevOps tasks late at night, it's better if you can automate them away, and that's what Cosmovisor tries to do. It's wise to go through the "),o("code",[t._v("cosmovisor")]),t._v(" setup instructions on testnet before running a full-node on mainnet.")]),t._v(" "),o("h2",{attrs:{id:"cosmovisor-setup-option-1-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cosmovisor-setup-option-1-recommended"}},[t._v("#")]),t._v(" Cosmovisor Setup (Option 1, recommended)")]),t._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[t._v("If you have not installed "),o("code",[t._v("nibid")]),t._v(", please start with the instructions on building the "),o("a",{attrs:{href:"../../dev/cli/nibid-binary"}},[o("code",[t._v("nibid")]),t._v(" binary")]),t._v(".")])]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[t._v("When using Cosmovisor, make sure that you do not have auto download of binaries on.")])]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Install Cosmovisor"),o("br"),t._v("\nOption 1 - From source")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkawpjZCBjb3Ntb3Mtc2RrCmdpdCBjaGVja291dCBjb3Ntb3Zpc29yL3YxLjIuMAptYWtlIGNvc21vdmlzb3IKY3AgY29zbW92aXNvci9jb3Ntb3Zpc29yICRHT1BBVEgvYmluL2Nvc21vdmlzb3IKY2QgJEhPTUUK"}}),t._v(" "),o("p",[t._v("Option 2 - With "),o("code",[t._v("go get")]),t._v(":")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29zbW92aXNvci9jbWQvY29zbW92aXNvcgo="}})],1),t._v(" "),o("li",[o("p",[t._v("Set up enviroment variables")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZXhwb3J0IERBRU1PTl9OQU1FPW5pYmlkCmV4cG9ydCBEQUVNT05fSE9NRT0kSE9NRS8ubmliaWQKc291cmNlIH4vLnByb2ZpbGUK"}})],1),t._v(" "),o("li",[o("p",[t._v("Create required directories")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIgLXAgJERBRU1PTl9IT01FL2Nvc21vdmlzb3IvZ2VuZXNpcy9iaW4KbWtkaXIgLXAgJERBRU1PTl9IT01FL2Nvc21vdmlzb3IvdXBncmFkZXMK"}})],1),t._v(" "),o("li",[o("p",[t._v("Add the genesis version of the binary (currently it is "),o("code",[t._v("v0.15")]),t._v("). You can verify your binary location with "),o("code",[t._v("which nibid")]),t._v(" command. For the default location you can use the example below:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3Agfi9nby9iaW4vbmliaWQgJERBRU1PTl9IT01FL2Nvc21vdmlzb3IvZ2VuZXNpcy9iaW4K"}})],1),t._v(" "),o("li",[o("p",[t._v("Create the service for the Cosmovisor")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyB0ZWUgL2V0Yy9zeXN0ZW1kL3N5c3RlbS9jb3Ntb3Zpc29yLW5pYmlydS5zZXJ2aWNlJmx0OyZsdDtFT0YKW1VuaXRdCkRlc2NyaXB0aW9uPUNvc21vdmlzb3IgZm9yIE5pYmlydSBOb2RlClJlcXVpcmVzPW5ldHdvcmstb25saW5lLnRhcmdldApBZnRlcj1uZXR3b3JrLW9ubGluZS50YXJnZXQKCltTZXJ2aWNlXQpUeXBlPWV4ZWMKVXNlcj0mbHQ7eW91cl91c2VyJmd0OwpHcm91cD0mbHQ7eW91cl91c2VyX2dyb3VwJmd0OwpFeGVjU3RhcnQ9L2hvbWUvJmx0O3lvdXJfdXNlciZndDsvZ28vYmluL2Nvc21vdmlzb3IgcnVuIHN0YXJ0IC0taG9tZSAvaG9tZS8mbHQ7eW91cl91c2VyJmd0Oy8ubmliaWQKUmVzdGFydD1vbi1mYWlsdXJlClJlc3RhcnRTZWM9MwpFbnZpcm9ubWVudD0mcXVvdDtEQUVNT05fTkFNRT1uaWJpZCZxdW90OwpFbnZpcm9ubWVudD0mcXVvdDtEQUVNT05fSE9NRT0vaG9tZS8mbHQ7eW91cl91c2VyJmd0Oy8ubmliaWQmcXVvdDsKRW52aXJvbm1lbnQ9JnF1b3Q7REFFTU9OX0FMTE9XX0RPV05MT0FEX0JJTkFSSUVTPWZhbHNlJnF1b3Q7CkVudmlyb25tZW50PSZxdW90O0RBRU1PTl9SRVNUQVJUX0FGVEVSX1VQR1JBREU9dHJ1ZSZxdW90OwpFbnZpcm9ubWVudD0mcXVvdDtEQUVNT05fTE9HX0JVRkZFUl9TSVpFPTUxMiZxdW90OwpMaW1pdE5PRklMRT02NTUzNQoKW0luc3RhbGxdCldhbnRlZEJ5PW11bHRpLXVzZXIudGFyZ2V0CkVPRgo="}}),t._v(" "),o("p",[t._v("Enable the service:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBzeXN0ZW1jdGwgZGFlbW9uLXJlbG9hZApzdWRvIHN5c3RlbWN0bCBlbmFibGUgY29zbW92aXNvci1uaWJpcnUK"}})],1)]),t._v(" "),o("hr"),t._v(" "),o("h2",{attrs:{id:"nibid-systemd-option-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nibid-systemd-option-2"}},[t._v("#")]),t._v(" nibid systemd (Option 2)")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Create a service file")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyB0ZWUgL2V0Yy9zeXN0ZW1kL3N5c3RlbS9uaWJpcnUuc2VydmljZSZsdDsmbHQ7RU9GCltVbml0XQpEZXNjcmlwdGlvbj1OaWJpcnUgTm9kZQpSZXF1aXJlcz1uZXR3b3JrLW9ubGluZS50YXJnZXQKQWZ0ZXI9bmV0d29yay1vbmxpbmUudGFyZ2V0CgpbU2VydmljZV0KVHlwZT1leGVjClVzZXI9Jmx0O3lvdXJfdXNlciZndDsKR3JvdXA9Jmx0O3lvdXJfdXNlcl9ncm91cCZndDsKRXhlY1N0YXJ0PS9ob21lLyZsdDt5b3VyX3VzZXImZ3Q7L2dvL2Jpbi9uaWJpZCBzdGFydCAtLWhvbWUgL2hvbWUvJmx0O3lvdXJfdXNlciZndDsvLm5pYmlkClJlc3RhcnQ9b24tZmFpbHVyZQpFeGVjUmVsb2FkPS9iaW4va2lsbCAtSFVQICRNQUlOUElECktpbGxTaWduYWw9U0lHVEVSTQpQZXJtaXNzaW9uc1N0YXJ0T25seT10cnVlCkxpbWl0Tk9GSUxFPTY1NTM1CgpbSW5zdGFsbF0KV2FudGVkQnk9bXVsdGktdXNlci50YXJnZXQKRU9GCg=="}})],1),t._v(" "),o("li",[o("p",[t._v("Enable the service")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c3VkbyBzeXN0ZW1jdGwgZGFlbW9uLXJlbG9hZApzdWRvIHN5c3RlbWN0bCBlbmFibGUgbmliaXJ1Cg=="}})],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);