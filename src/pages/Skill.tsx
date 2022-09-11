import { skillData } from '../data';

const SkillDom = (props: any) => {
	return (
		<div className="my-auto w-full text-white">
			<div className="p-5 xl:px-16 space-y-4">
				<h1 className="text-center font-bold text-2xl">En progreso</h1>
				<div className="grid grid-skill gap-x-5">
					{skillData.map((skillItem: any) => {
						const percentajeWidthAndColor = {
							width: `${skillItem.percentaje}%`,
							backgroundColor: `rgb(${skillItem.color} / 1)`,
							height: '0.25rem',
						};

						return (
							<div>
								<h4 className="font-bold text-sm">{`${skillItem.skillName} - ${skillItem.percentaje}%`}</h4>
								<div className="w-full bg-gray-200 h-fit mb-6 shadow-sm">
									<div style={percentajeWidthAndColor} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SkillDom;
