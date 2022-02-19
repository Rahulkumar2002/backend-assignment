const { getAInvoiceRow, getAllInvoiceRowOFAInvoice, createAInvoiceRow, deleteAInvoiceRow, updateAInvoiceRow } = require('../controllers/invoiceRow')



const router = require('express').Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      InvoiceRow:
 *          type: Object
 *          required:
 *              - invoiceId
 *              - item
 *              - quantity
 *              - rate
 *          properties:
 *               invoiceId: 
 *                  type: String
 *                  description: The id of the invoice in which you want to add rows.
 *               item :
 *                  type: String
 *                  description : Name of the item or service.    
 *               quantity :
 *                  type: String
 *                  description : No. of items is purchased or hours of the service which is used.    
 *               rate :
 *                  type: Date
 *                  description : Rate per product or rate per hour.
 *          example:
 *            invoiceId: <The id of the invoice in which you want to add rows>        
 *            item: <item name>
 *            quantity: <quantity>         
 *            rate: <rate per product or service hour>
 */

/**
 * @swagger
 * tags:
 *  name: InvoiceRow
 *  description: The invoice row api
 */

/**
 * @swagger 
 * /api/v1/invoices/invoicerow/{invoicerowId}:
 *    get: 
 *      summary: Return the invoice row present in the Database with given id in parameters.
 *      tags: [InvoiceRow]
 *      parameters:
 *       - in: path
 *         name: invoicerowId
 *         schema:
 *           type: string
 *         required: true
 *         description: The invoice row id
 *      responses:
 *        200:
 *          description: The invoice row with given id.
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: array 
 *                      items:
 *                          $ref: '#/components/schemas/InvoiceRow'
 *        404:
 *              description: The Invoice row was not found
 * 
*/

router.get("/:invoicerowId", getAInvoiceRow)

/**
 * @swagger 
 * /api/v1/invoices/invoicerow/allrows/{invoiceId}:
 *    get: 
 *      summary: Return the all invoice row in the Database with given id of invoice present in parameters.
 *      tags: [InvoiceRow]
 *      parameters:
 *       - in: path
 *         name: invoiceId
 *         schema:
 *           type: string
 *         required: true
 *         description: The invoice id
 *      responses:
 *        200:
 *          description: All invoicerow assoicated with the given invoice with given id.
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: array 
 *                      items:
 *                          $ref: '#/components/schemas/InvoiceRow'
 *        404:
 *              description: The Invoice row was not found
 * 
*/

router.get("/allrows/:invoiceid", getAllInvoiceRowOFAInvoice)

/**
 * @swagger
 * /api/v1/invoices/invoicerow:
 *   post:
 *     summary: Create a new invoice row
 *     tags: [InvoiceRow]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InvoiceRow'
 *     responses:
 *       201:
 *         description: The Invoice row is successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InvoiceRow'
 *       500:
 *         description: Some server error
 */

router.post("/", createAInvoiceRow)

/**
 * @swagger
 * /api/v1/invoices/invoicerow/{invoicerowId}:
 *   delete:
 *     summary: Remove the invoice row by id
 *     tags: [InvoiceRow]
 *     parameters:
 *       - in: path
 *         name: invoicerowId
 *         schema:
 *           type: string
 *         required: true
 *         description: The Invoice row id
 * 
 *     responses:
 *       204:
 *         description: The Invoice row was deleted
 *       404:
 *         description: The invoice row with given id doesn't exits
 *       500:
 *         description: Some server error
 */

router.delete("/:invoicerowId", deleteAInvoiceRow)

/**
 * @swagger
 * /api/v1/invoices/invoicerow/{invoicerowId}:
 *  patch:
 *    summary: Update the invoice row by the id
 *    tags: [InvoiceRow]
 *    parameters:
 *      - in: path
 *        name: invoicerowId
 *        schema:
 *          type: string
 *        required: true
 *        description: The Invoice row id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/InvoiceRow'
 *    responses:
 *      200:
 *        description: The Invoice row was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/InvoiceRow'
 *      404:
 *        description: The Invoice row with given id was not found
 *      500:
 *        description: Some error happened
 */
router.patch("/:invoicerowId", updateAInvoiceRow)

module.exports = router