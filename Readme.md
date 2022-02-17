# nodejs-store-api

## To run this project in your system : 
<ul>
<li>
   First fork it using the fork button on top right side of this page .
</li>
<li>
   Copy SSH link and open your Gitbash or your Codeeditor and run this git command "git clone <ssh link>"
   above command will copy your forked repo into the desired location of your system.
</li>
<li>
   Then run "npm install" to install all dependencies .
</li>
<li>
   After this you have to connect you MongoDB Atlas database with the server via a .env file . Name that variable MONGO_URI for ease .
</li>
</ul>

## In this API you can perform CRUD operations by hitting different end points . 
### Note: To test this API you can use software like Postman or a VSCode extension which is Thunder Client (It is similar to Postman , just you don't have to leave VSCode). 

### To create a invoice : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/" with a post request.</li>
<li>You have to provide these information in the requests body : </li>
<ol>
<li>{</li>
    <li>"note":"String",</li>
    <li>"duedate": Date(By default it is the date of the creation of invoice)</li>
    <li>"status":"String", (['paid', 'outstanding', 'late', 'pending'] You can provide any of these status.)</li>
<li>}</li>
</ol>
<li>You can use the below dummy data to create a invoice</li>
</ul>

```js
{
    "note":"Payment is required.",
    "status":"pending",
    "duedate":"2022-02-20"
}
```

### To delete a invoice : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/:id" with a delete request.</li>
<li>You have to provide id of the invoice which you want to delete in params: </li>
<li>After this send the request and check your DB , Your invoice will be deleted.</li>
<li>A status of 204 will pop up for successfull deletion.</li>
</ul>

### To get a invoice: 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/:id" with a get request.</li>
<li>You have to provide id of the invoice which you want to search in params: </li>
<li>After this send the request and response will come with your invoice or an error if invoice with this id is not present.</li>
</ul>

### To get all invoices: 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/" with a get request.</li>
<li>After this send the request and response will come with your all invoices.</li>
</ul>

### To update a product : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/:id" with a patch request.</li>
<li>You have to provide id of the invoice which you want to update in params. </li>
<li>You have to provide just the data which you want to update in the invoice in requests body.</li>
<li>After this send the request and updated response of invoice will come .</li>
</ul>



### To create a row in a invoice : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/invoicerow/" with a post request.</li>
<li>You have to provide these information in the requests body : </li>
<ol>
<li>{</li>
    <li>"invoiceId":"String"(It is the id of the invoice whose row you are creating.),</li>
    <li>"item": "String"(Name of the item purchased or the serivce used)</li>
    <li>"quanity":Number(No. of item purchased or the hour a service is used.)</li>
    <li>"rate":Number(Rate of one product or the hourly rate of a service.)</li>
<li>}</li>
</ol>
<li>You can use the below dummy data to create a invoice row</li>
</ul>

```js
{
    "invoiceId":"Fill it with invoice id of your created invoice in the above steps...",
    "item":"oil",
    "quantity":"10",
    "rate":"100"
}
```

### To delete a invoice row : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/invoicerow/:invoicerowId" with a delete request.</li>
<li>You have to provide id of the invoice row which you want to delete in params: </li>
<li>After this send the request and check your DB , Your invoice row will be deleted.</li>
<li>A status of 204 will pop up for successfull deletion.</li>
</ul>

### To get a invoice: 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/invoicerow/:invoicerowId" with a get request.</li>
<li>You have to provide id of the invoice row which you want to search in params: </li>
<li>After this send the request and response will come with your invoice row or an error if invoice with this id is not present.</li>
</ul>

### To get all invoice row of a invoice: 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/invoicerow/allrows/:invoiceid" with a get request.</li>
<li>After this send the request and response will come with your all invoice rows.</li>
</ul>

### To update a invoice row : 
### Note : Here I will be using port 8080 because default port is 8080 .
<ul>
<li>"localhost:8080/api/v1/invoices/invoicerow/:invoicerowId" with a patch request.</li>
<li>You have to provide id of the invoice row which you want to update in params. </li>
<li>You have to provide just the data which you want to update in the invoice row in requests body.</li>
<li>After this send the request and updated response of invoice row will come .</li>
</ul>






