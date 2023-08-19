import svf from "../../assets/flower.svg";
import Image from "next/image";
export default function Serv() {
	return (
		<div className=" flex justify-center mt-10 ">
			<div className="flex w-[80%] justify-around text-center gap-20 max-lg:flex-col">
				<div className=" flex flex-col justify-center items-center gap-4 ">
					<Image className="w-[40%]" src={svf} alt="" />
					<h2>דיקור סיני</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						accusantium dignissimos, perspiciatis neque eveniet, distinctio,
						aliquam maxime provident et quo numquam sapiente! Voluptate porro
						repudiandae nulla ut ea illum! Facere.
					</p>
					<button className="bg-[#89BDA5] px-10 py-2 rounded-lg text-2xl font-bold">
						הזמן
					</button>
				</div>
				<div className=" flex flex-col justify-center items-center gap-4">
					<Image className="w-[40%]" src={svf} alt="" />
					<h2>דיקור סיני</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						accusantium dignissimos, perspiciatis neque eveniet, distinctio,
						aliquam maxime provident et quo numquam sapiente! Voluptate porro
						repudiandae nulla ut ea illum! Facere.
					</p>
					<button className="bg-[#89BDA5] px-10 py-2 rounded-lg text-2xl font-bold">
						הזמן
					</button>
				</div>
				<div className=" flex flex-col justify-center items-center gap-4">
					<Image className="w-[40%]" src={svf} alt="" />
					<h2>דיקור סיני</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
						accusantium dignissimos, perspiciatis neque eveniet, distinctio,
						aliquam maxime provident et quo numquam sapiente! Voluptate porro
						repudiandae nulla ut ea illum! Facere.
					</p>
					<button className="bg-[#89BDA5] px-10 py-2 rounded-lg text-2xl font-bold">
						הזמן
					</button>
				</div>
			</div>
		</div>
	);
}
