const { getAInvoiceById, createAInvoice, updateAInvoice, deleteAInvoice, getAllInvoice } = require('../controllers/invoice')
const Invoice = require('../models/Invoice')

const router = require('express').Router()
/**
 * @swagger
 * components:
 *  schemas:
 *      Invoice:
 *          type: Object
 *          required:
 *              - note
 *              - status 
 *              - duedate
 *          properties:
 *               id: 
 *                  type: String
 *                  description: The auto generated id of the invoice.
 *               note :
 *                  type: String
 *                  description : The note which invoice creator want to show in the bottom of the invoice.    
 *               status :
 *                  type: String
 *                  description : You can currentl choose any status from ["paid", "outstanding", "late", "pending"].    
 *               duedate :
 *                  type: Date
 *                  description : This the duedate of the invoice provided by the invoice creator.
 *          example:
 *            note: Due date is on 28 feb 2022.        
 *            status: pending
 *            duedate: 2022-2-28         
 */

/**
 * @swagger
 * tags:
 *  name: Invoice
 *  description: The invoice api
 */

/**
 * @swagger 
 * /api/v1/invoices/:
 *    get: 
 *      summary: Return all the invoice present in the Database.
 *      tags: [Invoice]
 *      responses:
 *        200:
 *          description: The list of the invoices.
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: array 
 *                      items:
 *                          $ref: '#/components/schemas/Invoice'
 *        404:
 *              description: The Invoice was not found
 * 
*/

router.get("/", getAllInvoice)

/**
 * @swagger
 * /api/v1/invoices/{id}:
 *   get:
 *     summary: Get the invoice by id
 *     tags: [Invoice]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The invoice id
 *     responses:
 *       200:
 *         description: The Invoice data by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Invoice'
 *       404:
 *         description: The Invoice was not found
 */

router.get("/:id", getAInvoiceById)

/**
 * @swagger
 * /api/v1/invoices/:
 *   post:
 *     summary: Create a new invoice
 *     tags: [Invoice]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Invoice'
 *     responses:
 *       201:
 *         description: The Invoice is successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Invoice'
 *       500:
 *         description: Some server error
 */

router.post("/", createAInvoice)

/**
 * @swagger
 * /api/v1/invoices/{id}:
 *  patch:
 *    summary: Update the invoice by the id
 *    tags: [Invoice]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The Invoice id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Invoice'
 *    responses:
 *      200:
 *        description: The Invoice was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Invoice'
 *      404:
 *        description: The Invoice was not found
 *      500:
 *        description: Some error happened
 */

router.patch("/:id", updateAInvoice)

/**
 * @swagger
 * /api/v1/invoices/{id}:
 *   delete:
 *     summary: Remove the invoice by id
 *     tags: [Invoice]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Invoice id
 * 
 *     responses:
 *       204:
 *         description: The Invoice was deleted
 *       500:
 *         description: Some server error
 */

router.delete("/:id", deleteAInvoice)

module.exports = router