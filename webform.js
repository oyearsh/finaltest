app.post("/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	// perform authentication here

	// if authentication is successful, redirect to the user's profile page
	const hash = bcrypt.hashSync(password, 10); // assuming you're using bcrypt to hash the password
	res.redirect(`/profile?username=${username}&hash=${hash}`);
});
