
function TecladoUrna() {
  return (
    <div className="main">
      <div className="buttons">
        <div class="button_pair">
          <div class="btn">
            <button class="button1">
              <svg
                viewBox="0 -960 960 960"
                class="svg1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M200-440v-80h560v80H200Z"></path>
              </svg>
            </button>
          </div>
          <div class="btn">
            <button class="button2">
              <svg
                viewBox="0 -960 960 960"
                xmlns="http://www.w3.org/2000/svg"
                class="svg2"
              >
                <path
                  d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="button_pair">
          <div class="btn">
            <button class="button3">
              <span class="button_text">RECORD</span>
            </button>
          </div>
          <div class="btn">
            <button class="button4">
              <span class="button_text">PLAY</span>
            </button>
          </div>
        </div>
      </div>
      <div class="text">Teenage Engineering [EP-133 K.O. II] - Buttons</div>
    </div>

  )
}

export default TecladoUrna
