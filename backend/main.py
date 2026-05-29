from fastapi import FastAPI, File, UploadFile
from db import get_connection 
from queries import all_transactions
from queries import category_summary
from queries import monthly_summary
from csv_parser import import_csv
import os

app = FastAPI()

#Setting up Upload directory
upload_dir = "uploaded_file"
os.makedirs(upload_dir, exist_ok = True)

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

#API to (POST) import a CSV file
@app.post("/import")
async def upload_csv(file: UploadFile):
    #Save file efficiently
    file_path = os.path.join(upload_dir, file.filename)
    contents = await file.read()

    with open(file_path, "wb") as f:
        f.write(contents)

    inserted = import_csv(file_path)

    return {"inserted": inserted, "filename": file.filename}