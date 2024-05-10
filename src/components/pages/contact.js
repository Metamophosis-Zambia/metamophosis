import React from 'react';

// export default Contact;
const Contact = () => (
	<>
		<div className="text-white">
			<div className="w-full h-80 bg-[url(./assets/images/farm2.jpeg)] bg-cover bg-no-repeat pb-40">
				<div className="bg-dial w-full h-80">
					<h2 className="text-center text-white font-bold text-3xl  pt-20 pb-6">GET OUR UPDATES FROM ANYWHERE</h2>
					<p className="text-center">SUBSCRIBE TO OUR ALERTS</p>
					<form className="flex items-center justify-center gap-4">
						<input className="rounded-full px8 py-1 w-36 text-black px-4" maxLength="10" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="e.g 071 716161" name="Phone" required />
						<button type="submit" value="submit" className=" bg-green-600 rounded-full px4 py-1 w-28">SUBSCRIBE</button>
					</form>
				</div>
			</div>
		</div>
	</>
);

export default Contact;
