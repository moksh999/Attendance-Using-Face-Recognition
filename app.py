from flask import Flask, request, jsonify, render_template,Response
from flask_cors import CORS
from db import connection
import jwt
import datetime
from PIL import Image
from identify_face_image import *
from hashlib import md5
from datetime import date
from datetime import datetime as dt
import io
import csv
import pymysql
import pretty_errors


date=date.today()
time=dt.now().time()
result=""


app = Flask(__name__)

CORS(app, support_credentials=True)
app.config['SECRET_KEY'] = 'thisisasecretkey'


@app.route("/")
def home():

    return jsonify({"about": "hi"})


@app.route("/post", methods=['POST'])
def post():
    data = request.get_json()
    fname = data['fname']
    lname = data['lname']
    email = data['email']
    password = data['password']
    # password = md5(password.encode())
    # password = password.hexdigest()

    db, c = connection()

    query = ("SELECT * FROM teachers WHERE username=%s")
    c.execute(query, (email,))
    result = c.fetchall()
    if len(result) != 0:
        msg = {'error': "email id already exist's"}
        return jsonify(msg), 400
    else:
        add_teacher = (
            "INSERT INTO teachers (f_name,l_name,username,password) VALUES (%s, %s, %s, %s)")
        data_teacher = (fname, lname, email, password)
        c.execute(add_teacher, data_teacher)
        db.commit()
        c.close()
        db.close()
        msg = {'success': "registered successfully"}
        return jsonify(msg), 200


@app.route("/login", methods=['POST'])
def login():
    data = request.get_json()

    email = data['email']
    password = data['password']
    # password=md5(password.encode())
    # password=password.hexdigest()

    db, c = connection()

    query = ("SELECT password FROM teachers WHERE username= %s")
    c.execute(query, (email,))
    result = c.fetchall()
    if len(result) == 0:
        msg = {'error': "email doesn't exists"}
        return jsonify(msg), 400
    elif result[0][0] == password:
        token = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow(
        )+datetime.timedelta(minutes=60)}, app.config['SECRET_KEY'])
        msg = {'success': "Login succesfull", 'token': token.decode('UTF-8')}

        return jsonify(msg), 200
    elif result[0][0] != password:
        msg = {'error': "incorrect password"}
        return jsonify(msg), 404


@app.route("/attendance", methods=['POST'])
def attendance():

    # fname = request.form.get['fname']
    # lname = request.files['lname']
    # lecture=request.files['lec']
    # branch=request.files['branch']
    att=[]
    image1 = request.files['image1']
    image2 = request.files['image2']
    image3 = request.files['image3']
    img1 = Image.open(image1.stream)
    img2 = Image.open(image2.stream)
    img3 = Image.open(image3.stream)
    img1.save('img1.jpg')
    img2.save('img2.jpg')
    img3.save('img3.jpg')

    for i in range(1,4):
        present_ids=identify_face(f'img{i}.jpg')
        att.append(present_ids)

    final_attendance = [item for sublist in att for item in sublist]
    final_attendance= list(set(final_attendance))
    final_attendance=[i+1 for i in final_attendance]
    final_attendance=[i.item() for i in final_attendance] #converting numpy datatype in native python datatype
    # print(final_attendance)
    
    
    db, c = connection()                    #connecting to database
    global hour_time
    hour_time=time.hour
    for i in final_attendance:              #adding attendance to database
        attend_query="INSERT INTO attend(`std_id`, `sub_id`, `date`, `time`, `attendance`) VALUES (%s,%s,%s,%s,%s)"
        data_attend=(i,sub_id,date,time,1)
        c.execute(attend_query,data_attend)
    db.commit()

    if final_attendance:
        msg="Succes"
        return jsonify(msg),200
    else:
        msg="fail"
        return jsonify(msg),400


@app.route("/info", methods=['POST'])
def info():
    data = request.get_json()

    # fname = data['fname']
    # lname = data['lname']
    lecture = data['lec']
    # branch = data['branch']

    year = data['year']
    db,c=connection()
    sub_query="SELECT sub_id from subjects where name=%s"           #selecting sub_id of particular subject
    c.execute(sub_query,(lecture,))
    result=c.fetchall()
    global sub_id                   #setting sub_id as gloabl variable
    sub_id=result[0][0]
    print(sub_id)
    db.commit()
    c.close()
    db.close()

    if sub_id:
        msg="Succes"
        return jsonify(msg),200
    else:
        msg="fail"
        return jsonify(msg),400

@app.route("/getinfo", methods=['GET'])
def getinfo():
    db,c=connection()

    global hour_time

    name_query = "select roll_no,f_name from students natural join attend where date= %s and time like '%s%' "
    data_name_query = (date, hour_time)
    c.execute(name_query, data_name_query)
    result = c.fetchall()
    result=list(set(result))
    result=sorted(result,key=lambda x:x[0])
    print(result)
    db.commit()
    c.close()
    db.close()
    return jsonify({"data":result})


@app.route("/delete", methods=['POST'])
def delete():
    data = request.get_json()
    roll=data['Roll']
    name=data['Name']
    name=name.lower()                               #lowercase
    global hour_time
    global sub_id
    db,c=connection()
    stud_query="SELECT std_id from students where roll_no=%s and f_name=%s"           #selecting student id
    c.execute(stud_query,(roll,name))
    result=c.fetchall()
    stud_id=result[0][0]
    print(stud_id)

    delete_query=" DELETE FROM attend where std_id=%s and sub_id=%s and `time` like '%s%'"
    delete_data=(stud_id,sub_id,hour_time)
    c.execute(delete_query,delete_data)
    db.commit()
    c.close()
    db.close()
    return jsonify({"data":data})


@app.route("/add", methods=['POST'])
def add():
    data = request.get_json()
    roll=data['Roll']
    name=data['Name']
    name=name.lower()                               #lowercase
    global hour_time
    global sub_id
    db,c=connection()
    stud_query="SELECT std_id from students where roll_no=%s and f_name=%s"           #selecting student id
    c.execute(stud_query,(roll,name))
    result=c.fetchall()
    stud_id=result[0][0]
    print(stud_id)

    add_query="INSERT INTO attend(`std_id`, `sub_id`, `date`, `time`, `attendance`) VALUES (%s,%s,%s,%s,%s)"
    data_attend=(stud_id,sub_id,date,time,1)
    c.execute(add_query,data_attend)
    db.commit()
    c.close()
    db.close()

    return jsonify({"data":data})

@app.route("/report", methods=['POST'])
def report():
    data = request.get_json()


    subject=data["lec"]
    start_date=data["sdate"]
    last_date=data["edate"]


    db,c=connection()
    

    report_query="select s.roll_no,s.f_name,s.l_name,sub.name,a.attendance,a.date from students s natural join attend a natural join subjects sub where s.std_id=a.std_id and a.sub_id=sub.sub_id and sub.name=%s and date between %s and %s" ;
    data_report=(subject,start_date,last_date)
    
    c.execute(report_query,data_report)
    result=c.fetchall()
    print(result)

    db.commit()
    c.close()
    db.close()

    output = io.StringIO()
    writer = csv.writer(output)
    line=['Roll.no,First Name,Last Name,Subject Name,Attendance,Date']
    writer.writerow(line)

    for row in result:
        
        line=[str(row[0])+','+str(row[1])+','+str(row[2])+','+str(row[3])+','+str(row[4])+','+str(row[5])]
        
        writer.writerow(line)
    output.seek(0)

    return Response(output, mimetype="text/csv", headers={"Content-Disposition":"attachment;filename=Student_report.csv"})
    
    

if __name__ == "__main__":

    app.run(debug=True)
