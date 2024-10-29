import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

const smtpEmail = new brevo.SendSmtpEmail();

export async function sendEmail(
  name: string,
  email: string,
  message: string,
  phone?: string
) {
  smtpEmail.subject = "Mensaje de porfolio";
  smtpEmail.to = [
    { email: "maxi.gartner@hotmail.com", name: "Maximiliano Gartner" },
  ];
  smtpEmail.htmlContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h1 style="color: #0056b3;">Nuevo mensaje desde el porfolio</h1>
    <div style="border: 1px solid #ddd; padding: 10px; margin-top: 10px;">
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p style="margin-left: 10px;">${message}</p>
    </div>
  </div>
`;
  smtpEmail.sender = {
    name: "Maximiliano Gartner",
    email: "maxi.gartner@hotmail.com",
  };

  await apiInstance.sendTransacEmail(smtpEmail);
}
