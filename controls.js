//define the controls class
class Controls {
  constructor() {
    this.forward = false;
    this.reverse = false;
    this.left = false;
    this.right = false;
    // this.space = false;

    //add private methods
    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
      }
    });
    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
      }
        
    });
  }
}
