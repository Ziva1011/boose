const express = require('express')
const bodyParser = require('body-parser')
const repo = require('./repository')
const jwt = require("jsonwebtoken");
var cors = require('cors')

require('dotenv').config()



let _users = require('./users.json');
let _items = require('./items.json');


function getUserPurchases(userId) {
    var JSONObject = _users
	for (i=0; i < JSONObject.length; i++) {

   	 	if (JSONObject[i].id == userId)
        	return JSONObject[i];
	}
	return null;
}




const app = express()
app.use(cors())

const port = process.env.PORT_BACKEND || 3001

// The body-parser middleware
// to parse form data
app.use(bodyParser.json())

// Get route to display HTML form
app.get('/signup', (req, res) => {}),


// Post route to handle form submission
// logic and add data to the database
app.post('/login', async (req, res) => {
	const {email, name, lastName, birthday, password} = req.body

	console.log(req.body)
	var JSONObject = _users
	for (i=0; i < JSONObject.length; i++) {
		if (JSONObject[i].password == password && JSONObject[i].email == email && JSONObject[i].name == name && JSONObject[i].lastName == lastName && JSONObject[i].birthday == birthday){
				let id=JSONObject[i].id
				const token = jwt.sign({id},
				process.env.JWT_SECRET_KEY,{
				expiresIn: 16400});
				let user = JSONObject[i];
				return res.json({ user, msg: "Login Success" , token: token});
					//.cookie("access_token",token, {httpOnly: true, secure: false})
		}
	}
	return res.status(501)
})

app.post('/purchases', (req, res) => {
	const {token} = req.body;
	var userId = 0;
	if (!token){
		throw new Error("Error");
	}
	try{
		var data = jwt.verify(token, process.env.JWT_SECRET_KEY)
		userId=  data.id
	}catch{
		console.log("Token could not be verified")
		return null
	}
	let purchases = getUserPurchases(userId)
	res.send(purchases)
}),

app.post('/items', (req, res) => {
	const {token} = req.body;
	var userId = 0;
	if (!token){
		throw new Error("Error");
	}
	try{
		var data = jwt.verify(token, process.env.JWT_SECRET_KEY)
		userId=  data.id
	}catch{
		console.log("Token could not be verified")
		return null
	}
	console.log("success")
	res.send(_items)
}),



// Server setup
app.listen(port, () => {
console.log(`Server start on port ${port}`)
})
