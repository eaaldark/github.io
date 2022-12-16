import { skillData } from "../data"

const SkillDom = (props: any) => {
  return (
    <div className='my-auto w-full '>
      <div className='p-5 xl:px-16 space-y-4'>
        <h1 className='text-center font-bold text-2xl text-white'>
          Tecnologias y/o Herramientas Utilizadas
        </h1>
        <div className='grid grid-skill'>
          {skillData.map((skillItem: any, index: number) => {
            // const percentajeWidthAndColor = {
            // 	width: `${skillItem.percentaje}%`,
            // 	backgroundColor: `rgb(${skillItem.color} / 1)`,
            // 	height: '0.25rem',
            // };

            return (
              <div
                key={index}
                className='flex-skill-item'>
                <div className='h-full flex p-1'>
                  <img
                    className={`w-16 xs:w-full xs:h-full ${
                      skillItem.invert ? "grayscale" : ""
                    }`}
                    src={skillItem.skillImg}
                    alt={skillItem.skillAlt}
                  />
                </div>

                <h4 className='font-bold text-lg'>{`${skillItem.skillName}`}</h4>
                {/* <div className="w-full bg-gray-200 h-fit mb-6 shadow-sm">
									<div style={percentajeWidthAndColor} />
								</div> */}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillDom
