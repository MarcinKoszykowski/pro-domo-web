const email = (data, type) => {
  const { name, firm, nip, email: emailData, tel, city, postCode, message } = data;
  return type === 'firm'
    ? `subject=Formularz kontaktowy - pożyczka firmowa&message=
    <body>
        <html>
            <div style="margin-bottom: 20px; background-color: #ec9213; padding: 15px 20px;">
                <p style="margin: 0; font-size: 20px; letter-spacing: 1px; color: #fff; font-weight: 600;">Pro Domo</p>
            </div>
            <div style="padding: 0 20px;">
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">nadawca:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${name}</p>
                </div>
                <div>
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">firma:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${firm}</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">nip:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${nip}</p>
                </div>
                <div>
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">email:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${emailData}</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">telefon:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">
                        <a href="tel:+48${tel}">${tel}</a>
                    </p>
                </div>
                <div>
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">miasto:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${city}</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">kod pocztowy:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${postCode}</p>
                </div>
                <p style="margin: 0; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-bottom: 5px;">Treść wiadomości</p>
                <p style="margin: 0; color: #6d797e; font-size: 16px; font-weight: 500;">${message}</p>
            </div>
            <div style="margin-top: 30px; background-color: #6d767e; padding: 15px 20px;">
                <p style="margin: 0; font-size: 14px; color: #fff; font-weight:400;"> Ta wiadomość została wysłana przez formularz kontaktowy na stronie Pro Domo Sp. z o.o. </p>
            </div>
        </html>
    </body>`
    : `subject=Formularz kontaktowy - pożyczka indywidualna&message=
    <body>
        <html>
            <div style="margin-bottom: 20px; background-color: #ec9213; padding: 15px 20px;">
                <p style="margin: 0; font-size: 20px; letter-spacing: 1px; color: #fff; font-weight: 600;">Pro Domo</p>
            </div>
            <div style="padding: 0 20px;">
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">nadawca:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${name}</p>
                </div>
                <div>
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">email:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${emailData}</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">telefon:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">
                        <a href="tel:+48${tel}">${tel}</a>
                    </p>
                </div>
                <div>
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">miasto:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${city}</p>
                </div>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0; display: inline; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-right: 5px;">kod pocztowy:</p>
                    <p style="margin: 0; display: inline; color: #6d797e; font-size: 16px; font-weight: 500;">${postCode}</p>
                </div>
                <p style="margin: 0; text-transform: uppercase; font-size: 16px; font-weight: 500; margin-bottom: 5px;">Treść wiadomości</p>
                <p style="margin: 0; color: #6d797e; font-size: 16px; font-weight: 500;">${message}</p>
            </div>
            <div style="margin-top: 30px; background-color: #6d767e; padding: 15px 20px;">
                <p style="margin: 0; font-size: 14px; color: #fff; font-weight:400;"> Ta wiadomość została wysłana przez formularz kontaktowy na stronie Pro Domo Sp. z o.o. </p>
            </div>
        </html>
    </body>`;
};

export default email;
