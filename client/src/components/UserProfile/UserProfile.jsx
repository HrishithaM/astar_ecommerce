import React from 'react'
import Footer from '../../components/Footer'
import "../UserProfile/UserProfile.css"

export const UserProfile = () => {
  return (
    // <div>
    //   UserProfile

    //   <Footer />
    //   </div>
    <div className="account-page">
            <div className="account-sidebar">
                <a href="/Products" className="return-link">Return to Store</a>
                <div className="account-info">
                    <h2>JAYA BANALA</h2>
                    <p>jbanala99@gmail.com</p>
                    <p>
                        1126 Elliot Avenue<br />
                        SEATTLE, WA, United States<br />
                        98109
                    </p>
                    <p>(206) 660-1442</p>
                </div>
            </div>
            <div className="account-main">
                <div className="logout-link">
                    <a href="#">Log out</a>
                </div>
                <h2>MY ACCOUNT</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Payment Status</th>
                            <th>Fulfillment Status</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#">218639-LR</a></td>
                            <td>August 16, 2024</td>
                            <td>NOT Paid</td>
                            <td>Unfulfilled</td>
                            <td>$33.99</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>

  );
}; 
