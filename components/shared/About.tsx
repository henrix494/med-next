import me from "../../assets/WhatsAppImage2023-08-01at19.25.53.jpeg";
import Image from "next/image";
export default function About() {
	return (
		<div className=" flex  justify-around mt-40   bg-[#F4F4EF] text-right px-20 max-lg:flex-col mb-60">
			<div className="w-[50%] max-lg:w-full">
				<Image width={600} className="h-[80vh] max-lg:h-full" src={me} alt="" />
			</div>
			<div className="mt-10 flex flex-col max-lg:w-full w-1/4">
				<div>
					{" "}
					<h2 className="text-3xl font-bold">קצת עליי</h2>
				</div>
				<div className=" self-end mt-10">
					<p className=" ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
						harum, praesentium quos et totam, aliquid nemo sapiente doloremque
						nostrum nihil reiciendis quis iste, atque sequi ullam voluptas
						tempora quam nam.
					</p>
				</div>
				<div className=" self-end mt-10">
					<p className=" ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
						harum, praesentium quos et totam, aliquid nemo sapiente doloremque
						nostrum nihil reiciendis quis iste, atque sequi ullam voluptas
						tempora quam nam.
					</p>
				</div>
				<div className=" self-end mt-10">
					<p className=" ">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
						harum, praesentium quos et totam, aliquid nemo sapiente doloremque
						nostrum nihil reiciendis quis iste, atque sequi ullam voluptas
						tempora quam nam.
					</p>
				</div>
			</div>
		</div>
	);
}
