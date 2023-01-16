const express = require('express')
const bodyParser = require('body-parser')
const repo = require('./repository')
const jwt = require("jsonwebtoken");

var cors = require('cors')

const app = express()


let _users = require('./users.json');
let _items = require('./items.json');
const cookieParser = require('cookie-parser');


function getUserPurchases(userId) {
    var JSONObject = _users
	for (i=0; i < JSONObject.length; i++) {

   	 	if (JSONObject[i].id == userId)
        	return JSONObject[i];
	}
	return null;
}

function hasValue(email,password) {
    var JSONObject = _users
	for (i=0; i < JSONObject.length; i++) {

   	 	if (JSONObject[i].password == password && JSONObject[i].email == email){
			const token = jwt.sign({ username }, 
			process.env.JWT_SECRET_KEY,{
			expiresIn: 86400});
        	return JSONObject[i];
		}
	}
	return null;
}





app.use(cors())
app.use(cookieParser())

const port = process.env.PORT_BACKEND || 3000

// The body-parser middleware
// to parse form data
app.use(bodyParser.json())

// Get route to display HTML form
app.get('/signup', (req, res) => {}),


// Post route to handle form submission
// logic and add data to the database
app.post('/login', async (req, res) => {
	const {email, password} = req.body
	var JSONObject = _users
	for (i=0; i < JSONObject.length; i++) {
		if (JSONObject[i].password == password && JSONObject[i].email == email){
				let id=JSONObject[i].id
				const token = jwt.sign({id},
				"poihuz7t6g",{
				expiresIn: 86400});
				let user = JSONObject[i];
				return res
					//.cookie("access_token",token, {httpOnly: true, secure: false})
					.json({ user, msg: "Login Success" , token: token}); 
			}
	}
})

app.post('/purchases', (req, res) => {
	const {token} = req.body;
	var userId = 0;
	if (!token){
		throw new Error("Error");
	}
	try{
		var data = jwt.verify(token, "poihuz7t6g")
		userId=  data.id
	}catch{
		console.log("Token could not be verified")
		return null
	}
	//const {userId} = req.body
	let purchases = getUserPurchases(userId)
	res.send(purchases)
}),

// app.get('/logout', (req, res) => {
// 	return res
// 		//.clearCookie("access_token")
// 		.status(200)
// }),


// Server setup
app.listen(port, () => {
console.log(`Server start on port ${port}`)
})
