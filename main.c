#include <gtk/gtk.h>
#include <stdlib.h>

#include "headers/globals.h"

#include "headers/canvas/shapeStructure.h"
#include "headers/main/window.h"
#include "headers/css/load.h"
#include "headers/headings/titlebar.h"
#include "headers/sidebar/sidebar.h"
#include "headers/main/userManual.h"

// initializing global variables

GtkWidget *window;
struct FigureStack * figureStack;
struct FigureStack * redoStack;
GtkWidget *canvas;
double *colorValue;
double *lineWidth;

int main(int argc, char *argv[])
{
	// Initialize GTK
	gtk_init(&argc, &argv);

	// creating a window
	window = createWindow();
	gtk_window_set_title(GTK_WINDOW(window), "Draze - Where Shapes Take Form");

	// creating title bar
	designTitleBar();

	// loading css
	load_CSS();

	// creating figure Stack to store figures
	figureStack = createFigureStack();

	// creating a redo stack for redoing the figures
	redoStack = createFigureStack();

	// creating a global color array
	colorValue = (double *)calloc(3, sizeof(double));

	// creating the line Width value
	lineWidth = (double *)malloc(sizeof(double));
	*lineWidth = 1.0;

	// create sidebar
	GtkWidget *sidebar = createSideBar();

	// show the main window
	gtk_widget_show_all(window);

	//launching user manual
	// GtkWidget *dialogBox = createUserManual();

	// start the main gtk loop
	gtk_main();

	return 0;
};

int main(int argc, char *argv[]) {
    gtk_init(&argc, &argv);

    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_title(GTK_WINDOW(window), "Draze");
    gtk_window_set_default_size(GTK_WINDOW(window), 800, 600);
    g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);

    gtk_widget_show_all(window);
    gtk_main();

    return 0;
}
