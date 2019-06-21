const DomNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  switch (typeof arg) {
    case "function":
      return registerDocReadyCallback(arg);
    case "string":
      return getNodeFromDom(arg);
    case "object":
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
};

getNodesFromDom = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodesArray = Array.from(nodes);
  return new DomNodeCollection(nodesArray);
};
