class User:

    def __init__(self, username, password = "123456"):
        self.username=username
        self.__password=password
    
    def change_password(self, old_password, new_password):
        if self.__password in old_password:
            self.__password = new_password
        else :
            print('Old password is incorrect')
    
    def info(self):
        return "username: " + self.username
    