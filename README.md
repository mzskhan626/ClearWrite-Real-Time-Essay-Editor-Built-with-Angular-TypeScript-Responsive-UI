# ClearWrite-Real-Time-Essay-Editor-Built-with-Angular-TypeScript-Responsive-UI ✍️

An advanced Angular application for improving essay writing using real-time flagged sentence suggestions, sentence replacement, and undo support. Designed to help users edit, enhance, and polish their writing interactively.

---

## 🔍 Features

- **Essay Editor Panel**: A large editable textarea for writing or pasting essays.
- **Flag & Suggest Panel**:
  - Input a flagged sentence.
  - Input a suggested replacement.
  - Apply changes to replace all exact matches of flagged sentences.
- **Real-Time Highlighting**: As the user types a flagged sentence, all exact matches are highlighted live.
- **Undo Functionality**: Revert the most recent replacement.
- **Case-Insensitive & Punctuation-Tolerant Matching** (Advanced Matching)
- **Shared Service Architecture**: State managed using Angular services.
- **Responsive Layout**: Adjusts for desktops, tablets, and mobile screens.
- **Clean UI/UX**: Modern look, input validations, and visual feedback for actions.
- **Basic Unit Testing**: Tests for core matching and replacement logic included.

---

## 📦 Tech Stack

- **Framework**: Angular 16+
- **Languages**: TypeScript, HTML, CSS
- **Tools**: Angular CLI, Jasmine/Karma for testing

---

## 🚀 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mzskhan626/ClearWrite-Real-Time-Essay-Editor-Built-with-Angular-TypeScript-Responsive-UI
   cd ClearWrite-Real-Time-Essay-Editor-Built-with-Angular-TypeScript-Responsive-UI
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   ng serve
   ```

4. **Open in Browser**
   ```
   http://localhost:4200
   ```

---

## 📂 Folder Structure

```
src/
├── app/
│   ├── components/
│   │   ├── essay-editor/
│   │   ├── suggestion-panel/
│   ├── services/
│   │   └── essay.service.ts
│   ├── models/
│   └── app.component.ts
├── assets/
├── styles/
├── tests/
```

---

## ✅ Bonus Features Implemented

- [x] Case-insensitive + punctuation-tolerant matching
- [x] Undo last replacement
- [x] Shared service for state management
- [x] Unit testing
- [x] Fully responsive UI
- [x] Real-time feedback and input validation

---

## 🧪 Testing

To run tests:

```bash
ng test
```

Unit tests exist for:
- Sentence matching logic
- Replacement and undo behavior

---

## 🙋‍♂️ Author

**Mohammed Khan**  
📧 mzskhan626@gmail.com
🔗 [GitHub](https://github.com/mzskhan626)

---



