import pymysql.cursors
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

def connect():
    return pymysql.connect(host='localhost',
                             user='root',
                             password='',
                             db='sakshyatkaar_abhyasa',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

def check_user(connection, email, password):
    result = ""
    with connection.cursor() as cursor:
        sql = "SELECT * FROM `users` WHERE `email`=%s AND `password`=%s"
        cursor.execute(sql, (email, password))
        result = cursor.fetchone()
    
    if(result):
        access_token = create_access_token(identity={'email': email})
        return {"token":access_token}
    return {"error": "Invalid Email or Password"}

def insert_user(connection, user):
    if('token' in check_user(connection, user['email'], user['password'])):
        return {"error": "Already exists"}
    
    with connection.cursor() as cursor:
        sql = "INSERT INTO `users` (`email`, `password`, `full_name`) VALUES (%s, %s, %s)"
        print(user)
        cursor.execute(sql, (user['email'], user['password'], user['full_name']))
    access_token = create_access_token(identity={'email': user['email']})
    return {"token": access_token}
    
