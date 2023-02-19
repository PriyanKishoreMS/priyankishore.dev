import React from "react";
import { useEffect, useState } from "react";

const Footer = () => {
	const [joke, setJoke] = useState("");
	useEffect(() => {
		fetch("https://official-joke-api.appspot.com/jokes/programming/random")
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setJoke(data[0].setup + "\n" + data[0].punchline);
			});
		console.log("i am called");
	}, []);

	return (
		<div className='bg-white py-16 dark:bg-primary'>
			<div className='text-center'>
				<p className='text-primary font-normal text-base mb-2 dark:text-white'>
					Priyan Kishore 🍻
				</p>
				<p className='text-primary font-semibold px-5 text-base dark:text-white'>
					{joke ? joke : "Joke Loading..."}
				</p>
			</div>
		</div>
	);
};

export default Footer;
