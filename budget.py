class Category:
    def __init__(self,category):
        self.ledger = []
        self.category = category
        self.amount = 0

    def deposit(self,amount,description = ""):
        self.amount =amount
        self.description = description
        obj = {"amount":amount,"description":description}
        self.ledger.append(obj)
        return self.ledger
    def withdraw(self,amount,description="") :
        if self.check_funds(amount):
            self.description = description
            self.amount = self.amount - amount
            obj = {"amount":-amount,"description":description}
            self.ledger.append(obj)
            return True
        else: 
            return False
    def get_balance(self):
        return self.amount

    def transfer(self,amount,budgetCat):
        if self.check_funds(amount):
            self.withdraw(amount,"Transfer to " + budgetCat.category)
            budgetCat.deposit(amount,"Transfer from " + self.category)
            return True
        else: 
            return False    
    def check_funds(self,amount):
        if self.get_balance() > amount:
            return True
        else:
            return False
    def __str__(self):
        top = self.category.center(30,"*")
        middle = ""
        total = 0
        for a in self.ledger:
            left_side = "{}".format(a["description"][:23]) if len(a["description"]) > 25 else a["description"]
            middle += left_side + str('{0:.2f}'.format(a["amount"])[:7]).rjust(30-len(left_side))+ "\n" 
            total += a["amount"]
        last_line = "Total" +":" +" " +str('{0:.2f}'.format(total)) 
        txt = top + "\n" + middle + str(last_line)
        return txt



def create_spend_chart(categories):
    top_line = "Percentage spent by category"
    bottom_line = ""
    word_list = []
    for cat in categories:
        word_list.append(cat.category)
    for word in word_list:
        for w in word:
            bottom_line += w + "\n"
    return top_line + "\n" + bottom_line
    

a = Category("food")
print(a)
b = Category("home")
c = Category("auto")
print(a.deposit(3000,"Food deposit during the corona period"))
print(a.withdraw(1000,"Withdraw for money"))
print(a.get_balance())
print(a.transfer(1000,b))
print(a.get_balance())
print(b.get_balance())
print(a.ledger)
print(b.ledger)
print(b.deposit(2500,"rice"))
print(b.get_balance())
print(a.withdraw(2000))
print(a.deposit(3000,"Money for rice"))
print(a)


print(create_spend_chart([a,b,c]))