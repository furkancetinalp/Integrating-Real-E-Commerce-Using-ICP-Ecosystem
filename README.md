# Integrating Real E-Commerce Using ICP Ecosystem


The e-commerce sector has a very important place in the world's software system. This constantly growing ecosystem causes problems such as data loss and performance. This raises the idea that e-commerce can take place in the blockchain field.

In order to increase the use of blockchain, it is necessary to transfer the areas that people use most commonly to the blockchain. This project was carried out to expand the use of the blockchain area and to show that the e-commerce system operating in the web2 field can be transferred to the blockchain with ICP.

![full-Internet-Computer-logo](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/5be71aea-2f90-4f6b-a4a6-8333879ebdbd)


<h1>
  
In this project, a popular e-commerce company in Turkey which is named Letgo is selected. E-commerce marketplace integration is implemented without any API documentation.
</h1>

![letgo-video-ilan-696x392](https://github.com/furkancetinalp/Integrating-Real-E-Commerce-Using-ICP-Ecosystem/assets/99509540/86eb81ca-32c0-4d6c-8676-cfe060fe46f4)


<h1>SIMPLE DOCUMENTATION AND INSTRUCTION</h1>

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












