from pymongo import MongoClient

# mongodb instance where database is running 
connection_string = "mongodb://localhost:27017"
client = MongoClient(connection_string)
db = client.get_database("idk")

# similar to mysql tables to store data 
collection = db.get_collection("information")

# document to insert inside of mongodb

# name, date, inpection details, location, quantity?
#document = {"name": [name at i], "date": [date at i], "inspection details": [insdets at i], "location": [location at i]}