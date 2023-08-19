import "./hero.css";
export default function Hero() {
	return (
		<div className="images px-20  flex justify-center hero h-screen items-center shadow-4xl shadow-orange-[black]   ">
			<div className="cercle border-2 outline outline-offset-[-14px] max-lg:outline-offset-[-10px] p-3 flex flex-col items-center justify-center">
				<div className=" flex   flex-col items-center gap-5 max-lg:gap-3 ">
					<h2 className="text-6xl max-lg:text-2xl max-lg:font-bold">
						א.י טווינא{" "}
					</h2>
					<h1 className="text-2xl max-lg:text-xl">דיקור סיני</h1>
					<h1 className="text-2xl max-lg:text-xl"> טיפול בצמחי מרפה</h1>
					<h1 className="text-2xl max-lg:text-xl"> טויינא</h1>
				</div>
				<div className="mt-10">
					<button className="border-2 px-12 py-1 rounded-lg text-2xl font-bold">
						הזמן עכשיו
					</button>
				</div>
				<div className=" max-lg:mt-1 mt-12">
					{" "}
					<div className="scroll-arrow"></div>
					<div className="scroll-arrow"></div>
					<div className="scroll-arrow"></div>
				</div>
			</div>
		</div>
	);
}
