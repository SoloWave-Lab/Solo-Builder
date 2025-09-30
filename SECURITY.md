# Security Policy

## Supported Versions

We release security updates only for the latest stable version of **Solo Builder**. Older versions may not receive patches.

| Version       | Supported |
| ------------- | --------- |
| Latest (main) | ✅         |
| Older         | ❌         |

---

## Reporting a Vulnerability

We take security seriously and appreciate your efforts to responsibly disclose vulnerabilities.

* **Email**: [Solo-Builder ](mailto:youhaveme064@gmail.com)
* **Subject**: `[SECURITY] Vulnerability Report`

Please include:

* A clear description of the vulnerability
* Steps to reproduce the issue
* Potential impact
* Suggested fix (if any)

We will acknowledge your report within **48 hours** and provide updates until the issue is resolved.

---

## Security Best Practices

When building apps with Solo Builder, follow these guidelines:

* **Authentication**: Use strong `AUTH_SECRET` values generated with secure random tools.
* **Database**: Restrict database access to trusted networks and use strong passwords.
* **Sessions**: Always run over HTTPS in production to protect session cookies.
* **Environment Variables**: Never commit `.env` files to version control.
* **Dependencies**: Regularly update `pnpm` dependencies to patch known vulnerabilities.
* **Access Control**: Rely on Solo Builder’s ownership mapping to prevent unauthorized access.

---

## Responsible Disclosure

If you discover a security issue, we kindly ask that you:

1. Do **not** disclose it publicly until it has been fixed.
2. Provide us with sufficient detail to reproduce and validate the issue.
3. Allow us a reasonable timeframe to release a patch.

By following responsible disclosure, you help keep the Solo Builder community safe and secure.

---

Thank you for helping us improve the security of **Solo Builder** 🙏
