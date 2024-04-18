const url = $request.url;
const method = $request.method;

if (!$response.body) {
  console.log(`[JKBD jk4] $response.body is undefined: ${url}`);
  $done({});
}

if (method !== "GET") {
  console.log("[JKBD jk4] Invalid method:", method);
}

console.log('[JKBD jk4] start');
let body = JSON.parse($response.body);

if (body.data) {
  body.data.isVip = true
}

body = JSON.stringify(body);

$done({
  body
});
