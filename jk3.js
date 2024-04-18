const url = $request.url;
const method = $request.method;

if (!$response.body) {
  console.log(`[JKBD trial-count] $response.body is undefined: ${url}`);
  $done({});
}

if (method !== "GET") {
  console.log("[JKBD trial-count] Invalid method:", method);
}

console.log('[JKBD trial-count] start');
let body = JSON.parse($response.body);

if (body.data) {
  body.data.remainCount = 10
  body.data.totalCount = 10
}

body = JSON.stringify(body);

$done({
  body
});
