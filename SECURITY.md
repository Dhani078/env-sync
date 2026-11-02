SECURITY POLICY: env-sync

1. Security Posture and Secret Isolation
env-sync is explicitly engineered to prevent credential leakage into source control:
- Values Stripping: When generating or updating .env.example, values are discarded and replaced with generic labels (your_variable_name_here).
- Local Scope: Operates completely on the local machine with zero external network access.
- Non-Destructive: Never modifies the active .env file containing real developer secrets.

2. Vulnerability Reporting
- Maintainer: Dhani078
- Security Contact: dhanisepeda@gmail.com
