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

For the test purpose, these imageId's can be used:

2f9103bbf1374-OLXAUTOTR
<br/>
657402bffbf94-OLXAUTOTR
<br/>
f4413c0d6cb84-OLXAUTOTR
<br/>
387f292d79264-OLXAUTOTR
<br/>
68fdf1c821704-OLXAUTOTR
<br/>
952414f414954-OLXAUTOTR


<h1>IMPORTANT!!!!
<br/>
SITUATIONS TO BE CONSIDERED DURING TESTING PROCESSES</h1>
While doing these operations, it may be thought that the project is faulty. It is necessary to pay attention to the following points that appear to be errors:

1) When we go to the routes in the frontend (home page, login, sendProducts) and refresh the browser, the following error appears:
Could not find a canister id to forward to. This problem is caused by the canisters not being recognized by the browser when we refresh the page. It is a problem independent of the project. To prevent this, we need to click on the frontend link in the frontend and backend linker given to us after dfx deploy in the terminal of the relevant code. Clicking on different pages works as long as the page is not refreshed.

2) When sending a product after login (the page entered with the sendProduct button), sometimes the screen may remain static due to a detail I overlooked in informing whether the transaction was successful, partially successful or unsuccessful. After the first product is sent, a request is made to the products canister to save the product, and as per the canister logic, it returns None after the first data is added, causing the page to remain static. In other words, after sending a product, there may NOT be automatic redirection to the products page! Therefore, to determine whether the product has been sent or not, after pressing the send product button, you should wait for a while and click the 'Main Page' button at the top left of the screen. You can also check the product on the Letgo website. Moreover, if the product has been sent, a 'Product has been sent successfully' message will be sent to the user's e-mail in a very short time. (This is a problem caused by me due to time constraints and marketplace integrations being very comprehensive processes)

3) Letgo REQUIRES EACH PRODUCT TO HAVE A SEPARATE IMAGEID. Therefore, when sending a product, the image ID of each product must be different.
Additionally, if we send 2 products with the same imageId, it will accept the first one and send the information of the first product to the API response in our second submission. This problem is caused by Letgo.
Normally, it should give a warning, but it gives a confirmation response as if the second product is gone, but gives us the information of the first product. If you ask why the product did not arrive, this is one of the possible reasons.

That's why I wanted to inform you and those who will test it. Below I am adding new ids, 2 different ids in each category. I'm also adding the URL next to them to check the pictures.
If you write these ids in the image_id section of the product submission, the products will be sent. I would also like to remind you again that EACH PRODUCT MUST HAVE A SEPARATE imageID. It is also required to have a real Letgo account. (You can become a member in a short time via e-mail and start sending products)

Additionally, category Ids can be accessed from the backend Canister via 'import_categories' method. (For example:
  "id": "707",
  "key": "headphones-sound-systems",

  "id": "704",
  "key": "tv-display-systems",

  "id": "601",
  "key": "smartphones",

  id": "1401",
  "key": "clothing"
.
.
.
)

New ImageId list

Headphone
"id": "3eb5a1c5833f4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/adb32d8113134-OLXAUTOTR/image"

"id": "adb32d8113134-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/adb32d8113134-OLXAUTOTR/image"

laptop
"id": "619ea650539c4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/619ea650539c4-OLXAUTOTR/image"

"id": "bf3b184d944a4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/bf3b184d944a4-OLXAUTOTR/image"

lcd
"id": "fbc6b9690f1d4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/fbc6b9690f1d4-OLXAUTOTR/image"

"id": "9cc6cb23b62a4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/9cc6cb23b62a4-OLXAUTOTR/image"

nutella
"id": "343103cbf2db4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/343103cbf2db4-OLXAUTOTR/image"

"id": "21c087e2a5344-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/21c087e2a5344-OLXAUTOTR/image"

refrigerator
"id": "8559ee6970f04-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/8559ee6970f04-OLXAUTOTR/image"

"id": "927bcd6769c14-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/927bcd6769c14-OLXAUTOTR/image"

shoes
"id": "b67ea95c880c4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/b67ea95c880c4-OLXAUTOTR/image"

"id": "d7cc7fc7c7f94-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/d7cc7fc7c7f94-OLXAUTOTR/image"

smartwatch
"id": "70fbe7b5540a4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/70fbe7b5540a4-OLXAUTOTR/image"

"id": "675eca96290d4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/675eca96290d4-OLXAUTOTR/image"

thermos
"id": "028943bd454e4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/028943bd454e4-OLXAUTOTR/image"

"id": "92d98a35044e4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/92d98a35044e4-OLXAUTOTR/image"

toast machine
"id": "6ef632ba514c4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/6ef632ba514c4-OLXAUTOTR/image"

"id": "c19c6b0ef3ef4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/c19c6b0ef3ef4-OLXAUTOTR/image"

tshirt
"id": "c3ad65c44d694-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/c3ad65c44d694-OLXAUTOTR/image"

"id": "5e80ecfb49fd4-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/5e80ecfb49fd4-OLXAUTOTR/image"

wallpano
"id": "0f0c7b4509a84-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/0f0c7b4509a84-OLXAUTOTR/image"

"id": "8edd871e83c04-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/8edd871e83c04-OLXAUTOTR/image"

washing machine
"id": "a57fb4f0d8534-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/a57fb4f0d8534-OLXAUTOTR/image"

"id": "ce836e2f03b04-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/ce836e2f03b04-OLXAUTOTR/image"

watch
"id": "8fb07b2e23774-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/8fb07b2e23774-OLXAUTOTR/image"

"id": "bffe922fe6294-OLXAUTOTR",
"url": "https://imvm.letgo.com/v1/files/bffe922fe6294-OLXAUTOTR/image"


