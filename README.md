3.  **Install PM2 globally:**
    PM2 is installed globally so you can manage processes from anywhere.
    ```bash
    npm install -g pm2
    ```


## 🚀 Running the Application with PM2

This project uses PM2, a production process manager, to keep the Node.js application running continuously and manage its processes.

**Prerequisites:**
* Node.js (v14 or higher recommended)
* npm (Node Package Manager)

**Installation & Setup:**

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd your-project-name
    ```

2.  **Install project dependencies:**
    ```bash
    npm install
    ```

3.  **Install PM2 globally:**
    PM2 is installed globally so you can manage processes from anywhere.
    ```bash
    npm install -g pm2
    ```

4.  **Configure Environment Variables:**
    Create a `.env` file in the project root or use an `ecosystem.config.js` for environment variables like `DATABASE_URL` and `PORT`.

    *Example (`.env` file):*
    ```
    PORT=3000
    DATABASE_URL=postgres://user:password@localhost:5432/your_database_name
    ```

5.  **Start the application with PM2:**
    ```bash
    pm2 start server.js --name todo-app
    # OR, if using ecosystem.config.js:
    # pm2 start ecosystem.config.js --env development 
    ```

6.  **Enable Autostart on System Reboot (One-time setup):**
    To ensure the application restarts automatically after a system reboot:
    ```bash
    pm2 save
    # Follow the instructions given by the next command to generate the system startup script:
    pm2 startup
    ```
    *You will need to copy and run the `sudo env PATH=...` command provided by `pm2 startup`.*

**Monitoring & Management:**

* **List running apps:** `pm2 list`
* **View logs:** `pm2 logs todo-app`
* **Interactive dashboard:** `pm2 monit`
* **Restart app (after code changes):** `pm2 restart todo-app`
* **Stop app:** `pm2 stop todo-app`
* **Delete app from PM2 list:** `pm2 delete todo-app`

---

### 2. Git Commands: Pulling Files and Repositories

Git's `pull` command is primarily designed for branches, not individual files directly. When you "pull," you're typically fetching changes from a remote branch and merging them into your current local branch.

#### a) Command to Pull the **Whole Repository** (or rather, update your local branch with remote changes)

To update your current local branch with all the latest changes from its tracked remote branch:

```bash
git pull