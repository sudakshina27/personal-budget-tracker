from db import get_connection

conn = get_connection()
cursor = conn.cursor()

#1. Total expenses by category
print("--- Spending by category ---")
cursor.execute("""
    SELECT category, ROUND(SUM(amount),2) as total
    FROM transactions
    WHERE amount < 0
    GROUP BY category
    ORDER BY total ASC
""")

for row in cursor.fetchall():
    print(f"{row['category']}: €{row['total']}")

#2. Monthly Net Balance
print("\n--- Monthly Net Balance ---")
cursor.execute("""
    SELECT SUBSTR(date, 1, 7) as month,
               ROUND(SUM(amount),2) as net
    FROM transactions
    GROUP BY month
    ORDER BY month ASC
    """)

for row in cursor.fetchall():
    print(f"{row['month']}: €{row['net']}")

#3. Top 3 Expenses 
print("--- Top 3 Expenses ---")
cursor.execute("""
    SELECT description,
            amount,
            date
    FROM transactions
    WHERE amount < 0
    ORDER BY amount ASC
    LIMIT 3
    """)

for row in cursor.fetchall():
    print(f"{row['description']}: €{row['amount']} on {row['date']}")

conn.close()