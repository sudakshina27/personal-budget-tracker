from db import get_connection

#1. All transactions
def all_transactions():
    conn = get_connection()
    cursor = conn.cursor()

    print("--- All Transactions ---")
    cursor.execute("""
        SELECT *
        FROM transactions
        ORDER BY date
    """)

    result = []
    for row in cursor.fetchall():
    #    print(f"{row['category']}: €{row['total']}")
        result.append(dict(row))

    conn.close()

    return result

#2. Total expenses by category
def category_summary():
    conn = get_connection()
    cursor = conn.cursor()

    print("--- Spending by category ---")
    cursor.execute("""
        SELECT category, ROUND(SUM(amount),2) as total
        FROM transactions
        WHERE amount < 0
        GROUP BY category
        ORDER BY total ASC
    """)

    result = []

    for row in cursor.fetchall():
        #print(f"{row['category']}: €{row['total']}")
        result.append(dict(row))

    conn.close()

    return result

#3. Monthly Net Balance
def monthly_summary():
    conn = get_connection()
    cursor = conn.cursor()

    print("\n--- Monthly Net Balance ---")
    cursor.execute("""
        SELECT SUBSTR(date, 1, 7) as month,
                ROUND(SUM(amount),2) as net
        FROM transactions
        GROUP BY month
        ORDER BY month ASC
        """)

    result = []

    for row in cursor.fetchall():
        #print(f"{row['month']}: €{row['net']}")
        result.append(dict(row))

    conn.close()

    return result

#4. Top 3 Expenses 
def top_expenses():
    conn = get_connection()
    cursor = conn.cursor()

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

    result = []

    for row in cursor.fetchall():
        #print(f"{row['description']}: €{row['amount']} on {row['date']}")
        result.append(dict(row))

    conn.close()

    return result