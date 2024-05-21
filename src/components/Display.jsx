import TecladoUrna from "./TecladoUrna"
function Display() {
  return (
    <div className="bg-cyan-300 w-[450px] h-[500px] flex flex-col justify-center rounded-lg">
      <div name="display" className="bg-green-500 w-[440px] h-[250px] mt-1 rounded-lg px-2 pt-1">
        <div className="flex ">
          <div name="img" className="flex justify-center items-center bg-white rounded-lg ">
            <img
              src="src/assets/bolsonaro.png"
              alt=""
              className="w-[180px] h-[240px] p-3 "
            />
          </div>
          <div name="descrição" className="">
            <h3 className="">Canditado</h3>
            <p>Nome:</p>
          </div>
        </div>
      </div>
      <TecladoUrna />
    </div>
  )
}

export default Display
