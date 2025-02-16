import sqlite3


def databaseSetup():
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()
    
    cursor.executescript("""
    CREATE TABLE IF NOT EXISTS OAUTH (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        request_token TEXT,
        request_secret TEXT,
        access_token TEXT,
        access_secret TEXT
    );
    """)
    
    connection.commit()
    connection.close()


def insertRequestInfo(user_id, request_token, request_secret):
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()
    
    cursor.execute("""
        INSERT INTO OAUTH (user_id, request_token, request_secret)
        VALUES (?, ?, ?);
    """, (user_id, request_token, request_secret))

    connection.commit()
    connection.close()

def insertAccessInfo(user_id, access_token, access_secret):
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()
    
    cursor.execute("""
        UPDATE OAUTH 
        SET access_token = ?, access_secret = ? 
        WHERE user_id = ?;
    """, (access_token, access_secret, user_id))

    connection.commit()
    connection.close()


def fetchAuthRequest(user_id):
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()
    
    result = cursor.execute("""
        SELECT request_token, request_secret
        FROM OAUTH
        WHERE user_id = ?
    """, (user_id,))

    result = cursor.fetchone()
    if result:
        return result[0], result[1]
    else:
        return None, None
    
def fetchAuthAccess(user_id):
    connection = sqlite3.connect("database.db")
    cursor = connection.cursor()

    result = cursor.execute("""
        SELECT access_token, access_secret
        FROM OAUTH
        WHERE user_id = ?
    """, (user_id,))

    result = cursor.fetchone()
    if result:
        return result[0], result[1]
    else:
        return None, None