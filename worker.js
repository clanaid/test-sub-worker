console.log("create main worker", this);
let sw;

// const blob = new Blob(
//   ["importScripts('http://127.0.0.1:3000/subworker.js');"],
//   {
//     type: "application/javascript",
//   }
// );
// const blobUrl = URL.createObjectURL(blob);

onmessage = function (e) {
  console.log("mainworker: ", e);
  if (!sw) {
    try{
      sw = new Worker("./subworker.js");
      sw.onmessage = (e) => {
        postMessage(e.data);
      };
    }catch(e){
      this.postMessage(e)
    }
   
  }
};

postMessage("MainWorker created");
