#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const output = fs.readFileSync(
	path.join(import.meta.dirname, "public/output"),
	"utf-8",
);

console.log(output);
