# react-course-comfy-sloth
 Comfy Sloth is an e-commerce with which you can design your comfort zone.

NOTE: To run the app without problems, do not use the "npm start" command, if this is used, the payments part of the app will not work since it will not load the functions in Netlify-CLI, preferably use the "npm run dev" command to open "localhost:8888" or directly in the deploy "https://comfy-sloth-sd.netlify.app/".

You can navigate through the different pages, on the Product page you can filter by search, by category, by company, by price, by color and by whether they have free shipping, you can also order them by lowest and highest price and alphabetically from A-Z and Z-A, you can also change the way the products are displayed, either in the form of a list or grid; the products are fetched from a database in Firebase called "products" which in turn has a nested database called "itemDetail" that contains the view data for each individual product.

If the product is in stock then you can add it to the cart, select how many items you want and the color, you can also see the reviews and the rating (stars) of each product; If the product is not in stock, the add-to-cart functions will not appear, you will also see a legend that says "Out Of Stock", once you add a product it will redirect you to the Cart page and you can also access it from the Cart button that is on the Navbar.

To make the purchase of your items in the cart you must register, you can do it through the "login" button found in the Navbar or from the Cart page, both will redirect you to a registration form provided by Auth0. 

Once you have logged in you can access the Checkout page which has a payment method through Stripe linked to functions declared in Netlify-CLI, you can copy and paste the card number to do the payment test and add a date of expiration, the security code and a 5-digit C.P. after the payment has been executed, it will return you to the home page
