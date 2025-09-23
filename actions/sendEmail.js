const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';

/**
 * Envoie l'email de contact via l'API Brevo.
 * @param {{ name: string; email: string; phone?: string; project?: string; budget?: string; message: string; }} formData
 */
export async function sendContactEmail(formData) {
  if (!process.env.BREVO_API_KEY) {
    throw new Error('La clé API Brevo est manquante. Définissez BREVO_API_KEY dans votre environnement.');
  }

  const { name, email, phone = '', project = '', budget = '', message } = formData;

  const missingField = ['name', 'email', 'message'].find((field) => !formData[field]?.trim());
  if (missingField) {
    throw new Error(`Le champ ${missingField} est requis.`);
  }

  const senderName = process.env.BREVO_SENDER_NAME || '3rdfade';
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'no-reply@3rdfade.com';
  const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL || 'thirdfade@gmail.com';

  const emailPayload = {
    sender: {
      name: senderName,
      email: senderEmail,
    },
    to: [
      {
        email: recipientEmail,
      },
    ],
    replyTo: {
      email,
      name,
    },
    subject: `Nouveau message de ${name}`,
    htmlContent: `
      <h1>Nouveau message depuis le formulaire de contact</h1>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || 'Non communiqué'}</p>
      <p><strong>Type de projet :</strong> ${project || 'Non communiqué'}</p>
      <p><strong>Budget estimé :</strong> ${budget || 'Non communiqué'}</p>
      <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br />')}</p>
    `,
  };

  const response = await fetch(BREVO_ENDPOINT, {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo a renvoyé le statut ${response.status} : ${errorText}`);
  }

  return response.json();
}
