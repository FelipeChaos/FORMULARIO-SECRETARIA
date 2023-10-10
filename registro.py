from flask import Flask, request, render_template
import openpyxl

app = Flask(__name__)

# Ruta para manejar la solicitud POST desde el formulario HTML
@app.route('/guardar_datos', methods=['POST'])
def guardar_datos():
    # Obtener los datos del formulario
    cui = request.form['cui']
    proceso = request.form['proceso']
    proceso_constitucional = request.form['proceso-constitucional']
    # Aquí puedes continuar obteniendo más datos del formulario según tus necesidades

    # Crear o abrir un archivo Excel
    archivo_excel = openpyxl.Workbook()
    hoja = archivo_excel.active

    # Agregar encabezados a la hoja de Excel
    hoja.append(['CUI', 'Proceso', 'Proceso Constitucional'])  # Agrega más encabezados según tus datos

    # Agregar los datos del formulario a la hoja de Excel
    hoja.append([cui, proceso, proceso_constitucional])  # Agrega más datos según tus necesidades

    # Guardar el archivo Excel
    archivo_excel.save('datos_formulario.xlsx')

    return 'Datos guardados exitosamente'

if __name__ == '__main__':
    app.run(debug=True)
