"""
Este es el metodo de envio del formulario
"""

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

# Genera los archivos PDF y CSV

# Configura el correo electrónico
FROM_EMAIL = "email"
TO_EMAIL = "destinatario"
SUBJECT = "ENVÍO DE EXPEDIENTES DIGITALES A LA SALA DE CASACIÓN PENAL CORTE SUPREMA DE JUSTICIA"

msg = MIMEMultipart()
msg['From'] = FROM_EMAIL
msg['To'] = TO_EMAIL
msg['Subject'] = SUBJECT

# Adjunta los archivos al correo
PDF_FILENAME = "formulario.pdf"
CSV_FILENAME = "formulario.csv"

attachment = open(PDF_FILENAME, "rb")
part = MIMEBase('application', 'octet-stream')
part.set_payload((attachment).read())
encoders.encode_base64(part)
part.add_header('Content-Disposition', f"attachment; filename={PDF_FILENAME}")
msg.attach(part)

attachment = open(CSV_FILENAME, "rb")
part = MIMEBase('application', 'octet-stream')
part.set_payload((attachment).read())
encoders.encode_base64(part)
part.add_header('Content-Disposition', f"attachment; filename={CSV_FILENAME}")
msg.attach(part)

# Envía el correo
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(FROM_EMAIL, "password")
text = msg.as_string()
server.sendmail(FROM_EMAIL, TO_EMAIL, text)
server.quit()
