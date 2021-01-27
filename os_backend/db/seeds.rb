User.destroy_all
Product.destroy_all
Order.destroy_all
Category.destroy_all

users = [
    {name:'abc', email:'abc@de.com', password:'1'},
    {name:'123', email:'123@de.com', password:'1'},
    {name:'cba', email:'cba@de.com', password:'1'},
    {name:'test', email:'t@t', password:'1'}
]

users.each{|user| User.create(user)}

categories = [
    {name: 'textbook'},
    {name: 'food'},
    {name: 'furniture'}, 
    {name: 'technology'}
]

categories.each{|category| Category.create(category)}

categories = Category.all
users = User.all

products = [
    {
        name: 'Ruby on Rails Tutorial',
        price: 27.50, 
        qty: 2,
        description: 'Ruby on Rails Tutorial by Michael Hartl has become a must-read for developers learning how to build Rails apps.',
        category: categories[0],
        user: users[1]
        # , image_url: 'https://m.media-amazon.com/images/I/41bHhBrkvGL._SX260_.jpg'
    },
    {
        name: '5 Drawer Dresser Organizer Fabric Storage Chest for Bedroom, Hallway, Entryway, Closets, Nurseries. Furniture Storage Tower Sturdy Steel Frame, Wood Top, Easy Pull Handle Textured Print Drawers',
        price: 57.99, 
        qty: 10,
        description: '5 Drawer fabric storage organizer for closets, bedrooms, playrooms, and more. Sturdy steel frame wood top with smooth finish. Soft fabric drawers with Easy pull-out fabric handles. Adjustable-height plastic feet to prevent wobbling and floor damage',
        category: categories[1],
        user: users[0]
        # , image_url: 'https://images-na.ssl-images-amazon.com/images/I/91Uqv-cDZBL._AC_SX679_.jpg'
    },
    {
        name: 'Holiday Nut and Dried Fruit Gift Basket, Healthy Gourmet Snack Christmas Food Box, Great for Birthday, Sympathy, Family Parties & Movie Night or as a Corporate Tray - Oh! Nuts ',
        price: 29.50, 
        qty: 0,
        description: 'BEST SELLING DRIED FRUIT AND NUTS GIFT ARRANGMENT: WOW your guests with our signature Oh! Nuts Gift box filled to the brim with "12" varieties of healthy goodies. The lidded container is features an assortment of twelve HIGH-QUALITY GRADE A DRIED FRUITS AND NUTS. Replace the traditional candy, chocolates, and baked goods with healthier, trendier vegan treats. PRESENT A GIFT THAT LEAVES A MEMORABLE IMPRESSION.',
        category: categories[2],
        user: users[3]
        # , image_url: 'https://images-na.ssl-images-amazon.com/images/I/A1xrmY8UVJL._SL1500_.jpg'
    },
    {
        name: 'QI-EU Wireless Charger, 4 in 1 Qi-Certified Fast Charging Station Compatible Apple Watch Airpods Pro iPhone 12/11/11pro/X/XS/XR/Xs Max/8/8 Plus, Wireless Charging Stand Compatible Samsung Galaxy S20',
        price: 29.50, 
        qty: 100,
        description: 'The charger station uses the most advanced automatic control technology. Built-in safeguards against overcharge, overcurrent and overvoltage protection, temperature control, foreign object detection. Guards your device battery against overcharge damage.(Note: remove the magnetic or metal accessories from the phone case when charging.)',
        category: categories[3],
        user: users[0]
        # , image_url: 'https://images-na.ssl-images-amazon.com/images/I/61HmsgMfnPL._AC_SL1500_.jpg'
    }
]

products.each{|product| Product.create(product)}
prices = Product.all.map{|product| product.price}


products = Product.all
orders = [
    {qty: 1, user:users[3], product: products[3], amount: prices[3]*1},
    {qty: 1, user:users[3], product: products[1], amount: prices[1]*1},
    {qty: 1, user:users[3], product: products[0], amount: prices[0]},
    {qty: 1, user:users[3], product: products[0], amount: prices[0]*1},
    {qty: 10, user:users[3], product: products[3], amount: prices[3]*10},
    {qty: 2, user:users[1], product: products[3], amount: prices[3]*2},
    {qty: 10, user:users[2], product: products[3], amount: prices[3]*10},
    {qty: 2, user:users[2], product: products[3], amount: prices[3]*2}
]
orders.each{|order| Order.create(order)}