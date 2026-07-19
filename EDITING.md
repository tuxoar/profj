# How to edit your website

You do **not** need to know any coding to update this site. You edit a few simple
text files right in your web browser on GitHub, and the site rebuilds itself.

Every change follows the same three steps:

1. Open the file you want to change on GitHub (links below).
2. Click the **pencil icon** (✏️ "Edit this file") in the top-right of the file.
3. Make your change, then click the green **Commit changes…** button.

Wait about **one minute**, then refresh your site — your change will be live at
**https://tuxoar.github.io/profj/**.

> 💡 You can't break anything permanently. If a change has a mistake in it, the
> website simply keeps showing the **last good version** until the mistake is
> fixed. (See "If something looks wrong" at the bottom.)

---

## What lives where

All the text you'll edit is in three files in the `src/content/pages/` folder:

| To change… | Edit this file |
| --- | --- |
| Your name, role, intro, photo, contact info, and the "About" text | `src/content/pages/home.md` |
| The research page text and your **publications** list | `src/content/pages/applied-linguistics-motivation.md` |
| The teaching page text, your **books**, other writing, and **courses** | `src/content/pages/language-pedagogy.md` |

Your contact details in `home.md` are also what appears in the footer at the
bottom of **every** page — you only edit them in one place.

---

## The one rule about these files

Each file has a section at the top between two lines of three dashes:

```
---
title: "..."
...
---
```

- **Don't delete the `---` lines.** Everything between them is a list of
  labelled settings (`label: "value"`). Edit the text **inside the quotes**.
- Below the second `---` is ordinary text (your paragraphs). Edit it freely.
- Lines that start with `#` are just notes to help you — they don't show on the site.

---

## Common changes (copy-paste templates)

### Add a publication
In `applied-linguistics-motivation.md`, find the `publications:` list and add a new
entry by copying these two lines (keep the spacing exactly):

```yaml
  - title: "The full title of your paper"
    meta: "Co-authors · Journal or publisher · Year"
```

### Add a book
In `language-pedagogy.md`, find the `books:` list and copy this block:

```yaml
  - title: "Book title"
    meta: "Your role · Publisher · Year"
    blurb: "One or two sentences about the book."
    cover: ""
```

Leave `cover: ""` empty to show a neutral placeholder. To show a real cover,
upload the image (see below) and put its filename in the quotes, e.g.
`cover: "my-book.jpg"`.

### Add a course
In `language-pedagogy.md`, find the `courses:` list and add a line:

```yaml
  - "Name of the course"
```

### Change your photo
1. Go to the `public/images/` folder on GitHub and click **Add file → Upload files**.
2. Upload your new photo. The easiest option is to name it `portrait.jpg` (the same
   as the current one) — then you don't have to change anything else.
3. If you use a different name, open `home.md` and update the `portrait:` line to
   match, e.g. `portrait: "new-photo.jpg"`.

---

## Writing paragraphs (Markdown quick reference)

The paragraphs (below the `---`) use **Markdown**, a simple way to add formatting:

| You type | You get |
| --- | --- |
| `## A heading` | A section heading |
| `**important**` | **important** (bold) |
| `*emphasis*` | *emphasis* (italic) |
| `[Hamilton](https://www.hamilton.edu)` | a link |
| `- item` (each on its own line) | a bulleted list |

Leave a blank line between paragraphs.

---

## If something looks wrong

If you make a typo in the settings area (for example, delete a quote mark), the
rebuild will fail and your **live site stays on the last working version** — so
visitors never see a broken page. To check:

1. On the repository page, click the **Actions** tab.
2. A green ✓ means your change published successfully. A red ✗ means the last
   change had a problem.
3. Click the red ✗ to see a short message pointing to the file and line to fix,
   then edit that file again. If in doubt, GitHub's **History** lets you undo a
   change by reverting to an earlier version.
