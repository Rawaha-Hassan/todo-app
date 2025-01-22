# Todo Application

## Deployment Instructions for Netlify

To deploy this application on Netlify, follow these steps:

1. **Connect to Netlify**: Go to [Netlify](https://www.netlify.com/) and sign in or create an account.
2. **New Site from Git**: Click on "New site from Git" and connect your Git repository.
3. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
4. **Environment Variables**: If your application uses environment variables, make sure to set them in the Netlify dashboard under "Site settings" > "Build & deploy" > "Environment".
5. **Deploy Site**: Click on "Deploy site" to start the deployment process.

## Local Development

To run the application locally, use the following command:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.
