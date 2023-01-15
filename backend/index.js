const express = require('express')
const bodyParser = require('body-parser')
const repo = require('./repository')
var cors = require('cors')
const app = express()

let _items = require('./users.json');


function getUserPurchases(userId) {
    var JSONObject = _items
	for (i=0; i < JSONObject.length; i++) {

   	 	if (JSONObject[i].id == userId)
        	return JSONObject[i];
	}
	return null;
}

function hasValue(email,password) {
    var JSONObject = _items
	for (i=0; i < JSONObject.length; i++) {

   	 	if (JSONObject[i].password == password && JSONObject[i].email == email)
        	return JSONObject[i];
	}
	return null;
}





app.use(cors())

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
	console.log(req.body)
	let result=hasValue(email, password)
	//const addedRecord = await
	// 	repo.createNewRecord({email, password})

	// console.log(`Added Record :
	// 	${JSON.stringify(addedRecord, null, 4)}`)
	res.send(result)
})

app.post('/purchases', (req, res) => {
	const {userId} = req.body
	let purchases = getUserPurchases(userId)
	res.send(purchases)

}),


// Server setup
app.listen(port, () => {
console.log(`Server start on port ${port}`)
})
