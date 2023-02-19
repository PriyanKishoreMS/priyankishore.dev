import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const logos = [
	{
		type: "Backend",
		list: [
			{
				image: images.nodejs,
				title: "Nodejs",
			},
			{
				image: images.express,
				title: "Express",
			},
			{
				image: images.fiber,
				title: "Fiber",
			},
			{
				image: images.flask,
				title: "Flask",
			},
		],
	},
	{
		type: "Frontend",
		list: [
			{
				image: images.react,
				title: "React",
			},
			{
				image: images.svelete,
				title: "Svelte",
			},
			{
				image: images.next,
				title: "Nextjs",
			},
			{
				image: images.react,
				title: "React Native",
			},
		],
	},
	{
		type: "Databases",
		list: [
			{
				image: images.mongodb,
				title: "MongoDB",
			},
			{
				image: images.mysql,
				title: "MySQL",
			},
			{
				image: images.neo4j,
				title: "Neo4j",
			},
			{
				image: images.postgress,
				title: "PostgreSQL",
			},
		],
	},
	{
		type: "Languages",
		list: [
			{
				image: images.c,
				title: "C",
			},
			{
				image: images.cpp,
				title: "C++",
			},

			{
				image: images.js,
				title: "Javascript",
			},
			{
				image: images.ts,
				title: "Typescript",
			},
			{
				image: images.python,
				title: "Python",
			},
			{
				image: images.go,
				title: "Go",
			},

			{
				image: images.bash,
				title: "Bash",
			},
			{
				image: images.java,
				title: "Java",
			},
		],
	},
];

const TabSection = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<>
			<Tabs defaultIndex={0}>
				<motion.div
					viewport={{ once: true }}
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ type: "linear", duration: 0.5 }}
				>
					<TabList className='bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row'>
						<Tab className='text-white w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none'>
							Know me more
						</Tab>
						<Tab className='text-white w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl'>
							Technical Skills
						</Tab>
					</TabList>
				</motion.div>
				<TabPanel className='flex gap-20 items-center justify-center flex-col-reverse md:flex-row-reverse transition-all'>
					<motion.div
						viewport={{ once: true }}
						initial={{ opacity: 0, x: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "linear", duration: 0.5 }}
						className='w-full text-primary md:w-full dark:text-white'
					>
						<h2 className='text-2xl font-semibold mb-2'>
							Full-Stack Developer
						</h2>
						<p className='text-base font-normal text-neutral-700 dark:text-neutral-300'>
							Hey there! I'm a Developer with experience in mobile, web, and
							desktop app development, as well as back-end systems. I'm all
							about creating applications that can handle anything you throw at
							them - think scaling like a champ, running faster than Flash, and
							being more secure than a secret agent. <br />
							<br />
							I'm passionate about working on projects that demand relatively
							higher levels of performance and scalability, which give me
							crucial insights to improve my skills.
							<br />
							<br />I may not have all the answers, but I'm always eager to
							learn and tackle new challenges. Whether you need an app that can
							scale like a mountain climber or one that can handle data like a
							pro wrestler - I'm your guy!
						</p>
						<br />
					</motion.div>

					<motion.div
						viewport={{ once: true }}
						initial={{ opacity: 0, x: 0 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "linear", duration: 0.5 }}
						className='w-full relative md:w-1/2 md:h-[450px]'
					>
						{!isLoaded && (
							<div className='absolute top-0 rounded-lg left-50 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]' />
						)}
						<img
							src={"https://avatars.githubusercontent.com/u/80768547?v=4"}
							className='items-center justify-center flex z-10 object-cover object-top rounded-lg filter shadow-lg'
							alt='Image Felix'
							loading='lazy'
							width={400}
							height={400}
							onLoad={() => setIsLoaded(true)}
						/>
					</motion.div>
				</TabPanel>
				<TabPanel className=' transition-all -mt-10'>
					{logos.map((logo, index) => (
						<div className='flex gap-20 items-center flex-col mt-12 md:flex-row-reverse'>
							<div className='w-full text-center text-white max-w-3xl mx-auto'>
								<h2 className='text-2xl font-semibold mb-2 text-primary dark:text-white'>
									{logo.type}
								</h2>
								<motion.div
									viewport={{ once: true }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ type: "linear", duration: 0.5 }}
									className='mt-4 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-2'
								>
									{logo.list.map((logo, index) => (
										<div
											key={index}
											className='flex flex-col justify-center items-center gap-4 py-8 px-8 bg-gray-100 rounded-xl filter shadow-md dark:bg-primary-400'
										>
											<img
												className='h-14 object-contain dark:filter'
												src={logo.image}
												alt={logo.title}
												loading='lazy'
												width={56}
												height={56}
											/>
											<h6 className='text-xl font-semibold text-primary dark:text-white'>
												{logo.title}
											</h6>
										</div>
									))}
								</motion.div>
							</div>
						</div>
					))}
				</TabPanel>
			</Tabs>
		</>
	);
};

export default TabSection;
