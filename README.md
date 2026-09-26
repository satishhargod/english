# English Learning App

Chota static Next.js project — har din ek naya "Day" reading card add karke
apni English reading practice track karne ke liye.

## Setup

```bash
npm install
npm run dev
```

Phir browser me kholo: http://localhost:3000

## Naya Day add kaise karein

Sirf ek file edit karni hai: **`data/days.js`**

Us file me array me ek naya object add karo:

```js
{
  id: 2,
  title: "Day 2",
  summary: "Ek line summary",
  content: `Apna paragraph yaha likho.

Naya paragraph likhne ke liye ek khaali line chhodo.`,
},
```

Bas — save karte hi:
- Home page pe naya card automatically aa jayega
- `/day/2` par uski reading page ban jayegi
- Previous/Next navigation bhi apne aap set ho jayegi

## Production build (deploy karne ke liye)

```bash
npm run build
npm start
```

## Structure

```
app/
  page.js              -> Home page (sab days ke cards)
  day/[id]/page.js      -> Ek day ki reading page
data/
  days.js               -> Sara content yahin hai, isi me add karo
```
