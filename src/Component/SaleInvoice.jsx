import React, { useState } from 'react'
import "./saleInvoice.css"
import More from './More'
import Share from './Share'

function SaleInvoice() {

    const [modal, setModal] = useState(false)
    const [emodal, setMeodal] = useState(false)

    const closeModal = () => setModal(false)
    const closeeModal = () => setMeodal(false)



    return (
        <>

            <div className="main">

                <div className="left"></div>

                {/* <div className="right"  > */}







                    {/* <div className="mid"> */}
                        <div className="first">
                            <div className="business">
                                <h4>Business logo</h4>
                            </div>
                            <div className="krinvi">
                                <p>Krinvi Trends</p><br />
                                <p>New Delhi</p>
                            </div>
                            <div className="tax">
                                <p>Original</p><br />
                                <p className='tax_invoice'>TAX INVOICE</p>
                            </div>

                        </div>


                        <div className="detail">
                            <div className="bill">
                                <p>Bill to</p><br />
                                <h5 className='nam1' >Dheeraj Kumar</h5>
                                <p>1234,ABC Street,Jaipur,<br />Rajasthan,India.<br />GST Number:12ABCDE1234F1Z5</p>
                            </div>

                            <div className="ship">
                                <p>Ship to</p><br />
                                <h5 className='nam2' >Dheeraj Kumar</h5>
                                <p>1234,ABC Street,Jaipur,<br />Rajasthan,India.<br />GST Number:12ABCDE1234F1Z5</p>
                            </div>

                            <div className="grand">
                                <table className='tb'>
                                    <tr>
                                        <th>Grand Total</th>
                                        <th >419.16</th>

                                    </tr>
                                    <hr />
                                    <tr>
                                        <td  >Invoice no#</td>
                                        <td >1</td>


                                    </tr>
                                    <tr>
                                        <td >Invoice date</td>
                                        <td >24 th May 2023</td>
                                    </tr>
                                    <tr>
                                        <td>Due Date</td>
                                        <td >8 th May 2023</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="all">

                            <div className="uall">
                                <table>
                                    <tr>
                                        <th>Item</th>
                                        <th>HSN/SAC</th>
                                        <th>Unit Price</th>
                                        <th>Document</th>
                                        <th>Quantity</th>
                                        <th>GST</th>
                                        <th>TOTAL</th>

                                    </tr>
                                    <tr>
                                        <td>T-Shirt</td>
                                        <td>-</td>
                                        <td>499</td>
                                        <td>99.8<br />20.0%</td>
                                        <td>1 pcs</td>
                                        <td>19.96<br />5.0%</td>
                                        <td>419.16</td>
                                    </tr>


                                </table>
                            </div>
                            <hr />

                            <div className="terms">
                                <ol>
                                    <h5>Terms and Conditions</h5>
                                    <li>Items can not be returned</li>
                                    <li>if invoice has not been paid in 5 days after due <br />date, a tax of 10% of total value is applied to each <br />day of delay</li>
                                </ol>
                            </div>
                            <div className="bank">

                                <table>
                                    <tr  ><h5 >Our Bank Details</h5></tr>
                                    <tr>

                                        <th>Bank Name</th>
                                        <th>HDFC</th>
                                    </tr>
                                    <tr>
                                        <td>Account no</td>
                                        <td>1233445567890</td>



                                    </tr>
                                    <tr>
                                        <td>Branch</td>
                                        <td>Wonder Land</td>
                                    </tr>
                                    <tr>
                                        <td>IFSC</td>
                                        <td>HDFC008542</td>
                                    </tr>
                                    <tr>
                                        <td>UPI ID</td>
                                        <td>Krinvitrends@okicici</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="down">
                                <div class="signature-box">
                                    <canvas class="signature" id="signatureCanvas"></canvas>
                                </div>

                                <p class="instructions">Customer Signature</p>
                                <div className="authorized">

                                    <p class="instructions">For Krinvi Trends</p>
                                    <div class="signature-box">
                                        <canvas class="signature" id="signatureCanvas"></canvas>
                                    </div>

                                    <p class="instructions">Authorizrd Signatory.</p>


                                </div>
                            </div>



                        </div>
                    {/* </div> */}

                    {/* <div className="end"> */}

                    {/* </div> */}
                    <div className="uend">

                        <button type='submit' className='btn_share' onClick={() => setMeodal(true)}>Share Invoice</button>
                        {
                            emodal && <Share closeeModal={closeeModal} />
                        }


                        <button type='submit' className='btn_more' onClick={() => setModal(true)} >More Option</button>
                        {
                            modal && <More closeModal={closeModal} />
                        }

                    </div>
                {/* </div> */}



            </div>

        </>
    )
}

export default SaleInvoice