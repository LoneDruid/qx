const url = $request.url;
const method = $request.method;

if (!$response.body) {
  console.log(`[JKBD jk5] $response.body is undefined: ${url}`);
  $done({});
}

if (method !== "GET") {
  console.log("[JKBD jk5] Invalid method:", method);
}

console.log('[JKBD jk5] start');
let body = JSON.parse($response.body);

if (body.data) {
  body.data.value = 0;
}

body = JSON.stringify(body);

$done({
  body
});
