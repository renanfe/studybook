from user import User

if __name__ == "__main__":

    users = []
    opt=4

    while opt != 0:
        opt = int(input("\n[**** User system ****] \n 1 - Create User \n 2 - Show Users \n select:"))
        if opt == 1:
            username = input("Username: ")
            password = input("Password: ")
            users.append(User(username,password))
        if opt == 2:
            print("\nUsers created:\n ")
            for user in users:
                print(user.info())
                