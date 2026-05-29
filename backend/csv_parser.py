import csv
import os
from db import get_connection

def import_csv(file_path):
    filename = os.path.basename(file_path)
    conn = get_connection()
    cursor = conn.cursor()

    inserted = 0
    errors = []

    with open(file_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)

        for i, row in enumerate(reader, start=2):
            try:
                amount = float(row["amount"])
            except (ValueError, KeyError):
                errors.append(f"Row {i}: Invalid amount '{row.get('amount', '')}'")
                continue

            if not row.get("date"):
                errors.append(f"Row {i}: Missing date")
                continue

            cursor.execute("""
                INSERT INTO transactions (date, description, amount, category, source_file)
                VALUES (?, ?, ?, ?, ?)
            """, (
                row["date"].strip(),
                row.get("description", "").strip(),
                amount,
                row.get("category", "Uncategorized").strip(),
                filename
            ))
            inserted += 1

    conn.commit()
    conn.close()

    #print(f"Done. {inserted} rows inserted.")
    if errors:
        print(f"{len(errors)} errors:")
        for e in errors:
            print(" ", e)

    return inserted

if __name__ == "__main__":
    import_csv("../data/sample.csv")
