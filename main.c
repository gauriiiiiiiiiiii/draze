#include <gtk/gtk.h>
#include <stdlib.h>
#include <stdio.h>

#include "headers/globals.h"

#include "headers/canvas/shapeStructure.h"
#include "headers/main/window.h"
#include "headers/css/load.h"
#include "headers/headings/titlebar.h"
#include "headers/sidebar/sidebar.h"
#include "headers/main/userManual.h"

// Global variables for application state
GtkWidget *window;              // Main application window
struct FigureStack * figureStack;  // Stack to store drawn figures
struct FigureStack * redoStack;    // Stack for redo functionality
GtkWidget *canvas;              // Drawing canvas
double *colorValue;             // Current color selection (RGB)
double *lineWidth;              // Current line width

/**
 * Main application entry point
 * Initializes GTK, creates the main window, and sets up the application
 * 
 * @param argc Number of command line arguments
 * @param argv Array of command line arguments
 * @return int Exit status
 */
int main(int argc, char *argv[])
{
	// Initialize GTK framework
	gtk_init(&argc, &argv);

	// Create and configure main application window
	window = createWindow();
	gtk_window_set_title(GTK_WINDOW(window), "Draze - Where Shapes Take Form");

	// Set up custom title bar with application controls
	designTitleBar();

	// Load custom CSS styles for the application
	load_CSS();

	// Initialize figure stack for storing drawn shapes
	figureStack = createFigureStack();

	// Initialize redo stack for undo/redo functionality
	redoStack = createFigureStack();

	// Initialize color array (RGB values)
	colorValue = (double *)calloc(3, sizeof(double));
	if (colorValue == NULL) {
		fprintf(stderr, "Error: Failed to allocate memory for color values\n");
		return 1;
	}

	// Initialize line width with default value
	lineWidth = (double *)malloc(sizeof(double));
	if (lineWidth == NULL) {
		fprintf(stderr, "Error: Failed to allocate memory for line width\n");
		free(colorValue);
		return 1;
	}
	*lineWidth = 1.0;

	// Create and set up the sidebar with drawing tools
	GtkWidget *sidebar = createSideBar();

	// Display the main window and all its components
	gtk_widget_show_all(window);

	// Start the GTK main event loop
	gtk_main();

	// Cleanup
	free(colorValue);
	free(lineWidth);

	return 0;
}
