# Church Website Template — Papua New Guinea

A modern, accessible, mobile-friendly website template for churches in Papua New Guinea. This project is designed for easy customization and quick deployment for your church or ministry.

---

## Folder Structure

```
/
├── index.html              # Home page
├── about.html              # About page (history, beliefs, community)
├── services.html           # Services: mission, ministries, sermons, events, donate
├── contact.html            # Contact form and information
├── css/
│   └── styles.css          # Main stylesheet (all CSS)
├── js/
│   └── main.js             # JavaScript (for footer year, etc.)
└── images/
    ├── placeholder-worship.jpg
    ├── placeholder-pastor.jpg
    ├── placeholder-png-culture.jpg
    └── placeholder-sermon.jpg
```

- **`index.html`**: Main landing page (welcome, quick intro, navigation).
- **`about.html`**: Church’s story, beliefs, and community outreach.
- **`services.html`**: Mission, vision, ministries, sermons, events, giving.
- **`contact.html`**: Contact form for inquiries or prayer requests.
- **`css/`**: All styling in `styles.css`.
- **`js/`**: JavaScript for small dynamic features (footer year).
- **`images/`**: Store all your church and PNG-themed images here.

---

## How to Install (Set Up)

1. **Download or Clone the Repository**
    - Click "Code" > "Download ZIP" on GitHub, or use:
      ```
      git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
      ```

2. **Extract** (if downloaded as ZIP) and open the folder.

3. **Open in Your Editor**
    - Use VS Code, Sublime, or even Notepad.

4. **Preview in Browser**
    - Double-click any `.html` file (like `index.html`) to open in your web browser.
    - For multi-page navigation, you may want to use [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code, or deploy online.

---

## How to Edit Text & Images

### Editing Text Content

- Open the relevant `.html` file in the root folder (for example, `about.html`).
- Find the section you want to update (use headings, IDs, or search for keywords).
- Edit the text directly between the HTML tags.
    ```html
    <h2>Our Story in Papua New Guinea</h2>
    <p>Update this text with your church’s story...</p>
    ```

### Changing or Adding Images

1. **Replace Placeholders**
    - Go to the `images/` folder.
    - Replace files like `placeholder-worship.jpg` with your own images.
    - Keep the same file name to avoid breaking image links, or update the HTML image path if you use a new name.

2. **Update Image Paths in HTML**
    - Find the relevant HTML tag, for example:
      ```html
      <div class="hero__card" style="background-image:url('images/my-church-photo.jpg');">
      ```
    - Change the file in `images/` and update the path as needed.

---

## Navigation and Links

- Each page has a navigation menu linking to all other pages.
- Update links in the `<nav>` block of each HTML file if you add new sections or rename pages.

---

## Customization Tips

- **Colors & Fonts:** Edit the `css/styles.css` file to change theme colors or fonts.
- **Add/Remove Sections:** Copy or remove `<section>` blocks in the `.html` files as needed.
- **Service Times & Location:** Update these in `services.html` and in the footer of each page.
- **Giving/Donate:** Add your church’s giving details in the Donate section of `services.html`.
- **Contact Form:** The contact form does not submit anywhere by default. To make it work, connect it to a service like [Formspree](https://formspree.io/) or [Google Forms].

---

## Deployment

You can host this site for free using:
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- Or upload to your church’s own web server
- Or you can also use Godaddy.com to buy and host website


> **Note:** If you want a free, simple, static site and don’t need backend scripting:
GitHub Pages, Nelify and Vercel are great choices. If you want full control, backend scripting (PHP), custom email, or want easy drag-and-drop updates: GoDaddy (or any traditional host) is better.


> **Tip:** After uploading, test all navigation and image links!

---

## License

This template is free to use and modify for any Papua New Guinea church or Christian ministry. No attribution required.

---

## God bless your ministry!

For questions or suggestions, please open an issue or pull request.