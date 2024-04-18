const url = $request.url;
const method = $request.method;

if (!$response.body) {
  console.log(`[JKBD config] $response.body is undefined: ${url}`);
  $done({});
}

if (method !== "GET") {
  console.log("[JKBD config] Invalid method:", method);
}

console.log('[JKBD config] start');
let body = JSON.parse($response.body);

if (body.data) {
  body.data.practice_top_no_ad_time = "999999"
  body.data.jk_vip_donate = "true"
  body.data.jk_vip_video_count = "{\n\t\"examVideoCount\": \"999999\",\n        \"practiceVideoCount\": \"999999\",\n\t\"explainVideoCount\": \"999999\"\n}"
  body.data.more_advert_urls = "[]"
  body.data.advert_pay_alert = "[]"
  body.data.mcbd_clue_show_dealer = "true"
  body.data.asgard_allow_user_authentication = "true"
}

body = JSON.stringify(body);

$done({
  body
});
