
const { response } = require("express");
const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();

const dataFile = path.join(__dirname, "data.json");

//support POSTing form data wuth url encoded
app.use(express.json());


app.get("/poll", async (req, res) =>{
    //data is now the js object of the Json data json
    let data = JSON.parse(await fs.readFile(dataFile, "utf-8"));
    
    const totalVotes = Object.values(data).reduce((total, n) => total +=n, 0);
    
    data = Object.entries(data).map(([label, votes]) => {
        return{
            label,
            percentage: (((100 * votes) / totalVotes) || 0).toFixed(0) // or with 0 in the even that you divide by zero
        }
    });
    
    
    res.json(data);
    
});

app.use(express.urlencoded({ extended: true}));

app.post("/poll", async (req, res) => {
    const data = JSON.parse(await fs.readFile(dataFile, "utf-8"));
	let {add} = req.body;
	
    if(data[add] === 0 || data[add]) data[add]++;
    else data[add] = 0;

    await fs.writeFile(dataFile, JSON.stringify(data));
    
    res.json(data);
});
app.listen(3000, () => console.log("Server is running ..."));
