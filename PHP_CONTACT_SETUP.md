# PHP Contact Form Setup Guide

## Overview
The contact form has been updated to use PHP for backend email handling instead of the mailto link approach.

## What Was Created

### 1. PHP Backend File
**Location**: `public/send-email.php`

This file handles:
- Form data validation
- Email sanitization
- Sending emails via PHP's mail() function
- JSON responses for success/error states
- CORS headers for cross-origin requests

### 2. Updated Contact Component
**Location**: `src/components/Contact.tsx`

Changes:
- Async form submission using fetch API
- Loading states while sending
- Success/error message display
- Form reset on successful submission
- Proper error handling

## Setup Instructions

### For Development (Local Testing)

1. **Install PHP** (if not already installed)
   - Download from: https://www.php.net/downloads
   - Or use XAMPP/WAMP which includes PHP and Apache

2. **Update Email Address**
   - Open `public/send-email.php`
   - Change line 37: `$to = 'sameh.kouki.dev@gmail.com';` to your actual email

3. **Run with PHP Server** (for testing)
   ```bash
   # Navigate to the public folder
   cd public
   
   # Start PHP built-in server
   php -S localhost:8000
   ```
   
4. **Update Vite Config** (if needed)
   Add proxy to `vite.config.ts`:
   ```typescript
   export default {
     server: {
       proxy: {
         '/send-email.php': 'http://localhost:8000'
       }
     }
   }
   ```

### For Production Deployment

#### Option 1: Shared Hosting (cPanel/Plesk)
1. Upload all files including `public/send-email.php`
2. Ensure PHP is enabled on your hosting
3. Update the email address in `send-email.php`
4. The form should work automatically

#### Option 2: Custom Server
1. Ensure PHP is installed (`php -v` to check)
2. Configure your web server (Apache/Nginx) to handle PHP
3. Update email settings in `send-email.php`
4. Consider using PHPMailer for better email delivery

#### Option 3: Using PHPMailer (Recommended for Better Deliverability)

If emails aren't sending reliably, use PHPMailer with SMTP:

1. Install PHPMailer:
   ```bash
   composer require phpmailer/phpmailer
   ```

2. Update `send-email.php` to use SMTP (Gmail, SendGrid, etc.)

## Email Configuration

### Important: Update These Settings

In `public/send-email.php`, update:

```php
// Line 37 - Your receiving email
$to = 'your-email@example.com';

// Line 44 - Your domain (optional)
$headers = "From: noreply@yourdomain.com\r\n";
```

## Testing

### Test Locally:
1. Run the dev server: `npm run dev`
2. Fill out the contact form
3. Submit and check for success/error messages

### Check PHP Mail is Working:
Create `test-mail.php` in public folder:
```php
<?php
$to = 'your-email@example.com';
$subject = 'Test Email';
$message = 'This is a test email from PHP';
$headers = 'From: noreply@test.com';

if(mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully";
} else {
    echo "Email sending failed";
}
?>
```

Visit: `http://localhost:5174/test-mail.php`

## Troubleshooting

### Email Not Sending?

1. **Check PHP mail() is configured**
   - On Windows: Configure `sendmail` in php.ini
   - On Linux: Ensure sendmail/postfix is installed
   - Shared hosting: Usually works out of the box

2. **Use SMTP instead**
   - Install PHPMailer
   - Configure with Gmail/SendGrid/Mailgun SMTP
   - More reliable than PHP mail()

3. **Check spam folder**
   - Emails from PHP mail() often land in spam
   - Use SPF/DKIM records on your domain
   - Or use transactional email service (SendGrid, etc.)

4. **Enable error reporting**
   Add to `send-email.php`:
   ```php
   error_reporting(E_ALL);
   ini_set('display_errors', 1);
   ```

### CORS Errors?

If you see CORS errors in browser console:
- Ensure CORS headers are set in PHP file (already included)
- Check browser console for specific error messages
- May need to adjust server configuration

## Features

✅ Form validation (client + server side)
✅ Loading states during submission
✅ Success/error message display
✅ Email sanitization
✅ XSS protection
✅ Form reset on success
✅ Responsive design maintained

## Security Notes

- Input sanitization implemented
- HTML special characters escaped
- Email validation on both ends
- Consider adding rate limiting for production
- Consider adding CAPTCHA for spam prevention

## Alternative: Use a Service

If PHP setup is too complex, consider these alternatives:
- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **SendGrid**: https://sendgrid.com
- **Netlify Forms**: Built-in if using Netlify

Just update the fetch URL in Contact.tsx to point to the service endpoint.
