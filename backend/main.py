from fastapi import FastAPI
from db import get_connection 
from queries import all_transactions
from queries import category_summary
from queries import monthly_summary

app = FastAPI()


#API to GET all Transactions
@app.get("/transactions")
def get_transactions():
    return all_transactions()

#API to GET summary of all categories
@app.get("/summary/categories")
def get_summary_categories():
    return category_summary()

#API to GET monthly summary
@app.get("/summary/monthly")
def get_monthly_summary():
    return monthly_summary()

#@app.post("/import")
#def some_function():
    # your logic here
    # whatever you return becomes the HTTP response

