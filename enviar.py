import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

# Genera los archivos PDF y CSV

# Configura el correo electrónico
from_email = "email"
to_email = "destinatario"
subject = "ENVÍO DE EXPEDIENTES DIGITALES A LA SALA DE CASACIÓN PENAL CORTE SUPREMA DE JUSTICIA"

msg = MIMEMultipart()
msg['From'] = from_email
msg['To'] = to_email
msg['Subject'] = subject

# Adjunta los archivos al correo
pdf_filename = "formulario.pdf"
csv_filename = "formulario.csv"

attachment = open(pdf_filename, "rb")
part = MIMEBase('application', 'octet-stream')
part.set_payload((attachment).read())
encoders.encode_base64(part)
part.add_header('Content-Disposition', "attachment; filename= %s" % pdf_filename)
msg.attach(part)

attachment = open(csv_filename, "rb")
part = MIMEBase('application', 'octet-stream')
part.set_payload((attachment).read())
encoders.encode_base64(part)
part.add_header('Content-Disposition', "attachment; filename= %s" % csv_filename)
msg.attach(part)

# Envía el correo
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(from_email, "tucontraseña")
text = msg.as_string()
server.sendmail(from_email, to_email, text)
server.quit()
