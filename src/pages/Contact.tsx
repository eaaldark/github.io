// import Tooltip from "../components/Tooltip";
import icons from '../icons/icons';
import { openInNewTab } from '../utils/openLink';

const buttons: any[] = [
  {
    icon: icons.Instagram,
    link: "https://www.instagram.com/eaaldark",
    alt: "Instagram",
  },
  {
    icon: icons.Github,
    link: "https://github.com/eaaldark",
    alt: "Github",
  },
  {
    icon: icons.Gmail,
    link: "mailto:eaangrino@misena.edu.co?subject=Tengo%20interes%20en%20usted!&body=Hola%20Edgar%20Angrino",
    alt: "Gmail",
  },
];

const SumaryDom = (props: any) => {
	return (
		<div className="w-full h-full my-auto flex flex-col space-y-4 text-white">
			<div className="p-5 space-y-5">
				<h1 className="text-center font-bold text-2xl">Contacto</h1>
				<div className="flex flex-col md:flex-row items-center justify-center gap-10">
					{buttons.map((item: any) => {
						return (
							<div className="text-center">
								<button
									onClick={() => {
										openInNewTab(item.link);
									}}>
									<img
										src={item.icon}
										className="w-32 hover:border hover:border-black/30 rounded-lg hover:bg-gray-500"
										alt={item.alt}
									/>
								</button>
							</div>
						);
					})}
					{/* <Tooltip tooltipMessage="Resend Email">Hover over me!</Tooltip> */}
				</div>
			</div>
		</div>
	);
};

export default SumaryDom;
