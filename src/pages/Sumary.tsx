import { sumaryData } from "../data/index"
const SumaryDom = (props: any) => {
  return (
    <div className='my-auto flex w-full flex-col items-center justify-center text-white'>
      <div className='grid grid-experience gap-6 p-5 xl:px-16'>
        {sumaryData.reverse().map((item: any) => {
          return (
            <div className='text-center grid gap-2 border p-5 border-white/10'>
              <h1 className='text-xl font-bold'>{item.title}</h1>
              <p>{item.country}</p>
              <p>{item.text}</p>
              <div className='flex text-center items-center justify-center gap-2'>
                <item.icon className={`h-8`}></item.icon>
                <p>{item.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SumaryDom
