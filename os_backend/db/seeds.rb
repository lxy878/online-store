users = [
    {name:'abc', email:'abc@de.com', password:'12'},
    {name:'123', email:'123@de.com', password:'12'},
    {name:'cba', email:'cba@de.com', password:'12'}
]

users.each{|user| User.create(user)}