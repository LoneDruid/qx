const url = $request.url;
const method = $request.method;

if (!$response.body) {
  console.log(`$response.body is undefined: ${url}`);
  $done({});
}

if (method !== "GET") {
  console.log("Invalid method:", method);
}

let body = JSON.parse($response.body);

if (body.data) {
  body.data.itemList = [
    {
      "expireTime": null,
      "functionType": 1,
      "permissionStatus": 1,
      "residualTimes": 999999,
      "residualTotalTimes": 999999
    }
  ]
}

body = JSON.stringify(body);

$done({
  body
});