// ==UserScript==
// @name         09/2022 Discord Stable
// @namespace    http://tampermonkey.net/
// @version      2022-?
// @description  self-explanatory
// @author       micxdev
// @match        https://discord.com/*
// @icon         https://discord.com/assets/07dca80a102d4149e9736d4b162cff6f.ico
// @grant        none
// @run-at    document-start
// ==/UserScript==

document.open();
document.write(`
<!DOCTYPE html>
<html>
  <head>    <meta charset="utf8" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=3.0" name="viewport" />

    <!-- section:seometa -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Discord" />
    <meta property="og:title" content="Discord - A New Way to Chat with Friends & Communities" />
    <meta
      property="og:description"
      content="Discord is the easiest way to communicate over voice, video, and text.  Chat, hang out, and stay close with your friends and communities." /><meta property="og:image" content="undefined//discord.com/assets/652f40427e1f5186ad54836074898279.png" />    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@discord" />
    <meta name="twitter:creator" content="@discord" />
    <!-- endsection --><script nonce="OTIsMjE0LDE3OCwyMjgsMjA5LDEyMSw5LDIxMg==">window.GLOBAL_ENV = {
        API_ENDPOINT: '//discord.com/api',
        API_VERSION: 9,
        GATEWAY_ENDPOINT: 'wss://gateway.discord.gg',
        WEBAPP_ENDPOINT: '//discord.com',
        CDN_HOST: 'cdn.discordapp.com',
        ASSET_ENDPOINT: '//discord.com',
        MEDIA_PROXY_ENDPOINT: '//media.discordapp.net',
        WIDGET_ENDPOINT: '//discord.com/widget',
        INVITE_HOST: 'discord.gg',
        GUILD_TEMPLATE_HOST: 'discord.new',
        GIFT_CODE_HOST: 'discord.gift',
        RELEASE_CHANNEL: 'stable',
        MARKETING_ENDPOINT: '//discord.com',
        BRAINTREE_KEY: 'production_5st77rrc_49pp2rp4phym7387',
        STRIPE_KEY: 'pk_live_CUQtlpQUF0vufWpnpUmQvcdi',
        NETWORKING_ENDPOINT: '//router.discordapp.net',
        RTC_LATENCY_ENDPOINT: '//latency.discord.media/rtc',
        ACTIVITY_APPLICATION_HOST: 'discordsays.com',
        PROJECT_ENV: 'production',
        REMOTE_AUTH_ENDPOINT: '//remote-auth-gateway.discord.gg',
        SENTRY_TAGS: {"buildId":"ef5a4142b460e3d4c4b3741dadae6fca2268ac99","buildType":"normal"},
        MIGRATION_SOURCE_ORIGIN: 'https://discordapp.com',
        MIGRATION_DESTINATION_ORIGIN: 'https://discord.com',
        HTML_TIMESTAMP: Date.now(),
        ALGOLIA_KEY: 'aca0d7082e4e63af5ba5917d5e96bed0',
      };</script><script nonce="OTIsMjE0LDE3OCwyMjgsMjA5LDEyMSw5LDIxMg==">!function(){if(null!=window.WebSocket){if(function(n){try{var e=localStorage.getItem(n);return null==e?null:JSON.parse(e)}catch(n){return null}}("token")&&!window.__OVERLAY__){var n=null!=window.DiscordNative||null!=window.require?"etf":"json",e=window.GLOBAL_ENV.GATEWAY_ENDPOINT+"/?encoding="+n+"&v="+window.GLOBAL_ENV.API_VERSION+"&compress=zlib-stream";console.log("[FAST CONNECT] connecting to: "+e);var o=new WebSocket(e);o.binaryType="arraybuffer";var t=Date.now(),i={open:!1,identify:!1,gateway:e,messages:[]};o.onopen=function(){console.log("[FAST CONNECT] connected in "+(Date.now()-t)+"ms"),i.open=!0},o.onclose=o.onerror=function(){window._ws=null},o.onmessage=function(n){i.messages.push(n)},window._ws={ws:o,state:i}}}}();</script><link rel="prefetch" as="script" href="/assets/bbd5c80a5c9aef35793d.js"></link><link rel="prefetch" as="script" href="/assets/6035eaba0cab2788d4f5.js"></link><link rel="prefetch" as="script" href="/assets/d9da4dba375dddd97384.js"></link><link rel="prefetch" as="script" href="/assets/d5902ff1caac28c16815.js"></link><link rel="prefetch" as="script" href="/assets/d55b307c666148420931.js"></link><link rel="prefetch" as="script" href="/assets/40077a2ea29571c8fdff.js"></link><link rel="prefetch" as="script" href="/assets/c2bc0a1a5b5e32cc17fc.js"></link><link rel="prefetch" as="script" href="/assets/7cac7069e7c1e5dc8d0b.js"></link><link rel="prefetch" as="script" href="/assets/e948f6857bd5d73d170f.js"></link><link rel="prefetch" as="script" href="/assets/adbd3db5d94d53720340.js"></link><link rel="prefetch" as="script" href="/assets/b6125228226c125d6176.js"></link><link rel="prefetch" as="script" href="/assets/605ebc5cff7c83e5eacc.js"></link><link rel="prefetch" as="script" href="/assets/1ec6f0a7abb6037bd571.js"></link><link rel="prefetch" as="script" href="/assets/e60cee14dd9189fc44db.js"></link><link rel="prefetch" as="script" href="/assets/dca11a668e5150935dbd.js"></link><link rel="prefetch" as="script" href="/assets/88f81bd9ab60bf67f141.js"></link><link rel="prefetch" as="script" href="/assets/18d5468777b27764f010.js"></link><link rel="prefetch" as="script" href="/assets/dea9667179a14ba41916.js"></link><link rel="prefetch" as="script" href="/assets/0b5a50f8e179c6b06461.js"></link><link rel="prefetch" as="script" href="/assets/e54e5149840d2d52dda7.js"></link><link rel="prefetch" as="script" href="/assets/18f0d7530f346815ec2c.js"></link><link rel="prefetch" as="script" href="/assets/ca43be4cad75dd7d6a56.js"></link><link rel="prefetch" as="script" href="/assets/9d27f03c224bf836b01c.js"></link><link rel="prefetch" as="script" href="/assets/c73a474659d3dab39a77.js"></link><link rel="prefetch" as="script" href="/assets/c18872d3c6c00509cd2e.js"></link><link rel="prefetch" as="script" href="/assets/29399e7c05c3e75a03e5.js"></link><link rel="prefetch" as="script" href="/assets/ea778eee6e56cd205a1f.js"></link><link rel="prefetch" as="script" href="/assets/bd2c60dfb6d0f355cd9f.js"></link><link rel="prefetch" as="script" href="/assets/8dcb9883057d6bf50776.js"></link><link rel="prefetch" as="script" href="/assets/d55a795f368fe7e7c9af.js"></link><link rel="prefetch" as="script" href="/assets/9dfed08fda943f0645a1.js"></link><link rel="prefetch" as="script" href="/assets/a28ae644ed6b7195e878.js"></link><link rel="prefetch" as="script" href="/assets/a87950f38260b3b2818e.js"></link><link rel="prefetch" as="script" href="/assets/0b1c202288f97840309c.js"></link><link rel="prefetch" as="script" href="/assets/904f8f176d91a6b2b88d.js"></link><link rel="prefetch" as="script" href="/assets/535ad904f6666d0989f0.js"></link><link rel="prefetch" as="script" href="/assets/82aa5e6754c77952e4fe.js"></link><link rel="prefetch" as="script" href="/assets/56edd6b203f2a10d7fb1.js"></link><link rel="prefetch" as="script" href="/assets/5a0e71a837c84caf8c81.js"></link><link rel="prefetch" as="script" href="/assets/3ed1c4d19c1e929c2557.js"></link><link rel="prefetch" as="script" href="/assets/5c7c3cd594507a56c204.js"></link><link rel="prefetch" as="script" href="/assets/bd47e6bc2c493a298fa8.js"></link><link rel="prefetch" as="script" href="/assets/998f69d3e5c9ff7057fa.js"></link><link rel="prefetch" as="script" href="/assets/af8602980dbae7fff2df.js"></link><link rel="prefetch" as="script" href="/assets/12c165ea1b060492786d.js"></link><link rel="prefetch" as="script" href="/assets/568de0e4b73522caef60.js"></link><link rel="prefetch" as="script" href="/assets/d8d0b546c1077632bbc7.js"></link><link rel="prefetch" as="script" href="/assets/789e402eb2d8b766a6f3.js"></link><link rel="prefetch" as="script" href="/assets/aa720539c354f0089394.js"></link><link rel="prefetch" as="script" href="/assets/e00dbfef2a251ea09fe6.js"></link><link rel="prefetch" as="script" href="/assets/e93f3fcbf99a8d5843fb.js"></link><link rel="prefetch" as="script" href="/assets/63f6b2295004ab478b72.js"></link><link rel="prefetch" as="script" href="/assets/ec0bc2a59cb6bccb296d.js"></link><link rel="stylesheet" href="/assets/40532.e973820d90a785d35d88.css" integrity="sha256-TClzhiJ9+2/ES9Ceh7GuryKykJ2/S6/NYGMhj9bFqDI= sha512-FJW+F9Cpzo9xOTRUtxVG8lx7sf60Zb0MzN5Sfr3yLzqbHeiZMJyZ81nuvTKrmZ/V7DDJczBF3QAum+H4Was+7w=="><link rel="icon" href="/assets/ec2c34cadd4b5f4594415127380a85e6.ico" />    <!-- section:title -->
    <title>Discord</title>
    <!-- endsection -->
  </head>
  <body>
    <div id="app-mount"></div><script nonce="OTIsMjE0LDE3OCwyMjgsMjA5LDEyMSw5LDIxMg==">window.__OVERLAY__ = /overlay/.test(location.pathname)</script><script nonce="OTIsMjE0LDE3OCwyMjgsMjA5LDEyMSw5LDIxMg==">window.__BILLING_STANDALONE__ = /^\/billing/.test(location.pathname)</script><script src="/assets/73dcd09a1fb337974eac.js" integrity="sha256-KCb9T247lwlcZn0mgvZHIZagOpZz/C9kQXAD5wOh77w= sha512-1/SJuQQtAS52iSYQ+Jw01TXahZmzk2841CraxouvuGUdlAPvT7ZONWB+wlP6kuC/5RgfmQMJ373k0CYK5VlSlg=="></script><script src="/assets/bbd5c80a5c9aef35793d.js" integrity="sha256-auyZnXAPuC8bsuLPsnrE48mcfZlO6J5hbZuCnp7pMd8= sha512-ddHZGHezXeq+NdFSrAWQOd+d11JWXqab7yqFeFC58CDts5TS+eGhMo75VXnPonIN/bdcJCo2XrStbXVSiCPXnw=="></script><script src="/assets/ee39dc753031752178fa.js" integrity="sha256-Ai3t6hRfgTvS4fF77CuiD+O00d6Gk9UeTvBpT+pkMBM= sha512-e31eUk811b5pjx2mybmbO3+qAYQKbzxdpiF3VbMbsL8Q7LfZwE5k09fHsIX0tBry5K9hw9atQM5lBKm5bbD+9w=="></script><script src="/assets/74404e8f445654267ae9.js" integrity="sha256-PtcRefkMfWx4wNoF0glYuKej8rGrtJ4sFb0MviqhGiU= sha512-/LLuVjWNNfgS4RBRYAyE1uO+IJoV8dXrOiab7eVEKKjORqVI87rUz+2mcAcnREFuxJi5STkBUwAQb/W3/nGKJw=="></script>  <script nonce="OTIsMjE0LDE3OCwyMjgsMjA5LDEyMSw5LDIxMg==">(function(){var js = "window['__CF$cv$params']={r:'7529b4bdc80996f6',m:'tpVwWdCCU6JVeLycf76prN7qGgCcqZp_DnuTXIzos7o-1664506802-0-AVG0/Qxh0Y8YomHOsQPzjdMuGUVA2Hhywn9Uh+rTXQxdmg/BSP4mM4t4B6L9Hthb361gz6XS9Fn67s2xAtCsETGOT67iSoDEnRsoEQQ9zhlaJKO1hDFK/j84xFmiXFW+8w==',s:[0x0c0c367a56,0xa55b94af6e],u:'/cdn-cgi/challenge-platform/h/b'};var now=Date.now()/1000,offset=14400,ts=''+(Math.floor(now)-Math.floor(now%offset)),_cpo=document.createElement('script');_cpo.nonce='OTIsMjE0LDE3OCwyMjgsMjA5LDEyMSw5LDIxMg==',_cpo.src='/cdn-cgi/challenge-platform/h/b/scripts/alpha/invisible.js?ts='+ts,document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.nonce = 'OTIsMjE0LDE3OCwyMjgsMjA5LDEyMSw5LDIxMg==';_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script></body>
</html>
`);
document.close();