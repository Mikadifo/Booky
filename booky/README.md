# Booky

This folder contains a NextJS React app that consumes [bookyAPI](../server/) endpoints.

## Client Features

- Book

  - **List:** Shows a table with clickable rows.
  - **Create:** A button named `New` that opens a modal with a empty form.
  - **Update:** Opens a modal with the information of the selected row.
  - **Delete:** A button named `Delete` is available when a row is selected. Asks for confirmation before deleting.
  - Borrow: A button named `Borrow` is available when a row is selected. It opens a form requesting the customer information.
  - Return: A button named `Return` is available when a row is selected. It opens a form requesting the customer information.

- Customer
  - Create: A new customer can be created when it attempts to borrow a book and their ID is not in the system.

## Libraries and Frameworks

- **NextJS (14.1.2):** Provides main functionality for react apps.
- **React (18 and above):** Allows the creation and use of components.
- **React-dom (18 and above):** Provides DOM methods that integrates with components.
- **TailwindCSS(3.3.0 and above):** A CSS framework that facilitates the use of CSS styles as html classes.
- **PostCSS(8 and above):** Transforms CSS styles using JavaScript plugins.
- **Autoprefixer (10.0.1 and above):** A PostCSS plugin to parse CSS.
