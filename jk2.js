const url = $request.url;
const method = $request.method;

if (!$response.body) {
  console.log(`[JKBD get-permission] $response.body is undefined: ${url}`);
  $done({});
}

if (method !== "GET") {
  console.log("[JKBD get-permission] Invalid method:", method);
}

console.log('[JKBD get-permission] start');
let body = JSON.parse($response.body);

if (body.data) {
  body.data.itemList = [
    {
      "expireTime": null,
      "functionType": 0,
      "permissionStatus": 0,
      "residualTimes": 999999,
      "residualTotalTimes": 999999
    }
  ]
}

body = JSON.stringify(body);

$done({
  body
});
