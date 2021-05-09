from app import app
from flask import render_template,request,make_response,redirect

from  firebase import firebase

# config  = {
#   "apiKey": "AIzaSyDxmSfndCHk2BzTjuWFPGCrVXeqXtGulgE",
#   "authDomain": "home-madefood.firebaseapp.com",
#   "databaseURL": "https://home-madefood-default-rtdb.firebaseio.com",
#   "projectId": "home-madefood",
#   "storageBucket": "home-madefood.appspot.com",
#   "messagingSenderId": "365975359815",
#   "appId": "1:365975359815:web:36428387b7368d929ebc62",
#   "measurementId": "G-1WXMBGH526"
# }

# firebase =pyrebase.initialize_app(config)
# db=firebase.database()
firebase = firebase.FirebaseApplication("https://homemadefood-a314a-default-rtdb.firebaseio.com/",None)

def get_all_values(nested_dictionary):
    for key, value in nested_dictionary.items():
        if type(value) is dict:
            get_all_values(value)
        else:
            print(key, ":", value)
			
			
@app.route("/",methods=['GET','POST'])
def login():
	if request.method =='POST':
		email = request.form['email']
		password = request.form['password']
		print(email,password)
		result =firebase.get('/server/profile/admin','')
		checkpassword=list(result.items())[1][1]
		checkemail=list(result.items())[0][1]
		print(checkemail,checkpassword)
		if (checkpassword==password) :
			print("e")
			return make_response(redirect("/manageusers"))
		else:
			return render_template("admin/login.html",error="enter valid info")

	return render_template("admin/login.html")

@app.route("/home")
def home():
	return render_template("admin/home.html",admin="admin")

@app.route("/manageusers",methods=['GET','POST'])
def manageusers():
		if ('cook'=='cook'):
			result =firebase.get('/server/profile/cook/','')
			cookname=result.keys()
			result =firebase.get('/server/profile/cook','')
			# for key, value in result.items():
			# 	if type(value) is dict:
			# 		result(value)
        	# 	else:
			# # 		print(key, ":", value)
			# 		cook=key
			# print(cook)
			# cookva=result.keys()
			# cookvalue=cookva.items()
			# # print(cookname,cookvalue)
			# result =firebase.get('/server/profile/customer','')
			# # name=result.get('cart')
		
			# name=list(result.values())
			# # name=list(keyname.items())
			# # print(name)
			print(result)
			# cook= get_all_values(result)
			return render_template("admin/manageusers.html",admin="admin",cookname=cookname,cook=result)
		return render_template("admin/manageusers.html",admin="admin")

@app.route("/manageoders",methods=['GET','POST'])
def manageoders():
	
	return render_template("admin/manageoders.html",admin="admin")

@app.route("/manageprofile",methods=['GET','POST'])
def manageprofile():
	if request.method =='POST':
		email = request.form['email']
		name = request.form['adminname']
		print(email,name)
		result =firebase.put('/server/profile/admin','EMAIL',email)
		result1 =firebase.put('/server/profile/admin','name',name)
		print(result1,result)
		return render_template("admin/manageprofile.html",email=email,name=name)

	return render_template("admin/manageprofile.html",admin="admin")

@app.route("/managefeedback")
def managefeedback():
	return render_template("admin/managefeedback.html",admin="admin")
