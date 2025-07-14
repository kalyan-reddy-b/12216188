const fetch = require("node-fetch");

async function log(stack, level, packageName, message, accessToken) {
  const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      stack,
      level,
      package: packageName,
      message
    })
  });

  const data = await response.json();
  console.log(data);
}

module.exports = log;