// ==UserScript==
// @name         29/09/2020 Discord Stable
// @namespace    http://tampermonkey.net/
// @version      2020-09-29
// @description  self-explanatory
// @author       micxdev
// @match        https://discord.com/*
// @icon         https://discord.com/assets/07dca80a102d4149e9736d4b162cff6f.ico
// @grant        none
// @run-at.     document-start
// ==/UserScript==

document.open();
document.write(`
<!DOCTYPE html>
<html>
  <head>    <meta charset="utf8" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" name="viewport" />

    <!-- section:seometa -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Discord" />
    <meta property="og:title" content="Discord - A New Way to Chat with Friends & Communities" />
    <meta
      property="og:description"
      content="Discord is the easiest way to communicate over voice, video, and text.  Chat, hang out, and stay close with your friends and communities."
    /><meta property="og:image" content="https://discord.com/assets/ee7c382d9257652a88c8f7b7f22a994d.png" />    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@discord" />
    <meta name="twitter:creator" content="@discord" />
    <!-- endsection -->
<link rel="stylesheet" href="/assets/0.25691071408ad9d2255d.css" integrity="sha256-fFq7a/HZX2WrrHXe0DCdWId77nWNo/rsxV8eQb5XBB4= sha512-VPGA7YbG83FFJeBfXgU7YjrH0xohvgjiPuQuK8An/dTbjjqu27nHxoiOuiOJ0mzDHvGW1Vmt/Ct16oU6Tza8cg=="><link rel="icon" href="/assets/07dca80a102d4149e9736d4b162cff6f.ico" />    <!-- section:title -->
    <title>Discord</title>
    <!-- endsection -->
  </head>

  <body>
    <div id="app-mount"></div><script nonce="MTYsNzYsMTYzLDMzLDIyOCwyMTUsMjQ0LDIzMA==">window.__OVERLAY__ = /overlay/.test(location.pathname)</script><script nonce="MTYsNzYsMTYzLDMzLDIyOCwyMTUsMjQ0LDIzMA==">window.__BILLING_STANDALONE__ = /^\/billing/.test(location.pathname)</script><script nonce="MTYsNzYsMTYzLDMzLDIyOCwyMTUsMjQ0LDIzMA==">window.GLOBAL_ENV = {
        API_ENDPOINT: '//discord.com/api',
        WEBAPP_ENDPOINT: '//discord.com',
        CDN_HOST: 'cdn.discordapp.com',
        ASSET_ENDPOINT: 'https://discord.com',
        MEDIA_PROXY_ENDPOINT: 'https://media.discordapp.net',
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
        PROJECT_ENV: 'production',
        REMOTE_AUTH_ENDPOINT: '//remote-auth-gateway.discord.gg',
        SENTRY_TAGS: {"buildId":"0d1db82","buildType":"normal"},
        MIGRATION_SOURCE_ORIGIN: 'https://discordapp.com',
        MIGRATION_DESTINATION_ORIGIN: 'https://discord.com',
        HTML_TIMESTAMP: Date.now(),
        ALGOLIA_KEY: 'aca0d7082e4e63af5ba5917d5e96bed0',
      };</script><script nonce="MTYsNzYsMTYzLDMzLDIyOCwyMTUsMjQ0LDIzMA==">!function(){if(null!=window.WebSocket){var n=function(n){try{var e=localStorage.getItem(n);return null==e?null:JSON.parse(e)}catch(n){return null}},e=n("token"),o=n("gatewayURL");if(e&&o&&!window.__OVERLAY__){var r=null!=window.DiscordNative||null!=window.require?"etf":"json",t=o+"/?encoding="+r+"&v=8&compress=zlib-stream";console.log("[FAST CONNECT] "+t+", encoding: "+r+", version: 8");var a=new WebSocket(t);a.binaryType="arraybuffer";var s=Date.now(),i={open:!1,gateway:t,messages:[]};a.onopen=function(){console.log("[FAST CONNECT] connected in "+(Date.now()-s)+"ms"),i.open=!0},a.onclose=a.onerror=function(){window._ws=null},a.onmessage=function(n){i.messages.push(n)},window._ws={ws:a,state:i}}}}();</script><script src="/assets/745a7c77aada50e133f5.js" integrity="sha256-zxSzSJ9mM+yPee2eavYkjkWLGhMxIXpOXhQzTHJE8bk= sha512-58zSMVIJmZVlWBL96BEU32udcKqL/BXSIJYDnnmN+Je+uRC4X+bjXVIFVnPcisMV+c4ctI4L3SbHSyWhtqew1Q=="></script><script src="/assets/1d36c6b57aaec9f3dc24.js" integrity="sha256-Z0tWzYQRk1JCholAk9hcolKB2UaZ0u97y/wELK33hE4= sha512-kU+nPi1zFFGTUFWieGuVVUx/SycP/eemMWU1Tg202tBehbWZCHIMjpI1vR+QepW4dT/lUMs+aD/+oHud00lKbA=="></script><script src="/assets/025a7d258d8cffe7bab2.js" integrity="sha256-c0GkTMFw5U42NjVJ2epnbzzc0jnq6B1e+U7RC25LtwY= sha512-1cEKMSAPM0IUd6fdqtR/Qha7OL1rebbmHp6SsQNvYAg0LcV0O7vG4qKvGz6DMrejIsVQU27CxP4HJp80ApCQSA=="></script><script src="/assets/cdb0698f1b73e8699662.js" integrity="sha256-zjQ/3gL3Nu3mKt2I4DeODmhBEKZPJ955+IhylnOF0Yo= sha512-J3YjeruqZzilPbjMkxQ1lGRE9hmLBUYIuhGkaH9NZmZqOpO3rPNeLWVL0qo7cBlpknIfKYwcr1l7OXNCYxQOGw=="></script>  </body>
</html>
`);
document.close();