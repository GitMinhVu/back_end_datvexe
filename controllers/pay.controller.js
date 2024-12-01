const paymentController = async (req1, res2) => {
	const {totalAmount, passenger} = req1.body;
	try {
		var partnerCode = "MOMOS9RM20220403";
		var accessKey = "FuDjG1pMnaxTUCwR";
		var secretkey = "v1jzHpgbyyzOfrMBy33ywii1mPxqV3Er";
		var requestId = partnerCode + new Date().getTime();
		var orderId = requestId;
		var orderInfo = `Đặt vé xe nhà xe ${passenger.name}`;
		var redirectUrl = "http://localhost:3000/";
		var ipnUrl = "https://callback.url/notify";
		// var ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
		var amount = totalAmount;
		var requestType = "captureWallet";
		var extraData = ""; //pass empty value if your merchant does not have stores

		//before sign HMAC SHA256 with format
		//accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
		var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;
		//puts raw signature
		console.log("--------------------RAW SIGNATURE----------------");
		console.log(rawSignature);
		//signature
		const crypto = require("crypto");
		var signature = crypto.createHmac("sha256", secretkey).update(rawSignature).digest("hex");
		console.log("--------------------SIGNATURE----------------");
		console.log(signature);
		const requestBody = JSON.stringify({
			partnerCode: partnerCode,
			accessKey: accessKey,
			requestId: requestId,
			amount: amount,
			orderId: orderId,
			orderInfo: orderInfo,
			redirectUrl: redirectUrl,
			ipnUrl: ipnUrl,
			extraData: extraData,
			requestType: requestType,
			signature: signature,
			lang: "en",
		});
		const options = {
			hostname: "test-payment.momo.vn",
			port: 443,
			path: "/v2/gateway/api/create",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Content-Length": Buffer.byteLength(requestBody),
			},
		};
		const https = require("https");

		const req = https.request(options, (res) => {
			console.log(`Status: ${res.statusCode}`);

			console.log(`Headers: ${JSON.stringify(res.headers)}`);
			res.setEncoding("utf8");
			res.on("data", (body) => {
				console.log("Body: ");
				console.log(body);
				console.log("payUrl: ");
				res2.status(200).send(body);
			});
			res.on("end", () => {
				console.log("No more data in response.");
			});
		});
		req.on("error", (e) => {
			console.log(`problem with request: ${e.message}`);
		});
		// write data to request body
		console.log("Sending....");
		req.write(requestBody);
		req.end();
	} catch (error) {}

	// write data to request body
};
module.exports = {
	paymentController,
};
