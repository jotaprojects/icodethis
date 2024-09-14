#!/usr/bin/env node

import readline from "node:readline";
import { cp, readFile, writeFile } from "node:fs/promises";
import jsdom from "jsdom";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "ICT> ",
});

const sourceFolder = "2_base";
const question = "Project name: ";

async function handleInput(input) {
  if (!input) {
    console.error("No name provided");
    rl.question(question, handleInput);
    return;
  }

  try {
    await copyFolder(input);
    await updateChallengeIndex(input);
    await updateIndex(input);
    console.log(`Good Luck and have fun developing the challenge ${input}!`);
    rl.close();
  } catch (err) {
    console.error(err.message);
    rl.question(question, handleInput);
  }
}

async function copyFolder(path) {
  try {
    await cp(sourceFolder, path, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
    console.log("Folder copied!");
  } catch (err) {
    throw new Error("Folder already exists");
  }
}

async function updateChallengeIndex(path) {
  try {
    const indexContent = await readFile(`${path}/index.html`, {
      encoding: "utf8",
    });
    const dom = new jsdom.JSDOM(indexContent);
    const document = dom.window.document;
    const title = document.querySelector("title");
    title.textContent = formatPath(path) + " - iCodeThis";
    const h1 = document.querySelector("h1");
    h1.textContent = formatPath(path);

    await writeFile(`${path}/index.html`, dom.serialize(), {
      encoding: "utf8",
    });
    console.log("Challenge Index Updated!");
  } catch (err) {
    console.error(err);
  }
}

async function updateIndex(path) {
  try {
    const indexContent = await readFile(`index.html`, { encoding: "utf8" });
    const dom = new jsdom.JSDOM(indexContent);
    const document = dom.window.document;
    const list = document.querySelector("#challenge-list");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `${path}/`;
    a.textContent = formatPath(path);
    li.appendChild(a);
    list.appendChild(li);
    // Does not apply linebreaks when write to file.
    await writeFile(`index.html`, dom.serialize(), { encoding: "utf8" });
    console.log("Main Index Updated!");
  } catch (err) {
    console.error(err);
  }
}

function formatPath(path) {
  let arr = path.split("-");
  arr = arr.map(
    (item) => (item = item.charAt(0).toUpperCase() + item.slice(1))
  );
  return arr.join(" ");
}

rl.question(question, handleInput);
