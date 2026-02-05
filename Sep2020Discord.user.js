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
<link rel="stylesheet" href="/assets/0.aaa69677ce5d58ed1598.css" integrity="sha256-yfL78SCYcMDEN9Oj+smckQbdVOqjliJRjaqkPFrn9sc= sha512-WBkyKpvmECS51Vg1ovl+f7rtfDfcUJvBa8jL1V9uUMyliS+efp/0eeIs0BE6wYYj4mfjuY7eyI63BFlbMrQTfg=="><link rel="icon" href="/assets/07dca80a102d4149e9736d4b162cff6f.ico" />    <!-- section:title -->
    <title>Discord</title>
    <!-- endsection -->
  </head>

  <body>
    <div id="app-mount"></div><script nonce="MjA2LDE2MiwxOTksMTIyLDY1LDEzLDIwMSw3Ng==">window.__OVERLAY__ = /overlay/.test(location.pathname)</script><script nonce="MjA2LDE2MiwxOTksMTIyLDY1LDEzLDIwMSw3Ng==">window.__BILLING_STANDALONE__ = /^\/billing/.test(location.pathname)</script><script nonce="MjA2LDE2MiwxOTksMTIyLDY1LDEzLDIwMSw3Ng==">window.GLOBAL_ENV = {
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
        SENTRY_TAGS: {"buildId":"10c01a7","buildType":"normal"},
        MIGRATION_SOURCE_ORIGIN: 'https://discordapp.com',
        MIGRATION_DESTINATION_ORIGIN: 'https://discord.com',
        HTML_TIMESTAMP: Date.now(),
        ALGOLIA_KEY: 'aca0d7082e4e63af5ba5917d5e96bed0',
      };</script><script nonce="MjA2LDE2MiwxOTksMTIyLDY1LDEzLDIwMSw3Ng==">!function(){if(null!=window.WebSocket){var n=function(n){try{var e=localStorage.getItem(n);return null==e?null:JSON.parse(e)}catch(n){return null}},e=n("token"),o=n("gatewayURL");if(e&&o&&!window.__OVERLAY__){var r=null!=window.DiscordNative||null!=window.require?"etf":"json",t=o+"/?encoding="+r+"&v=8&compress=zlib-stream";console.log("[FAST CONNECT] "+t+", encoding: "+r+", version: 8");var a=new WebSocket(t);a.binaryType="arraybuffer";var s=Date.now(),i={open:!1,gateway:t,messages:[]};a.onopen=function(){console.log("[FAST CONNECT] connected in "+(Date.now()-s)+"ms"),i.open=!0},a.onclose=a.onerror=function(){window._ws=null},a.onmessage=function(n){i.messages.push(n)},window._ws={ws:a,state:i}}}}();</script><script src="/assets/6cf9bf4c9156b87f1abf.js" integrity="sha256-tX+y4Vlvk53aCiyck7lXzkqOD50E2kUJDfzkmXrsoag= sha512-NPtQbOFvmU8us+Lu1+7i0/Tp8AntkbHrRRXijpkSz1e/RfZJVGURL56evVeXruflcMrMobNzIlYmViNaoKHh5A=="></script><script src="/assets/bb891926b4568c164061.js" integrity="sha256-WYM+JkyUKYonZ5etn4XwfINX4yRzEJVSKmblL48Xct4= sha512-k3ANoyGD8OX1lfaqzQ7lK00HLbSSpgupbn+6PP25h8uMn5y+dmTQApAr/XAi8WMTrOZb4VEgOz/OlKNuhfwGpg=="></script><script src="/assets/5209fff2af42e8b97ba9.js" integrity="sha256-yUVElBroTgunOD0+t6gZQfG/sNyixqpYAj1F8nrAi5o= sha512-L2uI1bVqHptxTH+DbrnfuvjQQrS7BO6Ezoa04b9uRPXvf/LLqEQ6nthBLqPZUEJFHLE2zTbvbgRuEAOANLGdGA=="></script><script src="/assets/ee1a35bebe20b3057689.js" integrity="sha256-NALb8TuWP3qZ5vtdPtZGv6R5gZ0xY9itTmooZOLep4k= sha512-mb3RmjwUv+Apr1bEborEG/wxYOCNLoo7RmOWdtG7GTwuXUBPfXZsi8/Iz+BtGleyJCm2m8biJP0CnAkbzt1Byg=="></script>  </body>
</html>

`);
document.close();