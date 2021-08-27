console.log = (...args) => write(args)
const worker = new Worker("./worker.js");

function write(...args) {
  const el = document.getElementById("text");
  el.innerText += args.join()+"\n";
}

// const blob = new Blob(["importScripts('http://127.0.0.1:3000/worker.js');"], {
//   type: "application/javascript",
// });
// const blobUrl = URL.createObjectURL(blob);
// const worker = new Worker(blobUrl);


worker.onmessage = (e) => {
  console.log("main", e.data);
  // write(e.data);
};

worker.postMessage("hello");
