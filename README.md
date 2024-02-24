# Integrating Real E-Commerce Using ICP Ecosystem


The e-commerce sector has a very important place in the world's software system. This constantly growing ecosystem causes problems such as data loss and performance. This raises the idea that e-commerce can take place in the blockchain field.

In order to increase the use of blockchain, it is necessary to transfer the areas that people use most commonly to the blockchain. This project was carried out to expand the use of the blockchain area and to show that the e-commerce system operating in the web2 field can be transferred to the blockchain with ICP.

![full-Internet-Computer-logo](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/5be71aea-2f90-4f6b-a4a6-8333879ebdbd)


<h1>
  
In this project, a popular e-commerce company in Turkey which is named Letgo is selected. E-commerce marketplace integration is implemented without any API documentation.
</h1>

![letgo-video-ilan-696x392](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/86eb81ca-32c0-4d6c-8676-cfe060fe46f4)


<h1>SIMPLE DOCUMENTATION AND INSTRUCTION</h1>

<h3> NOTE!!! IN ORDER TO TEST THE PROGRAM, IT IS REQUIRED TO HAVE A REAL LETGO ACCOUNT </h3>
<H2>DOCUMENTATION</H2>

Canisters:


get_all_categories_from_canister => gets the imported categories from marketplace
<br/>
get_all_products_from_canister => gets imported categories from marketplace
<br/>
get_category_by_name  => gets category by its name
<br/>
get_product => gets product by its unique id which is assigned by Letgo
<br/>
import_categories => imports all categories from Letgo and saves into canister
<br/>
import_products => imports user's products from Letgo and saves into canister
<br/>
login_letgo => login to Letgo method
<br/>
sendProductLetgo => send product method



<H2>INSTRUCTION</H2>
(Make sure node modules are installed)

```
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

1) After program starts, it redirects the products page, just because there was no import from marketplace or sending product to marketplace,
cliend will be informed with 204 status code. 

![Ekran Görüntüsü (224)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/ad8a427c-c1d9-4c36-a480-943a04bba3d7)

2) We switch to the login page and type real email and password to connect Letgo
![Ekran Görüntüsü (220)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/6dbddfc1-18e0-47eb-9b76-27ddc7e00cfb)

3) After successful login, client is directed to main page
![Ekran Görüntüsü (225)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/a73410c0-7075-4559-b902-4da8c59741cb)

4) As it seen, there is no product. With the 'Import Products' button, we can import products from Letgo and save them. After importing:
![Ekran Görüntüsü (223)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/9143e311-9c02-449e-a4d5-1008b1c91854)

![Ekran Görüntüsü (230)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/5e0cc4ad-cf88-415a-9338-39b924817929)

5) These products are currently published in the Letgo (Some of them was rejected because of irrelevant pictures) (ALL ITEMS ARE ADDED FROM ICP)
![Ekran Görüntüsü (233)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/fec0bce2-058c-4573-9f8c-23f9c4fc96af)

![Ekran Görüntüsü (227)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/f9da3ed6-3e98-4986-afba-c1ddaa9544ae)

6) Sending product to Letgo from ICP (CategoryId can be selected from import_categories and get_all_categories_from_canister methods; just because Letgo does not allow to add image from url, they directly takes from form data, So, imageId's are get manually)
![Ekran Görüntüsü (215)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/0d5022eb-8843-4393-8fb6-8707edad4a7e)

7) After sending the item to Letgo from ICP, it is published within minutes
![Ekran Görüntüsü (228)](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/8d8b6be5-6178-4e77-a6af-ab7689ab938a)













