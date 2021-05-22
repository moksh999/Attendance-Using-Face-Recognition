from db import connection

db,c=connection()
#name='mokshash@gmail.com'

#query=("select password from teachers WHERE username = %s")

#c.execute(query,(name,))
c.execute("select * from teachers")

x=c.fetchall()
#print(x[0][0])
for i in x:
	print(i)
#if len(x)==0:
#	print("yes")
#if(x[0][0]=='mokshash'):
#	print("yes")
#else:
#	print('no')
