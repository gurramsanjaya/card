import { writeFileSync } from "node:fs";
import { join } from "node:path";
import boxen from "boxen";
import chalk from "chalk";

// Text + chalk definitions
const data = {
	name: chalk.white("Sanjaya Gurram"),
	handle: chalk.white("gurramsanjaya"),
	work: chalk.white("Software Developer @ Optum"),
	npm: chalk.gray("https://npmjs.com/") + chalk.red("~gurramsanjaya"),
	github: chalk.gray("https://github.com/") + chalk.green("gurramsanjaya"),
	linkedin:
		chalk.gray("https://linkedin.com/in/") + chalk.blue("gurramsanjaya"),
	npx: `${chalk.red("npx")} ${chalk.white("gurramsanjaya")}`,
	labelWork: chalk.white.bold("Work".padEnd(10)),
	labelnpm: chalk.white.bold("npm".padEnd(10)),
	labelGitHub: chalk.white.bold("GitHub".padEnd(10)),
	labelLinkedIn: chalk.white.bold("LinkedIn".padEnd(10)),
	labelCard: chalk.white.bold("Card".padEnd(10)),
	colon: chalk.white.bold(":"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const workRow = `${data.labelWork}${data.colon} ${data.work}`;
const npmRow = `${data.labelnpm}${data.colon} ${data.npm}`;
const githubRow = `${data.labelGitHub}${data.colon} ${data.github}`;
const linkedRow = `${data.labelLinkedIn}${data.colon} ${data.linkedin}`;
const cardRow = `${data.labelCard}${data.colon} ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
	// heading + newline + // data.name + data.handle
	newline + // Add one whole blank line
	workRow +
	newline + // data.labelWork + data.work
	npmRow +
	newline + // data.labelnpm + data.npm
	githubRow +
	newline + // data.labelGitHub + data.github
	linkedRow +
	newline + // data.labelLinkedIn + data.linkedin
	newline +
	cardRow; // data.labelCard + data.npx

const options = {
	padding: 1,
	margin: 1,
	// borderStyle: "round",
	textAlignment: "left",
	title: heading,
	titleAlignment: "center",
};

writeFileSync(
	join(import.meta.dirname, "../public/output"),
	chalk.green(boxen(output, options)),
);
