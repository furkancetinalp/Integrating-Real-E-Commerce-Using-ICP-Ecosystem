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

# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```












To learn more before you start working with ecommerce, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Rust Canister Development Guide](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)
- [ic-cdk](https://docs.rs/ic-cdk)
- [ic-cdk-macros](https://docs.rs/ic-cdk-macros)
- [Candid Introduction](https://internetcomputer.org/docs/current/developer-docs/backend/candid/)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd ecommerce/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
