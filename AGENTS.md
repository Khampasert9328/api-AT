# AGENTS.md

## Cursor Cloud specific instructions

### Project overview
This is **api-at**, an Express.js REST API (Node.js) serving as a CMS backend for the Archineer Technology corporate website. It supports bilingual content (English/Lao) with i18next and stores data in MongoDB Atlas.

### Running the dev server
```
npm run dev
```
This starts nodemon on port **8000** with hot reload. The server connects to MongoDB Atlas on startup and logs `connect success`.

### Key caveats
- **MongoDB connection is hardcoded** in `config/connectDB.js` to a MongoDB Atlas cluster (not read from `.env`). The Atlas cluster is accessible from the cloud VM.
- **No linter, no test framework, no build step** are configured in this project. There are no `lint`, `test`, or `build` scripts in `package.json`.
- **Multer image directories** must exist before file uploads work. Required directories under `./images/`: `home`, `products`, `service`, `teams`, `customers`, `contact`, `about`. The update script creates these automatically.
- **API routes** are nested under `/api/v1/{resource}/{action}`, e.g. `/api/v1/home/gethome?language=en`. The `language` query parameter (`en` or `lo`) is required for GET and POST operations.
- All endpoints require multipart form data with image files for POST/PUT operations.
