const fs = require("fs/promises");
const path = require("path");
const ObjectId = require("bson-objectid");

const booksPath = path.join(__dirname, "books.json");
const updateBooks = async (books) => {
	await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
};

const getAll = async () => {
	const books = await fs.readFile(booksPath);
	return JSON.parse(books);
};
const getById = async (id) => {
	const books = await getAll();
	const result = books.find((item) => item.id === id);
	if (!result) {
		return null;
	}
	return result;
};
const add = async ({ title, author }) => {
	const books = await getAll();
	const newBook = {
		title,
		author,
		id: ObjectId(),
	};
	books.push(newBook);
	updateBooks(books);
	return newBook;
};

const updateById = async (id, { title, author }) => {
	const books = await getAll();
	const idx = books.findIndex((item) => item.id === id);
	if (idx === -1) {
		return null;
	}
	books[idx] = { title, author, id };
	updateBooks(books);
	return books[idx];
};

const removeById = async (id) => {
	const books = await getAll();
	const idx = books.findIndex((item) => item.id === id);
	if (idx === -1) {
		return null;
	}
	const [removeBook] = books.splice(idx, 1);
	updateBooks(books);
	return removeBook;
};

module.exports = {
	getAll,
	getById,
	add,
	updateById,
	removeById,
};
