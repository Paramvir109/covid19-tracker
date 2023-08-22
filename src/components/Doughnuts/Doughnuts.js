import React from "react";
import styles from "./Doughnuts.module.css";
import { Doughnut } from "react-chartjs-2";
import { myPlugin } from "../../chartplugins/";

const Doughnuts = ({ data: { confirmed, recovered, deaths } }) => {
	if (!confirmed) {
		return "Loading";
	}
	return (
		<div className={styles.container}>
			<div className={styles.donut}>
				<Doughnut
					className={styles.donut}
					data={{
						datasets: [
							{
								data: [recovered, confirmed - recovered],
								backgroundColor: ["rgba(76,207,118)", "#CCCCCC"],
							},
						],
					}}
					options={{
						tooltips: {
							enabled: false,
						},
						title: {
							display: true,
							text: "Recovery Rate",
						},
						cutoutPercentage: 75,
						maintainAspectRatio: false,
						elements: {
							center: {
								text: `${
									Math.round(((recovered * 100) / confirmed) * 10) /
									10
								}%`,
								color: "black", // Default is #000000
								fontStyle: "Arial", // Default is Arial
								sidePadding: 20, // Defualt is 20 (as a percentage)
							},
						},
					}}
					plugins={[myPlugin]}
				/>
			</div>
			<div className={styles.donut}>
				<Doughnut
					data={{
						datasets: [
							{
								data: [deaths, confirmed - deaths],
								backgroundColor: ["rgba(220,53,69)", "#CCCCCC"],
							},
						],
					}}
					options={{
						tooltips: {
							enabled: false,
						},
						title: {
							display: true,
							text: "Fatality Rate",
						},
						cutoutPercentage: 75,
						maintainAspectRatio: false,
						elements: {
							center: {
								text: `${
									Math.round(((deaths * 100) / confirmed) * 10) / 10
								}%`,
								color: "black", // Default is #000000
								fontStyle: "Arial", // Default is Arial
								sidePadding: 20, // Defualt is 20 (as a percentage)
							},
						},
					}}
					plugins={[myPlugin]}
				/>
			</div>
		</div>
	);
};

export default Doughnuts;
