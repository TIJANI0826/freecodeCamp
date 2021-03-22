class Rectangle:
    def __init__(self,width,height):
        self.height = height
        self.width = width

    def set_height(self,height):
        self.height = height
        return self.height

    def set_width(self,width):
        self.width = width
        return self.width

    def get_area(self):
        return self.width * self.height
    
    def get_perimeter(self):
        return 2 * self.width + 2 * self.height

    def get_diagonal(self):
        return  ((self.width ** 2 + self.height ** 2) ** .5)

    def get_picture(self):
        if self.width > 50:
            return "Too big for picture."
        line = ""
        for a in range(self.height):
            line += "*" * self.width + "\n" 
        return line
    
    def get_amount_inside(self,another):
        return int(self.get_area() / another.get_area())

    def __str__(self):
        return "Rectangle(width=" +str(self.width) + ", height=" + str(self.height) + ")"
class Square(Rectangle):
    def __init__(self, side,*args):
        self.side = side
        self.width = side
        self.height = side
    def set_side(self,side):
        self.side = side
        self.width = side
        self.height = side
        return self.side
    def set_width(self,width):
       return self.set_side(width)
    
    def set_height(self, height):
        return self.set_side(height)
        
    def __str__(self):
        return "Square(side=" +str(self.side) + ")"

rect = Rectangle(10, 5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())
 
sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())
 
rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))