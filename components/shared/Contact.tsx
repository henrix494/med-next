export default function Contact() {
	return (
		<div className="h-[250px] ">
			<div>
				<div>
					{" "}
					<h2 className=" text-center text-2xl mt-5">צור קשר לקביעת תור</h2>
				</div>
				<div className="flex justify-center  items-center mt-10 gap-2">
					<div>
						{" "}
						<input
							className="border-2 h-[50px] w-[300px] rounded-lg"
							type="tel"
							id="phone"
							name="phone"
						/>
					</div>
					<div className="">
						{" "}
						<label className="text-4xl" htmlFor="phone">
							:טלפון{" "}
						</label>
					</div>
				</div>
				<div className="flex justify-center">
					<button className="bg-[#89BDA5] px-10 py-2 rounded-lg text-2xl font-bold mt-10">
						שלח
					</button>
				</div>
			</div>
		</div>
	);
}
