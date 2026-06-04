# Vulnerable Snyk Test Project

This is a simple Node.js project containing highly vulnerable dependencies designed specifically for demonstrating, testing, and scanning with Snyk security tools.

## Included Vulnerabilities

The `package.json` contains several direct dependencies locked to old, vulnerable versions:

1. **`lodash@4.17.4`**: Prone to Prototype Pollution.
2. **`express@4.16.0`**: Susceptible to Open Redirect, Prototype Pollution, and other CVEs.
3. **`minimist@0.0.8`**: Prone to Prototype Pollution (`CVE-2020-7598`).
4. **`axios@0.18.0`**: Prone to Server-Side Request Forgery (SSRF) (`CVE-2020-28168`).

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Snyk Scan**
   Ensure you have the Snyk CLI installed and authenticated:
   ```bash
   snyk test
   ```

3. **Run the Application (Optional)**
   ```bash
   npm start
   ```

## CI/CD Pipeline Integration

I have configured a **GitHub Actions** workflow at [.github/workflows/snyk.yml](file:///c:/Users/adity/OneDrive/Desktop/Capgemini%20DevOps/snykTest/.github/workflows/snyk.yml).

### Setting up the Snyk Token in CI/CD
To run Snyk in any pipeline, you need to acquire a Snyk API token:
1. Go to your **Snyk Account Settings** -> **API Token**.
2. Copy the token.
3. Add it as a secret named `SNYK_TOKEN` in your repository/pipeline settings.

