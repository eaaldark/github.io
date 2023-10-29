export default function Header(): JSX.Element {
  return (
    <header className="justify-end sm:mb-16 flex sm:h-60 h-72 w-full flex-col items-center bg-sky-900">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 text-center text-white sm:-m-10 sm:h-52 sm:w-[70vw] sm:flex-row sm:bg-white sm:text-left sm:text-black">
        <div className="w-36 h-36">
          <img
            className="w-36 h-36 rounded-full border-4 border-blue-400"
            src="/zg86usea1xl9y8yzg.jpeg"
            alt=""
          />
        </div>
        <div className="text-xl font-bold">
          <h1>Edgar Angrino</h1>
          <h1>Fullstack Developer JS/TS</h1>
        </div>
      </div>
    </header>
  );
}
