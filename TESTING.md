# Testing Manual Edits

This document provides instructions on how to test the manual board size editing feature.

## Running the Project

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the Cosmos development server:**
    ```bash
    npx cosmos
    ```
    This will open a browser window with the Cosmos component library.

## Testing the Manual Board Size Editing Feature

1.  **Navigate to the `EditBoardSizeOverlay` component:**
    In the Cosmos UI, navigate to the `components-editboardsizeoverlay--default` fixture.
2.  **Enable editing:**
    Click the "Edit Board" button to enable the editing overlay.
3.  **Resize the board:**
    You should see handles on the corners and edges of the board. Drag these handles to resize the board.
4.  **Move the board:**
    You should see a handle in the center of the board. Drag this handle to move the board.
5.  **Verify the changes:**
    As you resize and move the board, the changes should be reflected in the viewer. The `onModifyEditEvent` prop of the `PCBViewer` component will be called with the updated board dimensions and position. You can check the browser's developer console for logs from this event.
