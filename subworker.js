onmessage = function (e) {
  console.log("subWorker: ", e);
};
postMessage("SubWorker created");
