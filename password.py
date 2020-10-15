our_password = "pass1234"
your_answer = ""
number_of_try = 0
max_number_of_try = 4
Max_try = "not reached"

while your_answer != our_answer and Max_try != "Reached":
  if number_of_try < max_number_of_try:
  your_answer = input("what is the password")
  number_of_try = number_of_try + 1
  
  def is_positive(number):
      if number>0:
         print("True")
      else:
           Max_try = "Reached"
  if Max_try == "Reached":
               print("account blocked")
  else: print("access granted")
       
         
