console.log("create sub worker", this);

onmessage = function (e) {
  console.log("subWorker: ", e);
};
postMessage("SubWorker created");
