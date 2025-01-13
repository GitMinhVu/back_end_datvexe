const {default: axios} = require("axios");
const paymentController = async (req1, res2) => {
	const {totalAmount, passenger} = req1.body;
	try {
		var partnerCode = "MOMO";
		var accessKey = "F8BBA842ECF85";
		var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
		var requestId = partnerCode + new Date().getTime();
		var orderId = requestId;

		var orderInfo = `Đặt vé xe nhà xe ${passenger.name}`;
		var redirectUrl = "http://localhost:3000/payment/result";
		var ipnUrl = "http://localhost:7000/api/v1/payment/notify";
		var amount = Math.round(totalAmount).toString();
		var requestType = "payWithMethod";
		var extraData = "";
		var orderGroupId = "";
		var autoCapture = true;
		var lang = "vi";
		var requestId = partnerCode + new Date().getTime();
		var orderId = requestId;
		var orderInfo = `Đặt vé xe nhà xe ${passenger.name}`;
		var payUrl = "";
		setTimeout(() => {
			if (payUrl) {
				window.close();
			}
		}, 5000);
		var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType;

		const crypto = require("crypto");
		var signature = crypto.createHmac("sha256", secretkey).update(rawSignature).digest("hex");

		const requestBody = JSON.stringify({
			partnerCode: partnerCode,
			partnerName: "Test",
			storeId: "MomoTestStore",
			requestId: requestId,
			amount: amount,
			orderId: orderId,
			orderInfo: orderInfo,
			redirectUrl: redirectUrl,
			ipnUrl: ipnUrl,
			lang: lang,
			requestType: requestType,
			autoCapture: autoCapture,
			extraData: extraData,
			orderGroupId: orderGroupId,
			signature: signature,
			lang: "vi",
			payType: "web",
			expireTime: 10000,
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
			res.setEncoding("utf8");
			res.on("data", (body) => {
				console.log("Body: ", body);
				res2.status(200).send(body);
			});
		});

		req.on("error", (e) => {
			console.log(`Problem with request: ${e.message}`);
		});

		req.write(requestBody);
		req.end();
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	paymentController,
};
