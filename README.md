# Shopify nodejs app example

## Before Developmet

### Step 0. Clone this code base
```
git clone git@github.com:jaydenlin/shopify-nodejs-app.git
```
### Step 1. Create a Shopify development store & an app
Go to Patrer Dashboard & login. (https://partners.shopify.com/).  
Create a development store for the app to test.  
Follow this guide to create a public app.
https://help.shopify.com/en/api/getting-started/authentication/public-authentication

### Step 2. Download ngrok and run
```
./ngrok http 3000
```
And you will see a forwarding url, like
```
https://{XXXXXXX}.ngrok.io
```

### Step 3. Update app information
Go to shopify Patrer Dashboard & login. (https://partners.shopify.com/)  
Press `Apps` to edit the app information
* App Url  
```
https://{XXXXXXX}.ngrok.io/shopify
```
* Whitelist Url  
```
https://{XXXXXXX}.ngrok.io/shopify 
https://{XXXXXXX}.ngrok.io/shopify/callback
```

### Step 4. Add API_KEY & API_SECRET at `.env` file
Go to shopify Patrer Dashboard & login. (https://partners.shopify.com/)  
Press `Apps` to see API key & API secret.  
Please add `.env` file at the root of this project folder.  
```
SHOPIFY_API_KEY="{YOUR_API_KEY}"
SHOPIFY_API_SECRET="{YOUR_API_SECRET_KEY}"
FORWARDING_ADDRESS={ngrok forwarding url}
```

## Development

## How to use

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```
