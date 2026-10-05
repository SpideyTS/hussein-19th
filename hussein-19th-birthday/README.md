# 📼 HUSSEIN'S 19TH BIRTHDAY · DIGITAL MEMORY ARCHIVE

An interactive, mobile-first digital scrapbook and friendship time capsule built for Hussein's 19th birthday from Abdullah (Spidey).

---

## ✨ Features

- **🔐 Sealed Passcode Lock:** Protects the memory capsule. The passcode is **`2711`**.
- **🎧 ASMR Procedural Soundscape:** Web Audio API engine providing tactile paper rustle, camera shutter clicks, tape peeling, and warm ambient vinyl crackle.
- **📸 20+ Personal Memories & Photos:** Authentic photographs from KFC nights, park swings, Dunkin gifts, school chats, and the 14-photo Seoul travel scrapbook (including the Yeonjun haul, subway handles selfie, and the McDonald's fry inside joke).
- **🎵 Music Artifact Cards:** Direct deep links to Taylor Swift (*All Too Well 10-Min*, *WANEGBT*, *15*, *Paper Rings*), Louis Tomlinson (*Silver Tongue*), and NewJeans (*Ditto*).
- **📺 Riyadh Marathon Tickets:** Custom ticket stubs for *Glee*, *Gossip Girl*, and *The Summer I Turned Pretty*.
- **📱 Mobile-First Apple Polish:** Designed specifically for iPhone Safari, Dynamic Island, and thumb navigation.
- **⚡ Zero Build Dependencies:** Pure, high-performance static HTML/CSS/JS. No `npm install`, no build errors, instant GitHub Pages deployment.

---

## 🚀 How to Deploy on GitHub Pages (Takes 2 Minutes)

Because this website is built as pure modern static assets, deployment to GitHub Pages is instantaneous:

1. Create a new GitHub repository (e.g. `hussein-19th-birthday`).
2. Upload or push all files from this directory to the repository `main` branch.
3. In your GitHub repository:
   - Click **Settings** (top menu).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Set Branch to **`main`** and folder to **`/(root)`**, then click **Save**.
4. In about 60 seconds, GitHub will give you your live URL:
   `https://<your-username>.github.io/hussein-19th-birthday/`
5. Send the link to Hussein on his iPhone!

---

## 💻 How to Preview Locally Right Now

You can simply **double-click `index.html`** in Windows File Explorer to open and test the entire experience immediately in your browser (Chrome, Edge, or Safari).

- **Passcode:** `2711`
- **Toggle Sound:** Tap the top-right `SOUND OFF / ASMR ON` badge.

---

## 🖼️ How to Swap or Add More Photos

All narrative text, dates, songs, and photos are cleanly separated in `memoriesData.js`:

1. Drop your new image file into `assets/images/`.
2. Open `memoriesData.js`.
3. Find the chapter (e.g., `ch01` or `ch06`).
4. Replace `src: null` with `src: "assets/images/your-new-photo.jpg"`.
5. Save and refresh!
