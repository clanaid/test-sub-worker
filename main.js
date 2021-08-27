const worker = new Worker("./worker.js");

function write(msg) {
  const el = document.getElementById("text");
  el.textContent += `\n${msg}`;
}

// const blob = new Blob(["importScripts('http://127.0.0.1:3000/worker.js');"], {
//   type: "application/javascript",
// });
// const blobUrl = URL.createObjectURL(blob);
// const worker = new Worker(blobUrl);

worker.onmessage = (e) => {
  console.log("main", e);
  write(e.data);
};

worker.postMessage("hello");
