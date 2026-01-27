A brief description of your project.
This project is a client-side personal blog/journal application built using HTML, CSS, and JavaScript. It allows users to create, edit, delete, and view blog posts directly in the browser without using any backend or database. All posts are stored using localStorage, ensuring data persistence even after refreshing or reopening the browser. The application is designed to be simple, user-friendly, and efficient for managing personal notes or blog entries.
***********************************************************************************


Instructions on how to run the application (if anything beyond opening index.html in a browser is needed).

Download or clone the project repository.

Open the project folder.

Open the index.html file in any modern web browser (Chrome, Edge, Firefox, etc.).

The application will run locally in the browser.

************************************************************************************

A reflection on your development process, challenges faced, and how you overcame them.
The project was developed using a structured approach by separating concerns into HTML (structure), CSS (styling), and JavaScript (logic). One of the main challenges was handling both creating and editing posts using the same form. This was solved by tracking the ID of the post being edited and updating the existing post instead of creating a new one. Another challenge was ensuring data persistence, which was addressed by properly storing and retrieving posts from localStorage.

**************************************************************

Any known issues or features not implemented.
No search or filter functionality for posts.

No rich text or markdown support.

No confirmation dialog before deleting posts.

UI styling is basic and can be further enhanced.