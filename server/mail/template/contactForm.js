exports.contactUsEmail = (
    name, email, message
) => {
    return `
        <!DOCTYPE html>
        <html>
        <title>Email</title>

        <body>
            <div>
                <p>I'll get back to you soon.</p>
                <p>${name}</p>
                <p>${email}</p>
            </div>
        </body>
        </html>
    `
}